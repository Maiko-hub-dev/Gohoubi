<?php
// テーマの初期設定
function my_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);
}
add_action('after_setup_theme', 'my_setup');


// CSS・JavaScriptの読み込み
function my_script_init()
{
    // jQuery
    wp_deregister_script('jquery');
    wp_enqueue_script(
        'jquery',
        'https://code.jquery.com/jquery-3.6.0.min.js',
        [],
        '3.6.0',
        true
    );

    // Swiper
    wp_enqueue_script(
        'swiper',
        'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js',
        [],
        '12.0.0',
        true
    );

    // メインJavaScript
    wp_enqueue_script(
        'main-js',
        get_template_directory_uri() . '/script.js',
        ['jquery', 'swiper'],
        '1.0.1',
        true
    );

    // メインCSS
    wp_enqueue_style(
        'style-css',
        get_template_directory_uri() . '/main.css',
        [],
        '1.0.1'
    );
        // blogページ専用CSS
    if (is_home()|| is_singular('post')) {
    wp_enqueue_style(
    'blog-css',
    get_template_directory_uri() . '/css/blog-BL_27oE9.css',
     ['style-css'],
    '1.0.0');
    };
// ブログ詳細ページ

// 口コミ一覧・詳細ページ専用CSS
if (is_post_type_archive('voice') || is_singular('voice')) {
    wp_enqueue_style(
        'voice-css',
        get_template_directory_uri() . '/css/voice-D5r0OGl7.css',
        ['style-css'],
        '1.0.0'
    );
}
// キャンペーン一覧・詳細ページ専用CSS
if (is_post_type_archive('campaign') || is_singular('campaign')  || is_tax('campaign_category')) {
    wp_enqueue_style(
        'campaign-css',
        get_template_directory_uri() . '/css/campaign-lHeqFqgR.css',
        ['style-css'],
        '1.0.0'
    );
}
// Corner固定ページ専用CSS
if (is_page('corner')) {
    wp_enqueue_style(
        'corner-css',
        get_theme_file_uri('/css/corner.css'),
        [],
        '1.0.0'
    );
}
// コース一覧・詳細ページ専用CSS
if (is_post_type_archive('course') || is_singular('course')  || is_tax('course')) {
    wp_enqueue_style(
        'course-css',
        get_template_directory_uri() . '/css/course.css',
        ['style-css'],
        '1.0.0'
    );
}
  // Contactページ専用CSS
// Contactページ専用CSS
if (is_page(['contact', 'contact-error', 'contact-thanks'])) {
    $css_path = get_template_directory() . '/css/contact-DPq6i7hV.css';

    wp_enqueue_style(
        'contact-DPq6i7hV-css',
        get_template_directory_uri() . '/css/contact-DPq6i7hV.css',
        array('style-css'),
        file_exists($css_path) ? filemtime($css_path) : '1.0.0'
    );
}
    // Google Fonts
    wp_enqueue_style(
        'Rock',
        'https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'Lato',
        'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'NotoSansJP',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
        [],
        null
    );
    // お問い合わせ・エラー・サンクスページ用JS
if (is_page(['contact', 'contact-error', 'contact-thanks'])) {
    $js_path = get_theme_file_path('/js/contact.js');

    wp_enqueue_script(
        'contact-js',
        get_theme_file_uri('/js/contact.js'),
        [],
        file_exists($js_path) ? filemtime($js_path) : null,
        true
    );
}
}
add_action('wp_enqueue_scripts', 'my_script_init');
/**
 * 全ページ共通のパンくずリスト
 */
function breadcrumbs()
{
    // トップページでは表示しない
    if (is_front_page()) {
        return;
    }

    $items = [];

    // パンくず項目を追加
    $add_item = function ($label, $url = '') use (&$items) {
        $items[] = [
            'label' => $label,
            'url'   => $url,
        ];
    };

    // ホーム
    $add_item('ホーム', home_url('/'));

    // 「設定 → 表示設定」で指定した投稿ページ
    $posts_page_id = (int) get_option('page_for_posts');

    $posts_label = $posts_page_id
        ? get_the_title($posts_page_id)
        : 'お知らせ';

    $posts_url = get_post_type_archive_link('post');

    // 通常投稿の一覧を追加する処理
    $add_posts_index = function () use (
        $add_item,
        $posts_label,
        $posts_url
    ) {
        // ホームと同じURLの場合は重複させない
        if (
            $posts_url &&
            untrailingslashit($posts_url) !== untrailingslashit(home_url('/'))
        ) {
            $add_item($posts_label, $posts_url);
        }
    };

    // カスタム投稿の一覧を追加する処理
    $add_post_type_index = function ($post_type) use ($add_item) {
        $post_type_object = get_post_type_object($post_type);
        $archive_url = get_post_type_archive_link($post_type);

        if ($post_type_object && $archive_url) {
            $add_item(
                $post_type_object->labels->name,
                $archive_url
            );
        }
    };

    if (is_home()) {
        // 通常投稿一覧
        $add_item($posts_label);

    } elseif (is_page()) {
        // 固定ページ：親ページがあれば順番に追加
        $page_id = get_queried_object_id();
        $ancestors = array_reverse(get_post_ancestors($page_id));

        foreach ($ancestors as $ancestor_id) {
            $add_item(
                get_the_title($ancestor_id),
                get_permalink($ancestor_id)
            );
        }

        $add_item(get_the_title($page_id));

    } elseif (is_singular()) {
        // 通常投稿・カスタム投稿の詳細
        $post_id = get_queried_object_id();
        $post_type = get_post_type($post_id);

        if ('post' === $post_type) {
            $add_posts_index();
        } elseif ('attachment' !== $post_type) {
            $add_post_type_index($post_type);
        }

        // 階層を持つカスタム投稿にも対応
        $ancestors = array_reverse(get_post_ancestors($post_id));

        foreach ($ancestors as $ancestor_id) {
            $add_item(
                get_the_title($ancestor_id),
                get_permalink($ancestor_id)
            );
        }

        $add_item(get_the_title($post_id));

    } elseif (is_post_type_archive()) {
        // カスタム投稿一覧
        $post_type_object = get_queried_object();

        $add_item($post_type_object->labels->name);

    } elseif (is_category() || is_tag() || is_tax()) {
        // カテゴリー・タグ・カスタムタクソノミー
        $term = get_queried_object();

        if (is_category() || is_tag()) {
            $add_posts_index();
        } else {
            $taxonomy = get_taxonomy($term->taxonomy);

            // 複数の投稿タイプに紐づく場合は一覧を推測しない
            if ($taxonomy && count($taxonomy->object_type) === 1) {
                $post_type = reset($taxonomy->object_type);

                if ('post' === $post_type) {
                    $add_posts_index();
                } elseif ('page' !== $post_type) {
                    $add_post_type_index($post_type);
                }
            }
        }

        // 親カテゴリー・親ターム
        $ancestors = array_reverse(
            get_ancestors($term->term_id, $term->taxonomy, 'taxonomy')
        );

        foreach ($ancestors as $ancestor_id) {
            $ancestor = get_term($ancestor_id, $term->taxonomy);

            if (!$ancestor || is_wp_error($ancestor)) {
                continue;
            }

            $term_url = get_term_link($ancestor);

            if (!is_wp_error($term_url)) {
                $add_item($ancestor->name, $term_url);
            }
        }

        $add_item($term->name);

    } elseif (is_search()) {
        // 検索結果
        $add_item('「' . get_search_query() . '」の検索結果');

    } elseif (is_404()) {
        // 404
        $add_item('ページが見つかりません');

    } elseif (is_date()) {
        // 日付別アーカイブ
        $add_posts_index();

        if (is_day()) {
            $label = get_the_date('Y年n月j日');
        } elseif (is_month()) {
            $label = get_the_date('Y年n月');
        } else {
            $label = get_the_date('Y年');
        }

        $add_item($label);

    } elseif (is_author()) {
        // 投稿者別アーカイブ
        $add_posts_index();

        $author = get_queried_object();
        $add_item($author->display_name . 'の記事');

    } elseif (is_archive()) {
        // その他のアーカイブ
        $add_item(wp_strip_all_tags(get_the_archive_title()));
    }

    // 2ページ目以降
    $paged = max(
        1,
        (int) get_query_var('paged'),
        (int) get_query_var('page')
    );

    if ($paged > 1) {
        $add_item($paged . 'ページ目');
    }

    // HTML出力
    echo '<div class="breadclumbs">';
    echo '<nav aria-label="パンくずリスト">';
    echo '<ol class="breadcrumb">';

    $last_index = count($items) - 1;

    foreach ($items as $index => $item) {
        if ($index === $last_index) {
            echo '<li><span aria-current="page">'
                . esc_html($item['label'])
                . '</span></li>';
        } elseif (!empty($item['url'])) {
            echo '<li><a href="' . esc_url($item['url']) . '">'
                . esc_html($item['label'])
                . '</a></li>';
        } else {
            echo '<li><span>'
                . esc_html($item['label'])
                . '</span></li>';
        }
    }

    echo '</ol>';
    echo '</nav>';
    echo '</div>';
}
// お問い合わせページの挙動
function buffe_contact_scripts() {
    if (is_page('contact')) {
        wp_enqueue_script(
            'contact-js',
            get_theme_file_uri('/js/contact.js'),
            array(),
            '1.0.0',
            true
        );
         wp_add_inline_script(
            'contact-js',
            'const contactUrls = ' . wp_json_encode([
                'error'  => home_url('/contact-error/'),
                'thanks' => home_url('/contact-thanks/'),
            ]) . ';',
            'before'
        );
    }
}
add_action('wp_enqueue_scripts', 'buffe_contact_scripts');
function gohoubi_course_archive_query(WP_Query $query): void {
    if (is_admin() || !$query->is_main_query()) {
        return;
    }

    if (
        $query->is_post_type_archive('course') ||
        $query->is_tax(['sweets', 'koria', 'premium'])
    ) {
        $query->set('post_type', 'course');
        $query->set('posts_per_page', 6);
    }
}
add_action('pre_get_posts', 'gohoubi_course_archive_query');

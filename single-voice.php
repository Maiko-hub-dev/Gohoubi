<?php get_header(); ?>
<main>
    <!-- voice -->
       <div class="first-view js-first-view voice-view is-visible">
        <div class="first-view__inner view voice-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/beige_sp.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/beige.jpg")); ?>" alt="美しい海で泳ぐ人たち" />
          </picture>
          <div class="view__title diving-title voice-title">
          <h1 class="voice-title__main"><?php the_title(); ?></h1>
        </div>
        </div>
        <?php breadcrumbs(); ?>
     </div>
     <div class="voice-type">
        <div class="voice-list__inner inner-datail">
          <div class="voice-type__inner">
            <?php if (have_posts()) : ?>
                 <?php while (have_posts()) : the_post(); ?>
            <div class="voice__types-illust"></div>
            <div <?php post_class('voice-type__wrapper'); ?>>
              <!-- 投稿本文から取得する -->
              <?php
            $voice_content = get_the_content();
            $voice_heading = '';

            // 投稿本文から最初のH2を取得
            if (preg_match('/<h2\b[^>]*>(.*?)<\/h2>/is', $voice_content, $matches)) {
                $voice_heading = $matches[1];

                // 本文側で同じ見出しが重複しないように削除
                $voice_content = preg_replace(
                    '/<h2\b[^>]*>.*?<\/h2>/is',
                    '',
                    $voice_content,
                    1
                );
            }
            ?>

          <div class="voice-type__titles">
            <time
              datetime="<?php echo esc_attr(get_the_date('Y-m-d')); ?>"
              class="voice-type__date"
            >
              <?php echo esc_html(get_the_date('Y.m.d')); ?>
            </time>

            <?php if ($voice_heading !== '') : ?>
              <h2><?php echo wp_kses_post($voice_heading); ?></h2>
            <?php endif; ?>
          </div>
              <div class="voice-type__article">
                  <?php if (has_post_thumbnail()) : ?>
                    <?php
                    the_post_thumbnail('large', [
                      'class' => 'voice-type__article--img',
                    ]);
                    ?>
                  <?php endif; ?>

                  <div class="voice-type__text">
                   <!-- コンテントを表示 -->
                    <?php echo apply_filters('the_content', $voice_content); ?>
                  </div>
                </div>
            <!-- 各カテゴリーへ遷移する -->
                <?php
                // voiceに紐づけたタクソノミーのスラッグを指定
                $taxonomy = 'voice_category';

                $terms = get_the_terms(get_the_ID(), $taxonomy);

                if ($terms && !is_wp_error($terms)) :
                ?>
        
        <ul class="voice-lists">
            <?php foreach ($terms as $term) : ?>

            <li class="voice-list">
                <img
                src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode-green.png')); ?>"
                class="voice-list__logo"
                alt="ヒトデのアイコン"
                />
                <a href="<?php echo esc_url(get_category_link($term)); ?>">
                <?php echo esc_html($term->name); ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
        <?php endif; ?>
         <!-- 前後の記事へ移動 -->
           <?php
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            ?>
              <!-- ページネーション -->
               <nav class="voice__contents--jump pagination voice-type__page">

                  <?php if ($prev_post) : ?>
                      <a
                          class="prev page-links"
                          href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>"
                          aria-label="前の記事へ"
                      ></a>
                  <?php endif; ?>
                  <?php if ($next_post) : ?>
                            <a
                                class="next page-links"
                                href="<?php echo esc_url(get_permalink($next_post->ID)); ?>"
                                aria-label="次の記事へ"
                            ></a>
                        <?php endif; ?>
               </nav>
              </div>
              <?php endwhile; ?>
           <?php else : ?>
             <p>記事が投稿されていません</p>
            </div>
              <?php endif; ?>
          </div>
              <!-- ここにサイドバーを表示する -->

        <?php get_sidebar(); ?>
        </div>
      </div>
      <!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>

</main>
<?php get_footer(); ?>

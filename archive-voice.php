<?php get_header(); ?>
<main>
     <div class="first-view js-first-view voice-view is-visible">
        <div class="first-view__inner view voice-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/campaign04@2x.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/campaign04@2x.jpg")); ?>" alt="美しい海で泳ぐ人たち" />
          </picture>
        </div>
          <div class="view__title diving-title voice-title">
          <h1 class="voice-title__main">口コミ</h1>
        </div>
        <?php breadcrumbs(); ?>
     </div>
   <!-- パンくずリスト -->
      <div class="voice-type">
        <div class="voice-list__inner inner-datail">
          
       
      </div>
      <!-- コンテンツ部分 -->
        <div class="voice-type__wrapper">
          <div class="">
       <!-- ここからサブループ -->
        <?php
          $args = [
              "post_type" => "voice",
              "posts_per_page" => 6,
              'post_status'    => 'publish',
          ];
          $the_query = new WP_Query($args);
          ?>
          <?php if ($the_query->have_posts()) : ?>
            <div class="voice-type__cards">
                 <div class="voice__card--gourmet">
            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
             <a href="<?php the_permalink(); ?>" class="voice-type__card">
                  <div class="voice__type--titles">
                    <div class="voice__type--heading voice__active">
                      <p class="voice__type--age">20代(女性)</p>
                      <h4 class="voice__type-content"><?php the_title(); ?></h4>
                    </div>
                    <!-- ヘディングの横並び -->
                    <h4 class="voice__card-title voice__card-title-next">ここにタイトルが入ります。ここにタイトル</h4>
                    <!-- ここまでヘディングの左側 -->
                  </div>
                  <div class="voice-types__image">
                      <?php
                      if (has_post_thumbnail()) {
                        the_post_thumbnail('full', [
                          'class' => 'voice-types__img',
                          'alt'   => get_the_title(),
                        ]);
                      }
                      ?>
                  </div>
                </a>
                <?php endwhile; ?>
                </div>
              </div>
            <?php wp_reset_postdata(); ?>
              <?php else : ?>
                  <p>記事が投稿されていません</p>
              <?php endif; ?>
            </div>


<!-- カテゴリー一覧 -->
<ul class="voice-type__tablist">

  <!-- ALL -->
  <li class="voice__tabAll">
    <?php if (is_post_type_archive('voice')) : ?>
      <span>all</span>
    <?php else : ?>
      <a href="<?php echo esc_url(get_post_type_archive_link('voice')); ?>">
        all
      </a>
    <?php endif; ?>
  </li>

  <?php
  $voice_taxonomies = [
    'meet'     => 'ステーキ',
    'birthday' => '誕生日祝い',
  ];

  foreach ($voice_taxonomies as $taxonomy => $label) :

    $terms = get_terms([
      'taxonomy'   => $taxonomy,
      'hide_empty' => false,
    ]);

    $term = (!is_wp_error($terms) && !empty($terms))
      ? $terms[0]
      : null;

    $term_link = $term ? get_term_link($term) : null;

    $has_link = is_string($term_link) && $term_link !== '';
  ?>

    <li class="voice__type-content">
      <?php if ($has_link) : ?>
        <a href="<?php echo esc_url($term_link); ?>">
          <?php echo esc_html($label); ?>
        </a>
      <?php else : ?>
        <span><?php echo esc_html($label); ?></span>
      <?php endif; ?>
    </li>

  <?php endforeach; ?>

</ul>

        </div>
     
      <!-- サブループ終わり -->
        </div>
      </div>
      <!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>

</main>
<?php get_footer(); ?>

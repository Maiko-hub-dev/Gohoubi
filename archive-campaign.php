<?php get_header(); ?>
<main>
     <div class="first-view js-first-view campaign-view is-visible">
        <div class="first-view__inner view campaign-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/campaign03@2x.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/campaign03@2x.jpg")); ?>" alt="" />
          </picture>
        </div>
          <div class="view__title diving-title campaign-title">
          <h1 class="campaign-title__main">キャンペーン</h1>
        </div>
        <?php breadcrumbs(); ?>
     </div>
   <!-- パンくずリスト -->
      <div class="campaign-type">

      <!-- コンテンツ部分 -->
        <div class="campaign-type__wrapper">
            <!-- カテゴリー一覧 -->
<ul class="campaign-type__tablist">
  <!-- ALL -->
  <li class="campaign-list__inner inner-datail campaign-type__inner">
    <?php if (is_post_type_archive('campaign')) : ?>
      <span
        class="campaign__type-content is-active"
        aria-current="page">
        all
      </span>
    <?php else : ?>
      <a
        href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
        class="campaign__type-content">
        all
      </a>
    <?php endif; ?>
  </li>

  <!-- ターム別タブ -->
  <?php
  $taxonomy = 'campaign_category';

  $campaign_terms = [
    'anniversary' => '記念日',
    'pointcard'   => 'ポイント企画',
    'birthday'    => '誕生日祝い',
    'child-lucky' => 'お子様連れの方',
  ];

  foreach ($campaign_terms as $slug => $label) :
    $term = get_term_by('slug', $slug, $taxonomy);

    if (!$term) {
      continue;
    }

    $term_link = get_term_link($term);

    if (is_wp_error($term_link)) {
      continue;
    }

    $is_current = is_tax($taxonomy, $slug);
  ?>
    <li class="campaign-list__inner inner-datail campaign-type__inner">
      <?php if ($is_current) : ?>
        <span
          class="campaign__type-content is-active"
          aria-current="page">
          <?php echo esc_html($label); ?>
        </span>
      <?php else : ?>
        <a
          href="<?php echo esc_url($term_link); ?>"
          class="campaign__type-content">
          <?php echo esc_html($label); ?>
        </a>
      <?php endif; ?>
    </li>
  <?php endforeach; ?>
</ul>
          <div class="">
       <!-- ここからサブループ -->
        <?php
          $args = [
              "post_type" => "campaign",
              "posts_per_page" => 6,
              'post_status'    => 'publish',
          ];
          $the_query = new WP_Query($args);
          ?>
          <?php if ($the_query->have_posts()) : ?>
            <div class="campaign-types__cards">

            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
             <a href="<?php the_permalink(); ?>" class="campaign-type__card">
             
                  <div class="campaign-types__image">
                      <?php
                      if (has_post_thumbnail()) {
                        the_post_thumbnail('full', [
                          'class' => 'campaign-types__img',
                          'alt'   => get_the_title(),     ]);
                      }  ?>
                  </div>
                  <div class="campaign__types--title">
                      <h4 class="campaign__type-subtitle"><?php the_title(); ?></h4>
                  </div>
                  <p class="campaign__type--age"><?php the_content(); ?></p>
                </a>
                <?php endwhile; ?>
                </div>
              </div>
            <?php wp_reset_postdata(); ?>
              <?php else : ?>
                  <p>記事が投稿されていません</p>
              <?php endif; ?>
            </div>

      <!-- サブループ終わり -->
        </div>
      </div>
      <!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>

</main>
<?php get_footer(); ?>

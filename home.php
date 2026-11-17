<?php get_header(); ?>
<main>
    <div class="first-view js-first-view blog-view is-visible">
        <div class="first-view__inner view blog-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/fv.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/fv-1.jpg")); ?>" alt="牛" />
          </picture>
        </div>
        <div class="view__title diving-title blog-title">
          <h1 class="blog-title__main">スタッフブログ</h1>
        </div>
        <?php breadcrumbs(); ?>
    </div>
    <div class="blog-type">
      <!-- パンくずリスト -->

      <div class="blog-list__inner">
        <div class="blog-type__inner">
          <div class="blog__types-illust"></div>
          <div class="blog-list__wrapper">
            <div class="blog-list__contents">
           <!-- 書き換え -->
            <div class="contents__inner">
  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
      <?php
      $blog_content = get_the_content();
      $blog_heading = '';

      if (preg_match('/<h2\b[^>]*>(.*?)<\/h2>/is', $blog_content, $matches)) {
        $blog_heading = wp_strip_all_tags($matches[1]);
      }
      ?>

      <a href="<?php the_permalink(); ?>" class="blog__card">
        <div class="blog__card-images">
          <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('full', ['class' => 'blog__card--image']); ?>
          <?php else : ?>
            <img
              class="blog__card--image"
              src="<?php echo esc_url(get_theme_file_uri('/images/noimage.jpg')); ?>"
              alt="NoImage画像"
            />
          <?php endif; ?>
        </div>

        <div class="blog__card--contents">
          <div class="blog__card--titles">
            <time
              class="blog__card-date"
              datetime="<?php echo esc_attr(get_the_date('Y-m-d')); ?>"
            >
              <?php echo esc_html(get_the_date('Y.m.d')); ?>
            </time>

            <?php if ($blog_heading !== '') : ?>
              <p class="blog__card--txt">
                <?php echo esc_html($blog_heading); ?>
              </p>
            <?php endif; ?>
          </div>
        </div>
      </a>

    <?php endwhile; ?>
  <?php else : ?>
    <p>記事が投稿されていません</p>
  <?php endif; ?>
</div>
            </div>
          </div>
          <!-- ページネーション -->

       <!-- ページネーション -->

        <!-- ページネーション -->
        <div class="blog__contents--jump">
          <?php
          the_posts_pagination([
            'mid_size'  => 1,
            'prev_text' => '',
            'next_text' => '',
          ]);
          ?>
        </div>

                </div>
      <!-- ここにサイドバーを表示する -->

        <?php get_sidebar(); ?>

      </div>
    </div>

<!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>
    <!-- トップへ戻る -->
    <div class="pagetop">
      <a href="#top">
        <span></span>
      </a>
    </div>
</main>
<?php get_footer(); ?>

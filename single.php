<?php get_header(); ?>
<main>
       <div class="first-view js-first-view blog-view is-visible">
        <div class="first-view__inner view blog-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/fv-1.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/fv.jpg")); ?>" alt="美しい海" />
          </picture>
        </div>
        <div class="view__title diving-title blog-title">
          <h1 class="blog-title__main"><?php the_title(); ?></h1>
        </div>
        <?php breadcrumbs(); ?>
    </div>
     <div class="blog-type">
        <div class="blog-list__inner inner-datail">
          <div class="blog-type__inner">
            <?php if (have_posts()) : ?>
                 <?php while (have_posts()) : the_post(); ?>
            <div class="blog__types-illust"></div>
            <div <?php post_class('blog-type__wrapper'); ?>>
 
              <div class="blog-type__titles">
                <time datetime="<?php the_time('Y-m-d'); ?>" class="blog-type__date"><?php echo get_the_date('Y.m.d'); ?></time>
                <h2><?php the_title(); ?></h2>
              </div>
        
              <div class="blog-type__article">
              <?php if (has_post_thumbnail()) : ?>
                <?php
                the_post_thumbnail('full', [
                  'class' => 'blog-type__article--img',
                ]);
                ?>
              <?php endif; ?>

              <div class="blog-type__text">
                <?php the_content(); ?>
              </div>
            </div>

            <!-- 各カテゴリーへ遷移する -->

            <?php
            $categories = get_categories([
                    'slug' => ['Community', 'experience', 'activity'],
                    'hide_empty' => false,
                ]);
            if (!empty($categories)) :
            ?>
        <ul class="blog-lists">
            <?php foreach ($categories as $category) : ?>
            <li class="blog-list">
                <img
                src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode-green.png')); ?>"
                class="blog-list__logo"
                alt="ヒトデのアイコン"
                />
                <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>">
                <?php echo esc_html($category->name); ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
        <?php endif; ?>

              <p class="blog-type__description">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
              <!-- ページネーション -->
              <nav class="blog__contents--jump pagination blog-type__page">
                <a class="prev page-links" href="#"></a>
                <a class="next page-links" href="#"></a>
              </nav>
              <?php endwhile; ?>
           </div>
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

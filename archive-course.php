<?php get_header(); ?>


<main>
<?php
$course_taxonomies = [
    'sweets'  => 'スイーツコース',
    'koria'   => '韓国グルメ',
    'premium' => 'プレミアムコース',
];
?>
    <div class="first-view js-first-view course-view is-visible">
        <div class="first-view__inner view course-view__inner">
            
        </div>

        <div class="view__title diving-title course-title">
            <h1 class="course-title__main">コース紹介</h1>
        </div>

        <?php breadcrumbs(); ?>
    </div>
   <!-- パンくずリスト -->

    <!-- もう一つのhtml -->
    <section class="course-detail">
    <div class="course-detail__inner">

      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

          <article id="post-<?php the_ID(); ?>" <?php post_class('course-detail__article'); ?>>
            <div class="course-detail__titles">
            <h2 class="course-detail__title">
              <?php the_title(); ?>
            </h2>
             <?php
                // 投稿本文を取得
                $course_single_content = get_the_content();

                // 本文内の最初のh3から文字を取得
                $course_single_heading = '';

                if (preg_match('/<h3\b[^>]*>(.*?)<\/h3>/is', $course_single_content, $matches)) {
                    $course_single_heading = trim(wp_strip_all_tags($matches[1]));
                }
                ?>

                <?php if ($course_single_heading !== '') : ?>
                    <h3 class="course__txt-content">
                    <?php echo esc_html($course_single_heading); ?>
                    </h3>
                <?php endif; ?>
            </div>

            <?php if (has_post_thumbnail()) : ?>
              <div class="course-detail__image">
                <?php
                the_post_thumbnail('full', [
                  'class' => 'course-detail__img',
                ]);
                ?>
              </div>
            <?php endif; ?>

            <div class="course-detail__content">
              <?php the_content(); ?>
            </div>


          </article>

        <?php endwhile; ?>
      <?php endif; ?>

    </div>
  </section>
  <!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>

</main>

<?php get_footer(); ?>

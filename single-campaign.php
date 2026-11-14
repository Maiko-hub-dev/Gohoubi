<?php get_header(); ?>

<main>
  <section class="campaign-detail">
    <div class="campaign-detail__inner">

      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

          <article id="post-<?php the_ID(); ?>" <?php post_class('campaign-detail__article'); ?>>

            <h1 class="campaign-detail__title">
              <?php the_title(); ?>
            </h1>

            <?php if (has_post_thumbnail()) : ?>
              <div class="campaign-detail__image">
                <?php
                the_post_thumbnail('full', [
                  'class' => 'campaign-detail__img',
                ]);
                ?>
              </div>
            <?php endif; ?>

            <div class="campaign-detail__content">
              <?php the_content(); ?>
            </div>

            <div class="campaign-detail__back">
              
              <div class="common__btn-wrap one-back">
                    <a
                      href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
                      class="campaign__btn common__btn one-back"
                    >
                      <span class="campaign__btn--text common__btn--txt">campaign一覧へ</span>
                      <span class="common__btn--arrow"></span>
                    </a>
                </div>
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

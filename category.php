
<?php get_header(); ?>

<main>
  <section class="blog">
    <div class="blog__inner inner">

      <h1 class="blog__title">
        <?php single_cat_title(); ?>
      </h1>

      <?php if (have_posts()) : ?>
        <ul class="blog__lists">

          <?php while (have_posts()) : the_post(); ?>
            <li class="blog__item">
              <a href="<?php the_permalink(); ?>">
                <h2><?php the_title(); ?></h2>
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                  <?php echo esc_html(get_the_date('Y.m.d')); ?>
                </time>
              </a>
            </li>
          <?php endwhile; ?>

        </ul>

        <?php the_posts_pagination(); ?>

      <?php else : ?>
        <p>このカテゴリーにはまだ記事がありません。</p>
      <?php endif; ?>

    </div>
  </section>
</main>

<?php get_footer(); ?>


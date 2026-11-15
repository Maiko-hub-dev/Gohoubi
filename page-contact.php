<?php get_header(); ?>
<main>
         <div class="first-view js-first-view contact-view is-visible">
        <div class="first-view__inner view contact-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/fv_contact_sp.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/fv_contact@2x.jpg")); ?>" alt="" />
          </picture>
        </div>
          <div class="view__title diving-title contact-title">
          <h1 class="contact-title__main">お問い合わせ</h1>
        </div>
         </div>
        <?php breadcrumbs(); ?>
     </div>
	<?php echo do_shortcode('[contact-form-7 id="a9ecf88"  title="お問い合わせ"]'); ?>
</main>
<?php get_footer(); ?>

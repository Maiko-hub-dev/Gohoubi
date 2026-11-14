<footer class="footer">
<div class="footer__inner inner inner--footer">
    <div class="footer__wrapper">
    <div class="footer__titles">
        <h2 class="footer__title">
        <img src="<?php echo esc_url(get_theme_file_uri("/image/treat-meet.png")); ?>" alt="CodeUpsのロゴ" class="footer__img" />
        </h2>
        <div class="footer__sns">
        <span class="footer__sns-facebook">
            <img src="<?php echo esc_url(get_theme_file_uri("/images/common/facebook.svg")); ?>" alt="facebookのロゴ" class="footer__sns-logo" />
        </span>
        <span class="footer__sns-insta">
            <img src="<?php echo esc_url(get_theme_file_uri("/images/common/instagram.svg")); ?>" alt="instagramのロゴ" class="footer__sns-logo" />
        </span>
        </div>
    </div>
    <div class="footer__global-navigations">
        <!-- ナビゲーションズ -->
        <div class="footer__navigations">
        <?php
$posts_page_id = (int) get_option('page_for_posts');
$blog_url = $posts_page_id
  ? get_permalink($posts_page_id)
  : home_url('/blog/');
?>

<ul class="footer__items-right footer-content footer__navigation footer__navigation-1st">
  <li class="footer__item footer__head">
    <a
      href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
      class="footer__link footer__link-title"
    >
      <img
        src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode.png')); ?>"
        class="footer__logo"
        alt="ヒトデのアイコン"
      />
      <span class="footer__link-main footer__link-main-main">
        キャンペーン
      </span>
    </a>
  </li>

  <li class="footer__item footer__inner-content footer__inner-content2">
    <a
      href="<?php echo esc_url(home_url('/corner/')); ?>"
      class="footer__link"
    >
      <span class="footer__link-content footer__link-content2">
        コーナー
      </span>
    </a>
  </li>

  <li class="footer__item footer__inner-content footer__item2">
    <a
      href="<?php echo esc_url(get_post_type_archive_link('course')); ?>"
      class="footer__link"
    >
      <span class="footer__link-content footer__link-content2">
        コース
      </span>
    </a>
  </li>

  <li class="footer__item footer__inner-content footer__item3">
    <a
      href="<?php echo esc_url($blog_url); ?>"
      class="footer__link"
    >
      <span class="footer__link-content footer__link-content2">
        ブログ
      </span>
    </a>
  </li>

  <li class="footer__item footer__head footer__star">
    <a
      href="<?php echo esc_url(get_post_type_archive_link('voice')); ?>"
      class="footer__link footer__link-title"
    >
      <img
        src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode.png')); ?>"
        class="footer__logo"
        alt="ヒトデのアイコン"
      />
      <span class="footer__link-main footer__link-main-main">
        お客様の声
      </span>
    </a>
  </li>

  <li class="footer__item footer__inner-content footer__item3">
    <a
      href="<?php echo esc_url(home_url('/contact/')); ?>"
      class="footer__link"
    >
      <span class="footer__link-content footer__link-content2">
        お問い合わせ
      </span>
    </a>
  </li>
</ul>
        
</div>
        <!-- ナビゲーションズ -->
    </div>
    <!-- グローバルナビゲーションズ -->
    </div>
</div>
<div class="footer__copyrights">
    <p class="footer__copyright-txt"><span class="footer__sub">Copyright&nbsp;</span><span class="footer__sub">&copy; <?php echo wp_date("Y");?></span><span class="footer__sub footer__sub-sub">&nbsp;CodeUps LLC.</span><span class="footer__sub footer__sub-sub">&nbsp;All Rights Reserved.</span></p>
</div>
</footer>
<?php wp_footer(); ?>
</body>

</html>

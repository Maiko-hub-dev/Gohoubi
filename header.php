<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php if (is_404()) : ?>
    <meta http-equiv="refresh" content=" 10; url=<?php echo esc_url(home_url("")); ?>">
<?php endif; ?>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php if (is_front_page()) : ?>
        <div id="splash">
      <div id="splash_logo"><img src="<?php echo esc_url(get_theme_file_uri("/image/name.png")); ?>" alt="ごほうびビュッフェ" class="fadeUp" /></div>
      <!--画像部分は適宜差し換えてください-->
      <!--/splash-->
    </div>
  
    <div class="c-loading js-loading">
      <div class="c-loading__item c-loading__item--left"></div>
      <div class="c-loading__item c-loading__item--right"></div>
    </div>
      <?php endif; ?>
    <header class="header js-header">
      <div class="headeer__inner">
        <div class="header__skelto">
          <a href="<?php echo esc_url( home_url('/') ); ?>" class="header__link">
            <img src="<?php echo esc_url(get_theme_file_uri("/image/treat-meet.png")); ?>" alt="ごほうびロゴ" loading="lazy" />
          </a>
        </div>
      </div>
      <!-- PCのナビゲーション -->
      <ul class="header__nav">
        <li class="header__navigation navigation">
          <a href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>" class="navigation__link">
            <span class="navigation__eng">campaign</span>
            <span class="navigation__japan">キャンペーン</span>
          </a>
        </li>
        <li class="header__navigation navigation header__nav--link">
            <a href="<?php echo esc_url(home_url('/corner/')); ?>" class="navigation__link">
              <span class="headeer__nav-aboutus">
                <span class="navigation__eng">corner</span>
                <span class="navigation__japan">コーナー</span>
              </span>
            </a>
          </li>
        <li class="header__navigation header__nav--link3">
          <a href="<?php echo esc_url(get_post_type_archive_link('course')); ?>" class="navigation__link">
            <span class="navigation__eng">course</span>
            <span class="navigation__japan navigation__japan--info">コース</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link4">
          <?php
            $posts_page_id = (int) get_option('page_for_posts');
            $blog_url = $posts_page_id
              ? get_permalink($posts_page_id)
              : home_url('/blog/');
            ?>
          <a href="<?php echo esc_url($blog_url); ?>" class="navigation__link">
            <span class="navigation__eng">blog</span>
            <span class="navigation__japan">ブログ</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link5">
          <a href="<?php echo esc_url(get_post_type_archive_link('voice')); ?>" class="navigation__link">
            <span class="navigation__eng">voice</span>
            <span class="navigation__japan">お客様の声</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="navigation__link">
            <span class="navigation__eng">contact</span>
            <span class="navigation__japan">お問合せ</span>
          </a>
        </li>
      </ul>

      <div class="header__btns">
        <div class="header__menu-btn sp__btn hamberger js-hamberger u-mobile menu">
          <span class="menu__button"></span>
          <span class="menu__button2 menu__button"></span>
          <span class="menu__button3 menu__button"></span>
        </div>
        <!--ハンバーガー-->
      </div>
      <!-- SPのドロワー -->
      <div class="sp-nav js-drawer">
      <?php
        $posts_page_id = (int) get_option('page_for_posts');
        $blog_url = $posts_page_id
          ? get_permalink($posts_page_id)
          : home_url('/blog/');
        ?>

<div class="sp-nav__drawers drawers header__drawer">
  <div class="sp-nav__drawer drawers_drawer drawer header__drawer-content">
    <ul class="drawer__items drawer-content">

      <li class="drawer__item drawer__head">
        <a
          href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
          class="drawer__link drawer__link-title"
        >
          <img
            src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode.png')); ?>"
            class="drawer__logo"
            alt="ヒトデのアイコン"
          />
          <span class="drawer__link-main">キャンペーン</span>
        </a>
      </li>

      <li class="drawer__item drawer__head-content">
        <a
          href="<?php echo esc_url(home_url('/corner/')); ?>"
          class="drawer__link"
        >
          <span class="drawer__link-content">コーナー</span>
        </a>
      </li>

      <li class="drawer__item drawer__head-content drawer__head-content2">
        <a
          href="<?php echo esc_url(get_post_type_archive_link('course')); ?>"
          class="drawer__link"
        >
          <span class="drawer__link-content">コース</span>
        </a>
      </li>

      <li class="drawer__item drawer__head-content drawer__head-content3">
        <a
          href="<?php echo esc_url($blog_url); ?>"
          class="drawer__link"
        >
          <span class="drawer__link-content">ブログ</span>
        </a>
      </li>

      <li class="drawer__item drawer__head3">
        <a
          href="<?php echo esc_url(get_post_type_archive_link('voice')); ?>"
          class="drawer__link drawer__link-title"
        >
          <img
            src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode.png')); ?>"
            class="drawer__logo"
            alt="ヒトデのアイコン"
          />
          <span class="drawer__link-main">お客様の声</span>
        </a>
      </li>

      <li class="drawer__item drawer__head3">
        <a
          href="<?php echo esc_url(home_url('/contact/')); ?>"
          class="drawer__link drawer__link-title"
        >
          <img
            src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode.png')); ?>"
            class="drawer__logo"
            alt="ヒトデのアイコン"
          />
          <span class="drawer__link-main">お問い合わせ</span>
        </a>
      </li>

    </ul>
  </div>
</div>
      </div>
      <!--ドロワー-->
    </header>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

        <div id="splash">
      <div id="splash_logo"><img src="<?php echo esc_url(get_theme_file_uri("/images/common/loading.svg")); ?>" alt="ローディング" class="fadeUp" /></div>
      <!--画像部分は適宜差し換えてください-->
      <!--/splash-->
    </div>
    <div class="c-loading js-loading">
      <div class="c-loading__item c-loading__item--left"></div>
      <div class="c-loading__item c-loading__item--right"></div>
    </div>
    <header class="header js-header">
      <div class="headeer__inner">
        <div class="header__skelto">
          <a href="index.html" class="header__link">
            <img src="<?php echo esc_url(get_theme_file_uri("/images/common/logo.svg")); ?>" alt="Divingショップロゴ" loading="lazy" />
          </a>
        </div>
      </div>
      <!-- PCのナビゲーション -->
      <ul class="header__nav">
        <li class="header__navigation navigation">
          <a href="#campaign" class="navigation__link">
            <span class="navigation__eng">campaign</span>
            <span class="navigation__japan">キャンペーン</span>
          </a>
        </li>
        <li class="header__navigation navigation header__nav--link">
          <a href="#aboutus" class="navigation__link">
            <span class="headeer__nav-aboutus"> <span class="navigation__eng">about</span><span class="navigation__txt">&nbsp;us</span> </span>
            <span class="navigation__japan">私たちについて</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link3">
          <a href="#information" class="navigation__link">
            <span class="navigation__eng">information</span>
            <span class="navigation__japan navigation__japan--info">ダイビング情報</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link4">
          <a href="#care_price" class="navigation__link">
            <span class="navigation__eng">blog</span>
            <span class="navigation__japan">ブログ</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link5">
          <a href="#faq" class="navigation__link">
            <span class="navigation__eng">voice</span>
            <span class="navigation__japan">お客様の声</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link">
          <a href="#faq" class="navigation__link">
            <span class="navigation__eng">price</span>
            <span class="navigation__japan">料金一覧</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link">
          <a href="#faq" class="navigation__link">
            <span class="navigation__eng">FAQ</span>
            <span class="navigation__japan">よくある質問</span>
          </a>
        </li>
        <li class="header__navigation header__nav--link">
          <a href="#faq" class="navigation__link">
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
        <div class="sp-nav__drawers drawers header__drawer">
          <div class="sp-nav__drawer drawers_drawer drawer header__drawer-content">
            <ul class="drawer__items drawer-content">
              <li class="drawer__item drawer__head">
                <a href="#campaign" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">キャンペーン</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content">
                <a href="#licence" class="drawer__link">
                  <span class="drawer__link-content">ライセンス取得</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content2">
                <a href="#rental" class="drawer__link">
                  <span class="drawer__link-content">貸切体験ダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content3">
                <a href="#night-diving" class="drawer__link">
                  <span class="drawer__link-content">ナイトダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head3">
                <a href="#aboutus" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">私たちについて</span>
                </a>
              </li>
              <li class="drawer__item drawer__head3">
                <a href="#information" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">ダイビング情報</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content4">
                <a href="#licence-get" class="drawer__link">
                  <span class="drawer__link-content">ライセンス講習</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content4">
                <a href="#experiecse" class="drawer__link">
                  <span class="drawer__link-content">体験ダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content4">
                <a href="#fan-diving" class="drawer__link">
                  <span class="drawer__link-content">ファンダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head drawer__head2">
                <a href="#blog" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">ブログ</span>
                </a>
              </li>
            </ul>
            <ul class="drawer__items drawer-content">
              <li class="drawer__item drawer__head">
                <a href="#voice" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">お客様の声</span>
                </a>
              </li>
              <li class="drawer__item drawer__head drawer__head3">
                <a href="#price" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main drawer__link-main-txt">料金一覧</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content">
                <a href="#" class="drawer__link">
                  <span class="drawer__link-content">ライセンス講習</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content4">
                <a href="#" class="drawer__link">
                  <span class="drawer__link-content">体験ダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head-content drawer__head-content2">
                <a href="#" class="drawer__link">
                  <span class="drawer__link-content">ファンダイビング</span>
                </a>
              </li>
              <li class="drawer__item drawer__head drawer__head2">
                <a href="#" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">よくある質問</span>
                </a>
              </li>
              <li class="drawer__item drawer__head4">
                <a href="#" class="drawer__link drawer__link-title drawer__link-privacy">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__content drawer__link-main-pri drawer__link-main"><span>プライバシー</span><br class="u-mobile" /><span class="drawer__second">ポリシー</span></span>
                </a>
              </li>
              <li class="drawer__item drawer__head3">
                <a href="#" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("./images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">利用規約</span>
                </a>
              </li>
              <li class="drawer__item drawer__head3">
                <a href="#" class="drawer__link drawer__link-title">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/hitode.png")); ?>" class="drawer__logo" alt="ヒトデのアイコン" />
                  <span class="drawer__link-main">お問い合わせ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--ドロワー-->
    </header>

<?php get_header(); ?>
<main>
      <div class="first-view js-first-view">
        <div class="first-view__inner view">
          <div class="swiper view__swiper">
            <div class="swiper-wrapper view__wrapper">
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/fv-sp.jpg")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/first-view.jpg")); ?>" alt="美しい海でウミガメが泳いでいる" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/into-sea-sp.jpg")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/into-sea.jpg")); ?>" alt="海でウミガメが自由に泳いでいる" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/sea-ship-sp.jpg")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/sea-ship.jpg")); ?>" alt="海でダイビングをしようとする人たちとその船" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/beach-side-sp.jpg")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/beachside.jpg")); ?>" alt="綺麗なビーチサイド" />
                </picture>
              </div>
            </div>
          </div>
          <div class="view__title diving-title">
            <h1 class="diving-title__main">diving</h1>
            <div class="diving-title__sub">into the ocean</div>
          </div>
        </div>
      </div>
      <section class="campaign">
        <div class="campaign__inner">
          <div class="campaign__container">
            <div class="campaign__wrapper">
              <div class="campaign__head">
                <h2 class="campaign__subtitle">キャンペーン</h2>
                <h3 class="campaign__title common-title">campaign</h3>

                <div class="campaign__navigation">
                  <div class="campaign-button-prev"></div>
                  <div class="campaign-button-next"></div>
                </div>
              </div>
              <div class="campaign__contents contents__inner campaign__slider">
                <div class="contents__inner swiper2">
                  <div class="swiper-wrapper swiper2-wrapper slide">
                    <div class="swiper-slide slide-content campaign__swiper-slide">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/diving-fish.jpg")); ?>" alt="豊かな海で南国の魚が泳いでいる" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">ライセンス講習</h4>
                          <p class="slide__block-txt">ライセンス取得</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥56,000</span>
                            <span class="slide__plice">¥46,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content campaign__swiper-slide">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/harbor.jpg")); ?>" alt="美しい浜辺" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">体験ダイビング</h4>
                          <p class="slide__block-txt">貸切体験ダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥24,000</span>
                            <span class="slide__plice">¥18,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content campaign__swiper-slide">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/jelly-fish.jpg")); ?>" alt="夜の海でクラゲが光りながらが泳いでいる" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">体験ダイビング</h4>
                          <p class="slide__block-txt">ナイトダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥10,000</span>
                            <span class="slide__plice">¥8,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/float-div.jpg")); ?>" alt="海でファンダイビングをする人たち" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title slide__block-title2">ファンダイビング</h4>
                          <p class="slide__block-txt">貸切ファンダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥20,000</span>
                            <span class="slide__plice">¥16,000</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide slide-content">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/diving-fish.jpg")); ?>" alt="豊かな海で南国の魚が泳いでいる" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">ライセンス講習</h4>
                          <p class="slide__block-txt">ライセンス取得</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥56,000</span>
                            <span class="slide__plice">¥46,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/harbor.jpg")); ?>" alt="美しい浜辺" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">体験ダイビング</h4>
                          <p class="slide__block-txt">貸切体験ダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥24,000</span>
                            <span class="slide__plice">¥18,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/jelly-fish.jpg")); ?>" alt="夜の海でクラゲが光りながらが泳いでいる" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title">体験ダイビング</h4>
                          <p class="slide__block-txt">ナイトダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥10,000</span>
                            <span class="slide__plice">¥8,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide slide-content">
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/float-div.jpg")); ?>" alt="海でファンダイビングをする人たち" class="slide-content-img" />
                      <div class="slide__block">
                        <div class="slide__block--titles">
                          <h4 class="slide__block-title slide__block-title2">ファンダイビング</h4>
                          <p class="slide__block-txt">貸切ファンダイビング</p>
                        </div>

                        <div class="slide__container">
                          <p class="slide__text">全部コミコミ(お一人様)</p>
                          <div class="slide__prices">
                            <span class="slide__discount">¥20,000</span>
                            <span class="slide__plice">¥16,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- more button  -->
                <div class="common__btn-wrap campaign__viewmore">
                  <a href="#" class="campaign__btn common__btn campaign__viewmore-btn">
                    <span class="campaign__btn--text common__btn--txt">view&nbsp;</span><span class="campaign__btn--text common__btn--txt__down">more</span>
                    <span class="common__btn--arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="aboutus">
        <div class="aboutus__inner inner inner--about">
          <div class="aboutus__container">
            <div class="aboutus__wrapper">
              <div class="aboutus__head">
                <h2 class="aboutus__subtitle">私たちについて</h2>
                <h3 class="aboutus__title common-title">aboutus</h3>
              </div>
              <div class="aboutus__content">
                <div class="aboutus__framework framework">
                  <div class="aboutus__content-left">
                    <picture>
                      <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/sea-sa-sp.jpg")); ?>" />
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/ocean1.jpg")); ?>" class="framework__img" alt="琉球瓦の上にシーサーが座っている" />
                    </picture>
                  </div>
                  <div class="aboutus__content-right">
                    <picture>
                      <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/ocean-sp.jpg")); ?>" />
                      <img src="<?php echo esc_url(get_theme_file_uri("/images/common/ocean2.jpg")); ?>" class="framework__img" alt="サンゴ礁の海に泳ぐチョウハン" />
                    </picture>
                  </div>
                </div>
                <div class="aboutus__textcontainer">
                  <h4 class="aboutus-content__textcontainer-title">Dive into<br class="aboutus__space" /><span class="aboutus__space"></span>the Ocean</h4>
                  <div class="aboutus__messages">
                   
                      <p class="aboutus__message--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。 <br />ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
            
                    <div class="aboutus__viewmore-button">
                      <div class="aboutus__btn-wrap aboutus__viewmore">
                        <a href="#" class="aboutus__btn">
                          <span class="aboutus__btn--text common__btn--txt">view&nbsp;</span><span class="aboutus__btn--text common__btn--txt__down">more</span>
                          <span class="aboutus__btn--arrow"></span>
                        </a>
                      </div>
                    </div>
                    <!--  aboutus__viewmoreボタン -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="aboutus__sea-image"></div>
      </section>
      <section class="information">
        <div class="information__inner inner inner--information">
          <div class="information__container">
            <div class="information__titles">
              <h2 class="information__subtitle">ダイビング情報</h2>
              <h3 class="information__title common-title">information</h3>
            </div>
            <div class="information__wrapper">
              <div class="information__colorbox info-color js-color-slide">
                <div class="info-colorbox"></div>
                <img src="<?php echo esc_url(get_theme_file_uri("/images/common/ocean-butter.jpg")); ?>" alt="サンゴ礁の近くを泳ぐチョウハン" class="information__frame" />
              </div>
              <div class="information__content">
                <div class="information__licence">
                  <h4 class="information__title-sub">ライセンス講習</h4>
                  <p class="information__description">当店はダイビングライセンス（Cカード）世界最大の教育機関PADIの「正規店」として店舗登録されています。<br />正規登録店として、安心安全に初めての方でも安心安全にライセンス取得をサポート致します。</p>
                </div>
                <div class="common__btn-wrap information__viewmore">
                  <a href="#" class="information__btn common__btn information__viewmore-btn">
                    <span class="information__btn--text common__btn--txt">view&nbsp;</span><span class="information__btn--text common__btn--txt__down">more</span>
                    <span class="common__btn--arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog">
        <div class="blog__inner inner inner--blog">
          <div class="blog__illust"></div>
          <div class="blog__container">
            <div class="blog__wrapper">
              <div class="blog__titles">
                <h2 class="blog__subtitle">ブログ</h2>
                <h3 class="blog__title common-title">Blog</h3>
              </div>
              <div class="blog__cards">
                <a href="#" class="blog__card">
                  <div class="blog__card-images">
                    <img src="<?php echo esc_url(get_theme_file_uri("/images/common/coral-leaf.jpg")); ?>" class="blog__card--image" alt="サンゴ礁" />
                  </div>
                  <div class="blog__card--contents">
                    <div class="blog__card--titles">
                      <time class="blog__card-date" datetime="2023-11-17">2023.11/17</time>
                      <p class="blog__card-title">ライセンス取得</p>
                    </div>
                    <p class="blog__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br class="blog__u-desktop" />ここにテキストが入ります。ここにテキストが入ります。ここにテキスト</p>
                  </div>
                </a>
                <a href="#" class="blog__card blog__card-next">
                  <div class="blog__card-images">
                    <img src="<?php echo esc_url(get_theme_file_uri("/images/common/Sea-turtle.jpg")); ?>" class="blog__card--image" alt="ウミガメ" />
                  </div>
                  <div class="blog__card--contents">
                    <div class="blog__card--titles">
                      <time class="blog__card-date" datetime="2023-11-17">2023.11/17</time>
                      <p class="blog__card-title">ウミガメと泳ぐ</p>
                    </div>
                    <p class="blog__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br class="blog__u-desktop" />ここにテキストが入ります。ここにテキストが入ります。ここにテキスト</p>
                  </div>
                </a>
                <a href="#" class="blog__card blog__card-third">
                  <div class="blog__card-images">
                    <img src="<?php echo esc_url(get_theme_file_uri("/images/common/Clownfish.jpg")); ?>" class="blog__card--image" alt="クマノミ" />
                  </div>
                  <div class="blog__card--contents">
                    <div class="blog__card--titles">
                      <time class="blog__card-date" datetime="2023-11-17">2023.11/17</time>
                      <p class="blog__card-title">カクレクマノミ</p>
                    </div>
                    <p class="blog__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br class="blog__u-desktop" />ここにテキストが入ります。ここにテキストが入ります。ここにテキスト</p>
                  </div>
                </a>
              </div>
              <!-- view more -->
              <div class="blog__btn-wrap common__btn-wrap">
                <a href="#" class="common__btn blog__btn blog__viewmore-btn">
                  <span class="common__btn--txt blog__btn--txt">view&nbsp;</span><span class="common__btn--txt__down">more</span>
                  <span class="common__btn--arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="blog__fishes-illust"></div>
      </section>
      <section class="voice">
        <div class="voice__inner inner inner--voice">
          <div class="voice__container">
            <div class="voice__wrapper">
              <div class="voice__titles">
                <h2 class="voice__subtitle">お客様の声</h2>
                <h3 class="voice__title common-title">voice</h3>
              </div>
              <div class="voice__cards">
                <a href="#" class="voice__card">
                  <div class="voice__card--who">
                    <div class="voice__card--contents">
                      <div class="voice__card--titles">
                        <div class="voice__card-heading voice__active">
                          <p class="voice__card-age">20代(女性)</p>
                          <h4 class="voice__active-content">ライセンス講習</h4>
                        </div>
                        <!-- ヘディングの横並び -->
                        <h4 class="voice__card-title voice__card-title-next">ここにタイトルが入ります。ここにタイトル</h4>
                        <!-- ここまでヘディングの左側 -->
                      </div>
                      <div class="js-color-slide voice__card--image">
                        <div class="info-colorbox"></div>
                        <img src="<?php echo esc_url(get_theme_file_uri("/images/common/woman.jpg")); ?>" class="info-color-image" alt="麦わらの女性" />
                      </div>
                    </div>
                  </div>
                  <p class="voice__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br />ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br />ここにテキストが入ります。ここにテキストが入ります。</p>
                </a>
                <!-- ここまでで１枚のカード -->
                <a href="#" class="voice__card">
                  <div class="voice__card--who">
                    <div class="voice__card--contents">
                      <div class="voice__card--titles voice__card--titles2">
                        <div class="voice__card-heading voice__active voice__active2">
                          <p class="voice__card-age voice__card-age-fan">30代(男性)</p>
                          <h4 class="voice__active-content voice__active-content-fan">ファンダイビング</h4>
                        </div>
                        <h4 class="voice__card-title voice__card-title-next">ここにタイトルが入ります。ここにタイトル</h4>
                      </div>
                      <div class="js-color-slide voice__card--image">
                        <div class="info-colorbox"></div>
                        <img src="<?php echo esc_url(get_theme_file_uri("/images/common/man.jpg")); ?>" class="info-color-image" alt="いいねしている女性" />
                      </div>
                      <!-- ヘディングの横並び -->
                      <!-- ここまでヘディングの左側 -->
                    </div>
                  </div>
                  <p class="voice__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br />ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。<br />ここにテキストが入ります。ここにテキストが入ります。</p>
                </a>
              </div>
              <!-- ボタン -->
              <div class="voice__btn-wrap common__btn-wrap">
                <a href="#" class="common__btn voice__btn voice__viewmore-btn">
                  <span class="common__btn--txt voice__btn--txt">view&nbsp;</span><span class="common__btn--txt__down">more</span>
                  <span class="common__btn--arrow"></span>
                </a>
              </div>
            </div>
            <div class="voice__illust"></div>
          </div>
        </div>
      </section>
    
      <section class="contact">
        <div class="contact__illust"></div>
        <div class="contact__inner inner inner--contact">
          <div class="contact__container">
            <div class="contact__wrapper">
              <div class="contact__titles">
                <h2 class="contact__head">
                  <img src="<?php echo esc_url(get_theme_file_uri("/images/common/sp/codeups-sp-head.png")); ?>" alt="CodeUpsタイトル緑色" class="contact__title-green" />
                </h2>
                <div class="contact__descriptions">
                  <div class="contact__content">
                    <span class="contact__description">沖縄県那覇市1-1</span>
                    <span class="contact__description contact__tel">TEL:<span class="contact__telphone">0120-000-0000</span></span>
                    <span class="contact__description contact__time">営業時間:8:30-19:00</span>
                    <span class="contact__description contact__time">定休日:毎週火曜日</span>
                  </div>
                  <div class="contact__map"></div>
                </div>
              </div>
              <div class="contact__btns">
                <div class="contact__btns--wrapper">
                  <p class="contact__title-btn common-btn">contact</p>
                  <h2 class="contact__subtitle">お問い合わせ</h2>
                  <p class="contact__guide">ご予約・お問い合わせはコチラ</p>
                  <!-- ボタン -->
                  <div class="contact__btn-wrap common__btn-wrap">
                    <a href="#" class="common__btn contact__btn contact__viewmore-btn">
                      <span class="common__btn--txt contact__btn--txt">contact&nbsp;</span><span class="common__btn--txt__down">us</span>
                      <span class="common__btn--arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- トップへ戻る -->
      <div class="pagetop">
        <a href="#top">
          <span></span>
        </a>
      </div>
</main>
<?php get_footer(); ?>

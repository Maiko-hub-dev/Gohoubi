<?php get_header(); ?>
<main>
          <div class="first-view js-first-view blog-view is-visible">
        <div class="first-view__inner view blog-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("../images/common/sp/blog-sp-fv.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("../images/common/blog-fv.jpg")); ?>" alt="美しい海" />
          </picture>
        </div>

        <div class="view__title diving-title blog-title">
          <h1 class="blog-title__main"><?php the_title(); ?></h1>
        </div>
      </div>
    </div>
    <div class="blog-type">
      <!-- パンくずリスト -->

      <div class="blog-list__inner">
        <div class="blog-type__inner">
          <div class="blog__types-illust"></div>
          <div class="blog-list__wrapper">
            <div class="blog-list__contents">
                <?php if (have_posts()) : ?>
              <div class="contents__inner">
                 <?php while (have_posts()) : the_post(); ?>
                <a href="<?php the_permalink(); ?>" class="blog__card">
                  <div class="blog__card-images">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('full', ['class' => 'news__img']); ?>
                    <?php else : ?>
                        <img class="news__img" src="<?php echo esc_url(get_theme_file_uri("/images/noimage.jpg")); ?>" alt="NoImage画像" />
                    <?php endif; ?>
                  </div>
                  <div class="blog__card--contents">
                    <div class="blog__card--titles">
                      <time class="blog__card-date" datetime="<?php echo get_the_date('Y-m-d'); ?>"><?php echo get_the_date('Y.m.d'); ?></time>
                      <p class="blog__card-title">ライセンス取得</p>
                    </div>
                    <p class="blog__card--txt">ここにテキストが入ります。ここにテキストが入ります。ここにテキスト</p>
                  </div>
                </a>
                 <?php endwhile; ?>
              </div>
              <?php else : ?>
                <p>記事が投稿されていません</p>
              <?php endif; ?>
            </div>
          </div>
          <!-- ページネーション -->
          <nav class="blog__contents--jump pagination">
            <?php
                $args = [
                    'mid_size' => 1,
                    'prev_text' => '<img src="' . esc_url(get_theme_file_uri("/images/back.png")) . '" alt="" class="page-numbers">',
                    'next_text' => '<img src="' . esc_url(get_theme_file_uri("/images/next.png")) . '" alt="" class="page-numbers">',
                ];
                the_posts_pagination($args);
                ?>
          </nav>
        </div>
        <aside class="sidebar">
          <h2 class="sidebar__title">
            <img src="../src/images/common/whale.png" alt="くじらのイラスト" />
            <span class="sidebar__title--text">人気記事</span>
          </h2>
          <div class="sidebar__list aside">
            <div class="aside__article">
              <img src="../src/images/common/golden-fish.jpg" alt="" width="121" height="90" />
              <ul>
                <li><time datetime="2023-11-07">2023.11/07</time></li>
                <li>ライセンス取得</li>
              </ul>
            </div>
            <div class="aside__article">
              <img src="../src/images-webp/common/Sea-turtle.webp" alt="" width="121" height="90" />
              <ul>
                <li><time datetime="2023-11-07">2023.11/07</time></li>
                <li>ウミガメと泳ぐ</li>
              </ul>
            </div>
            <div class="aside__article">
              <img src="../src/images-webp/common/Clownfish.webp" alt="" width="121" height="90" />
              <ul>
                <li><time datetime="2023-11-07">2023.11/07</time></li>
                <li>カクレクマノミ</li>
              </ul>
            </div>
            <!-- 人気記事ここまで -->

            <!-- 人気記事ここまで -->
          </div>
          <!-- 人気記事ここまで -->
          <div class="aside__box">
            <h2 class="sidebar__title">
              <img src="../src/images/common/whale.png" alt="くじらのイラスト" />
              <span class="sidebar__title--text">口コミ</span>
            </h2>
            <div class="aside__container">
              <img src="../src/images/common/sidebar-voice.jpg" alt="" class="aside__voice--img" />
              <div class="aside__list">
                <span class="aside__age">30代カップル</span>
                <p class="aside__voice">ここにタイトルが入ります。ここにタイトル</p>
                <div class="voice__btn-wrap common__btn-wrap">
                  <a href="#" class="common__btn voice__btn voice__viewmore-btn">
                    <span class="common__btn--txt blog__btn--txt">view&nbsp;</span><span class="common__btn--txt__down">more</span>
                    <span class="common__btn--arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="aside__box aside__box--campaign">
            <h2 class="sidebar__title">
              <img src="../src/images/common/whale.png" alt="くじらのイラスト" class="aside__img" />
              <span class="sidebar__title--text">キャンペーン</span>
            </h2>
            <div class="aside__container">
              <div class="aside__campaign1 aside__campaign">
                <img src="../src/images-webp/common/diving-fish.webp" alt="豊かな海で南国の魚が泳いでいる" class="slide-content-img" />
                <div class="aside__campaign--block">
                  <div class="aside__block--titles">
                    <p class="aside__block-txt">ライセンス取得</p>
                  </div>

                  <div class="aside__container">
                    <p class="slide__text">全部コミコミ(お一人様)</p>
                    <div class="slide__prices">
                      <span class="aside__discount">¥56,000</span>
                      <span class="slide__plice">¥46,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aside__campaign2 aside__campaign">
                <img src="../src/images-webp/common/harbor.webp" alt="美しい浜辺" class="slide-content-img" />
                <div class="aside__campaign--block">
                  <div class="aside__block--titles">
                    <p class="aside__block-txt">貸切体験ダイビング</p>
                  </div>

                  <div class="aside__container">
                    <p class="slide__text">全部コミコミ(お一人様)</p>
                    <div class="slide__prices">
                      <span class="aside__discount">¥24,000</span>
                      <span class="slide__plice">¥18,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="voice__btn-wrap common__btn-wrap">
                <a href="#" class="common__btn aside__btn voice__viewmore-btn">
                  <span class="common__btn--txt blog__btn--txt">view&nbsp;</span><span class="common__btn--txt__down">more</span>
                  <span class="common__btn--arrow"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="aside__box">
            <h2 class="sidebar__title">
              <img src="../src/images/common/whale.png" alt="くじらのイラスト" />
              <span class="sidebar__title--text">アーカイブ</span>
            </h2>
            <div class="aside__container">
              <div class="aside__archive archive">
                <!-- 2023 -->
                <details class="archive__year js-details" open>
                  <summary class="archive__year-title">2023</summary>

                  <div class="archive__months">
                    <details class="archive__month js-details">
                      <summary class="archive__month-title">3月</summary>

                      <div class="archive__posts">
                        <a href="#">3月の記事タイトル01</a>
                        <a href="#">3月の記事タイトル02</a>
                      </div>
                    </details>

                    <details class="archive__month js-details">
                      <summary class="archive__month-title">2月</summary>

                      <div class="archive__posts">
                        <a href="#">2月の記事タイトル01</a>
                      </div>
                    </details>

                    <details class="archive__month js-details">
                      <summary class="archive__month-title">1月</summary>

                      <div class="archive__posts">
                        <a href="#">1月の記事タイトル01</a>
                      </div>
                    </details>
                  </div>
                </details>

                <!-- 2022 -->
                <details class="archive__year js-details">
                  <summary class="archive__year-title">2022</summary>

                  <div class="archive__months">
                    <details class="archive__month">
                      <summary class="archive__month-title">12月</summary>

                      <div class="archive__posts">
                        <a href="#">12月の記事タイトル01</a>
                      </div>
                    </details>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <section class="contact">
      <div class="contact__illust"></div>
      <div class="contact__inner inner inner--contact">
        <div class="contact__container">
          <div class="contact__wrapper">
            <div class="contact__titles">
              <h2 class="contact__head">
                <img src="./src/images/common/sp/codeups-sp-head.png" alt="CodeUpsタイトル緑色" class="contact__title-green" />
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

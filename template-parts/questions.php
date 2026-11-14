<?php get_header(); ?>
<main>
    <section class="contact">
        <div class="contact__illust"></div>
        <div class="contact__inner inner inner--contact">
          <div class="contact__container">
            <div class="contact__wrapper">
              <div class="contact__titles">
                <h2 class="contact__head">
                  <img src="<?php echo esc_url(get_theme_file_uri("/image/treat-meet.png")); ?>" alt="" class="contact__title-green" />
                </h2>
                <div class="contact__descriptions">
                  <div class="contact__content">
                    <span class="contact__description">石川県金沢市1-1</span>
                    <span class="contact__description contact__tel">TEL:<span class="contact__telphone">0120-000-0000</span></span>
                    <span class="contact__description contact__time">営業時間:10:30-22:00</span>
                    <span class="contact__description contact__time">定休日:毎週火曜日</span>
                  </div>
                  <div class="contact__map"></div>
                </div>
              </div>
              <div class="contact__btns">
                <div class="contact__btns--wrapper">
                  <p class="contact__title-btn common-btn">お問い合わせ</p>
                  <p class="contact__guide">ご予約・お問い合わせはコチラ</p>
                  <!-- ボタン -->
                  <div class="contact__btn-wrap common__btn-wrap">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="common__btn contact__btn contact__viewmore-btn">
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
</main>
<?php get_footer(); ?>

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
          <h1 class="contact-title__main"><?php the_title(); ?></h1>
        </div>
        <?php breadcrumbs(); ?>
      </div>
      <!-- パンくずリスト -->
       
      <!-- 本文 -->
   
      <div class="contact-list__inner inner-datail">
          <div class="contact__types-illust"></div>
          <div class="contact-type__neccesary neccesary">
              <p class="neccesary__text"><span>※</span>必須項目が入力されていません。<br class="u-mobile" /><span class="contact-type__space"></span>入力してください。</p>
            </div>
        <div class="contact-type contact-error">
          <div class="contact-type__inner">
            <div class="contact-type__wrapper">
              <div action="./send.php" class="contact__form error-form" method="post">
                <!-- 名前 -->
                <div class="contact__form--item">
                  <label for="name">お名前<span>必須</span> </label>

                  <input type="text" id="name" name="name" placeholder="沖縄&nbsp;太郎" />
                </div>
                <!-- メールアドレス -->
                <div class="contact__form--item">
                  <label for="email">メールアドレス<span>必須</span> </label>
                  <input type="email" id="email" name="email" placeholder="aaa000@ggmail.com" />
                </div>

                <!-- telnumber -->
                <div class="contact__form--item">
                  <label for="tel">電話番号<span>必須</span> </label>
                  <input type="tel" id="tel" name="tel" placeholder="000-0000-0000" />
                </div>
                <!-- お問い合わせの種類 -->
                <div class="contact__form--item contact__form--flex">
                  <label for="content"> お問い合せ項目<span>必須</span> </label>
                  <div class="contact__form--check">
                    <label class="checkbox">
                      <input class="checkbox_icon" id="content" type="checkbox" name="content[]" value="キャンペーンについて" />
                      キャンペーンについて
                    </label>
                    <label class="checkbox">
                      <input class="checkbox_icon" id="content-2" type="checkbox" name="content[]" value="コースについて" />
                      コースについて
                    </label>
                    <label class="checkbox">
                      <input class="checkbox_icon" id="content-3" type="checkbox" name="content[]" value="コーナーについて" />
                      コーナーについて
                    </label>
                  </div>
                </div>
                <!-- キャンペーンを選ぶ -->
                <div class="contact__form--item">
                  <!-- セレクトボックス全体を囲むコンテナ -->
                <div class="contact__error--selectbox">
                  <p id="category-label" class="contact__form--p">お好きな企画</p>

                  <div class="error-select">
                    <button
                      type="button"
                      class="error-select__trigger"
                      aria-labelledby="category-label category-value"
                      aria-expanded="false"
                      aria-controls="category-options"
                    >
                      <span id="category-value">商品カテゴリを選択してください</span>
                      <span class="error-select__arrow" aria-hidden="true"></span>
                    </button>

                    <div id="category-options" class="error-select__options" hidden>
                      <button type="button" data-value="">
                        商品カテゴリを選択してください
                      </button>
                      <button type="button" data-value="diving">
                        周年記念について
                      </button>
                      <button type="button" data-value="bath">
                        ポイントカードについて
                      </button>
                      <button type="button" data-value="kitchen">
                        誕生日祝いについて
                      </button>
                    </div>

                    <input type="hidden" name="category" value="">
                  </div>
                </div>
                </div>
                <!-- お問い合わせ内容 -->
                <div class="contact__form--item form__text">
                  <label for="message">お問い合せ内容<span>必須</span> </label>

                  <textarea id="message" name="message"></textarea>
                </div>

                <!-- 個人情報 -->
                <div class="contact__form--privacy">
                  <div class="contact__form--flex flex">
                   <div class="contact__form--privacy">
                    <label class="privacy-label">
                      <input
                        type="checkbox"
                        name="privacy-consent"
                        value="1"
                        required
                      >
                      <span class="check-box" aria-hidden="true"></span>
                      <p class="contact__form--privacytext privacytext">個人情報の取り扱いについて同意のうえ送信します。</p>
                    </label>
          </div>
                  </div>
                </div>

                <!-- ボタン -->
                <div class="common__btn-wrap send__viewmore">
                  <a href="" class="send__btn common__btn send__viewmore-btn">
                    <span class="send__btn--text common__btn--txt">send</span>
                    <span class="common__btn--arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

</main>
<?php get_footer(); ?>

<?php get_header(); ?>
<main>
       <div class="first-view js-first-view contact-view is-visible">
        <div class="first-view__inner view contact-view__inner">
            <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/fv_contact_sp.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/fv_contact@2x.jpg")); ?>" alt="美しい海で泳ぐ人たち" />
          </picture>
        </div>

        <div class="view__title diving-title contact-title">
          <h1 class="contact-title__main"><?php the_title(); ?></h1>
        </div>
      </div>
      <!-- パンくずリスト -->
      <!-- 本文 -->
      <div class="contact-type">
        <div class="contact-list__inner inner-thanks">
          <div class="contact__types-illust"></div>
          <div class="contact-type__inner">
            <div class="contact-type__wrapper">
              <div class="contact-type__complete neccesary">
                <p class="neccesary__text">お問い合わせ内容を送信完了しました。</p>
                <p class="neccesary__text neccesary__thanks">
                  このたびは、お問い合わせ頂き誠にありがとうございます。<br />
                  お送り頂きました内容を確認の上、3営業日以内に折り返しご連絡させて頂きます。<br />
                  また、ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- トップへ戻る -->
      <div class="pagetop">
        <a href="#top">
          <span></span>
        </a>
      </div>
</main>
<?php get_footer(); ?>

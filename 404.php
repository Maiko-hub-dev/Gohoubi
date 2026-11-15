<?php get_header(); ?>
<main>
    <div class="first-view js-first-view found-view is-visible">
        <div class="first-view__inner view found-view__inner">
           <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/not-found-sp@2x.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/image/not-found@2x.jpg")); ?>" alt="猫と猿が謝っている" />
          </picture>
          <div class="not-found__inner">
           <h1>404</h1>
          <div class="not-found__text">
            <p class="not-found__found">申し訳ありません。</p>
            <p class="not-found__para">お探しのページが見つかりません。</p>
          </div>
          <!-- テキストも込みで -->
                   <!-- ボタン -->
        <div class="common__btn-wrap not-found__viewmore">
          <a href="" class="nou-found__btn common__btn not-found__viewmore-btn">
            <span class="not-found__btn--text common__btn--txt">TOPへ</span>
            <span class="not-found__btn--arrow"></span>
          </a>
      </div>
        </div>
        </div>
    </div>
        <!-- パンくずリスト -->
        

</main>
<?php get_footer(); ?>

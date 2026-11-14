<?php get_header(); ?>
<main>

    <div class="first-view js-first-view corner-view is-visible">
        <div class="first-view__inner view corner-view__inner">
            
        </div>

        <div class="view__title diving-title corner-title">
            <h1 class="corner-title__main">コーナー紹介</h1>
        </div>

        <?php breadcrumbs(); ?>
    </div>
   <!-- パンくずリスト -->
          <section class="corner">
        <div class="corner__inner inner inner--corner">
          <div class="corner__container">
            <div class="corner__head">
              <h2 class="corner__title common-title">家族やお友達とゲームしよう</h2>
            </div>
            <div class="corner-type">
               <div class="corner__types-illust"></div>
            <div class="corner__wrapper">
           <!-- ここにコンテンツが入る -->
   
                    <div class="corner__images">
                      <img src="<?php echo esc_url(get_theme_file_uri("/image/festival@2x.jpg")); ?>" alt="" />
                    </div>
                    <div class="corner-type__contents">
                      <p class="corner-type__content"><span>&#9733;</span>射的コーナーには、人気キャラクターあり!!</p>
                      <p class="corner-type__content"><span>&#9733;</span>ヨーヨー釣りは５回につきもう一回おまけ！</p>
                      <p class="corner-type__content"><span>&#9733;</span>トレーディングカードがもらえる！！</p>
                      <p class="corner-type__content"><span>&#9733;</span>小さなお子様も楽しめるゲームをご用意！！</p>
                    </div>
                  </div>
            </div>

            <!-- view more -->
             <div class="blog__btn-wrap common__btn-wrap">
  <a href="<?php echo esc_url(home_url('/corner/')); ?>"
     class="common__btn blog__btn blog__viewmore-btn">
    <span class="common__btn--txt blog__btn--txt">view&nbsp;</span>
    <span class="common__btn--txt__down">more</span>
    <span class="common__btn--arrow"></span>
  </a>
</div>

        <!-- サイドバーはなし -->
      </div></div>
        </div>
      </section>
</main>
<?php get_footer(); ?>

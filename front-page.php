<?php get_header(); ?>
<main>
      <div class="first-view js-first-view">
        <div class="first-view__inner view">
          <div class="swiper view__swiper">
            <div class="swiper-wrapper view__wrapper">
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images-webp/first-view03@2x.webp")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images-webp/first-view03@2x.webp")); ?>" alt="美味しそうな焼肉が網に乗っている" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/image/restaurants@2x.jpg")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/image/restaurants@2x.jpg")); ?>" alt="レストラン" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images-webp/course03.webp")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images-webp/course03.webp")); ?>" alt="プレミアムなお肉" />
                </picture>
              </div>
              <div class="swiper-slide">
                <picture>
                  <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images-webp/campaign01@2x.webp")); ?>" />
                  <img src="<?php echo esc_url(get_theme_file_uri("/images-webp/campaign01@2x.webp")); ?>" alt="ようこそ" />
                </picture>
              </div>
            </div>
          </div>
          <div class="view__title diving-title">
            <h1 class="diving-title__main">ごほうびビュッフェ</h1>
            <div class="diving-title__sub">Treat&nbsp; Meets</div>
          </div>
        </div>
      </div>
      <section class="campaign">
        <div class="campaign__inner">
          <div class="campaign__container">
            <div class="campaign__wrapper">
              <div class="campaign__head">
                <h2 class="campaign__subtitle">campaign</h2>
                <h3 class="campaign__title common-title">キャンペーン</h3>

                <div class="campaign__navigation">
                  <div class="campaign-button-prev campaign-btn"></div>
                  <div class="campaign-button-next campaign-btn"></div>
                </div>
              </div>
              <div class="campaign__contents contents__inner campaign__slider">
                <div class="contents__inner swiper2">
                  <div class="swiper-wrapper swiper2-wrapper slide">
                    <!-- ここから表示 -->
                     <?php
  $campaign_query = new WP_Query([
      'post_type'      => 'campaign',
      'posts_per_page' => 8,
      'post_status'    => 'publish',
      'no_found_rows'  => true,
  ]);
  ?>

  <?php while ($campaign_query->have_posts()) : ?>
    <?php $campaign_query->the_post(); ?>

    <a
      href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
      class="swiper-slide slide-content campaign__swiper-slide"
    >
      <?php if (has_post_thumbnail()) : ?>
        <?php
        the_post_thumbnail('large', [
            'class' => 'slide-content-img',
        ]);
        ?>
      <?php endif; ?>

      <div class="slide__block">
        <div class="slide__block--titles">
          <?php
          $campaign_terms = get_the_terms(
              get_the_ID(),
              'campaign_category'
          );
          ?>

          <?php if (!is_wp_error($campaign_terms) && !empty($campaign_terms)) : ?>
            <h4 class="slide__block-title">
              <?php echo esc_html($campaign_terms[0]->name); ?>
            </h4>
          <?php endif; ?>

          <p class="slide__block-txt">
            <?php the_title(); ?>
          </p>
        
        </div>
        <p class="slide__block-txt">
          <?php the_content(); ?>
        </p>
   
      </div>
    </a>

  <?php endwhile; ?>

  <?php wp_reset_postdata(); ?>
                  </div>
                </div>
                <!-- more button  -->
                <div class="common__btn-wrap campaign__viewmore">
                    <a
                      href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
                      class="campaign__btn common__btn campaign__viewmore-btn"
                    >
                      <span class="campaign__btn--text common__btn--txt">view&nbsp;</span>
                      <span class="campaign__btn--text common__btn--txt__down">more</span>
                      <span class="common__btn--arrow"></span>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="corner">
        <div class="corner__inner inner inner--corner">
          <div class="corner__container">
            <div class="corner__head">
              <h2 class="corner__subtitle">corner</h2>
              <h3 class="corner__title common-title">コーナー紹介</h3>
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
<section class="course">
  <div class="course__inner inner inner--course">
    <div class="course__wrapper">

      <div class="course__titles">
        <h2 class="course__subtitle">course</h2>
        <h3 class="common-title">コース</h3>
      </div>

      <div class="course__cards">
        <?php
        // 各タクソノミーから最新のコースを１件ずつ取得
        // コースカテゴリー内のタームを表示順に指定
        $course_terms = ['sweet', 'korian', 'premiumn'];

        foreach ($course_terms as $index => $term_slug) :

          $course_query = new WP_Query([
            'post_type'      => 'course',
            'posts_per_page' => 1,
            'post_status'    => 'publish',
            'orderby'        => 'date',
            'order'          => 'DESC',
            'no_found_rows'  => true,
            'tax_query'      => [
              [
                'taxonomy' => 'sweets',
                'field'    => 'slug',
                'terms'    => $term_slug,
              ],
            ],
          ]);

          $card_class = 'course__card';

          if ($index === 1) {
            $card_class .= ' course__card-next';
          } elseif ($index === 2) {
            $card_class .= ' course__card-third';
          }

          if ($course_query->have_posts()) :
            while ($course_query->have_posts()) :
              $course_query->the_post();
        ?>

              <a
                href="<?php the_permalink(); ?>"
                class="<?php echo esc_attr($card_class); ?>"
              >
                <div class="course__card-images">
                  <?php if (has_post_thumbnail()) : ?>
                    <?php
                    the_post_thumbnail('medium_large', [
                      'class' => 'course__card--image',
                    ]);
                    ?>
                  <?php endif; ?>
                </div>

                <div class="course__card--contents">
                  <div class="course__card--titles">
                     <h2 class="course__type-content">
                          <?php the_title(); ?>
                      </h2>
                    <?php
                    // 投稿本文を取得
                    $course_content = get_the_content();

                    // 本文内の最初のh3から文字を取得
                    $course_heading = '';

                    if (preg_match('/<h3\b[^>]*>(.*?)<\/h3>/is', $course_content, $matches)) {
                        $course_heading = trim(wp_strip_all_tags($matches[1]));
                    }
                    ?>

                    <?php if ($course_heading !== '') : ?>
                      <h3 class="course__type-content">
                        <?php echo esc_html($course_heading); ?>
                      </h3>
                    <?php endif; ?>
                  </div>

                  <p class="blog__card--txt">
                    <?php
                    echo esc_html(
                      wp_trim_words(get_the_excerpt(), 60, '…')
                    );
                    ?>
                  </p>
                </div>
              </a>

        <?php
            endwhile;
          endif;

          wp_reset_postdata();
        endforeach;
        ?>
      </div>

      <!-- view more -->
      <div class="course__btn-wrap common__btn-wrap">
        <?php
        $course_archive_url = get_post_type_archive_link('course');
        ?>

        <?php if ($course_archive_url) : ?>
          <a
            href="<?php echo esc_url($course_archive_url); ?>"
            class="common__btn course__btn course__viewmore-btn"
          >
            <span class="common__btn--txt course__btn--txt">view&nbsp;</span>
            <span class="common__btn--txt__down">more</span>
            <span class="common__btn--arrow"></span>
          </a>
        <?php endif; ?>
      </div>

    </div>
  </div>
</section>
 <!-- ブログ -->

<section class="blog">
  <div class="blog__inner inner inner--blog">
    <div class="blog__illust"></div>
    <div class="blog__container">
      <div class="blog__wrapper">
        <div class="blog__titles">
          <h2 class="blog__subtitle">blog</h2>
          <h3 class="common-title">ブログ</h3>
        </div>

        <div class="blog__cards">
          <?php
          // 表示したいカテゴリーのスラッグ
          $blog_categories = ['experience', 'Community', 'activity'];

          foreach ($blog_categories as $index => $category_slug) :

            $blog_query = new WP_Query([
              'post_type'      => 'post',
              'posts_per_page' => 1,
              'category_name'  => $category_slug,
              'post_status'    => 'publish',
              'orderby'        => 'date',
              'order'          => 'DESC',
              'no_found_rows'  => true,
            ]);

            if ($blog_query->have_posts()) :
              while ($blog_query->have_posts()) :
                $blog_query->the_post();

                // 既存のCSSクラスを維持
                $card_class = 'blog__card';

                if ($index === 1) {
                  $card_class .= ' blog__card-next';
                } elseif ($index === 2) {
                  $card_class .= ' blog__card-third';
                }
          ?>

          <a href="<?php the_permalink(); ?>"
             class="<?php echo esc_attr($card_class); ?>">

            <div class="blog__card-images">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('medium_large', [
                  'class' => 'blog__card--image',
                  'alt'   => esc_attr(get_the_title()),
                ]); ?>
              <?php else : ?>
                <img
                  src="<?php echo esc_url(get_theme_file_uri('/images/common/coral-leaf.jpg')); ?>"
                  class="blog__card--image"
                  alt="サンゴ礁"
                />
              <?php endif; ?>
            </div>

            <div class="blog__card--contents">
              <div class="blog__card--titles">
                <time
                  class="blog__card-date"
                  datetime="<?php echo esc_attr(get_the_date('Y-m-d')); ?>">
                  <?php echo esc_html(get_the_date('Y年m月d日')); ?>
                </time>

                <p class="blog__card-title">
                  <?php the_title(); ?>
                </p>
              </div>

              <p class="blog__card--txt">
                <?php
                echo esc_html(
                  wp_trim_words(
                    get_the_excerpt(),
                    60,
                    '…'
                  )
                );
                ?>
              </p>
            </div>
          </a>

          <?php
              endwhile;
            endif;

            wp_reset_postdata();

          endforeach;
          ?>
        </div>

        <!-- view more -->
        <div class="blog__btn-wrap common__btn-wrap">
          <?php
          $blog_page_id = get_option('page_for_posts');
          ?>
          <?php if ($blog_page_id) : ?>
            <a href="<?php echo esc_url(get_permalink($blog_page_id)); ?>"
               class="common__btn blog__btn blog__viewmore-btn">
              <span class="common__btn--txt blog__btn--txt">view&nbsp;</span>
              <span class="common__btn--txt__down">more</span>
              <span class="common__btn--arrow"></span>
            </a>
          <?php endif; ?>
        </div>

      </div>
    </div>
  </div>
  <div class="blog__fishes-illust"></div>
</section>

      <section class="voice">
        <div class="voice__inne r inner inner--voice">
          <div class="voice__container">
            <div class="voice__wrapper">
  <div class="voice__titles">
    <h2 class="voice__subtitle">voice</h2>
    <h3 class="voice__title common-title">お客様の声</h3>
  </div>

  <?php
  $voice_query = new WP_Query([
    'post_type'      => 'voice',
    'posts_per_page' => 2,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'no_found_rows'  => true,
  ]);
  ?>

  <div class="voice__cards">
    <?php if ($voice_query->have_posts()) : ?>
      <?php while ($voice_query->have_posts()) : $voice_query->the_post(); ?>

        <?php
        // 投稿に設定されているターム名を取得
        // lesson・meet・birthday が、それぞれ独立したタクソノミーの場合
        $voice_labels = [];

        foreach (['meet', 'birthday'] as $taxonomy) {
          $terms = get_the_terms(get_the_ID(), $taxonomy);

          if (!is_wp_error($terms) && !empty($terms)) {
            foreach ($terms as $term) {
              $voice_labels[] = $term->name;
            }
          }
        }

        // 年代・性別（カスタムフィールド名：voice_age）
        $voice_age = get_post_meta(get_the_ID(), 'voice_age', true);

        // 2枚目の装飾用クラス
        $is_second = ($voice_query->current_post === 1);
        ?>

        <a
          href="<?php the_permalink(); ?>"
          class="voice__card"
        >
          <div class="voice__card--who">
            <div class="voice__card--contents">
              <div class="voice__card--titles<?php echo $is_second ? ' voice__card--titles2' : ''; ?>">
                <div class="voice__card-heading voice__active<?php echo $is_second ? ' voice__active2' : ''; ?>">

                  <?php if ($voice_age !== '') : ?>
                    <p class="voice__card-age<?php echo $is_second ? ' voice__card-age-fan' : ''; ?>">
                      <?php echo esc_html($voice_age); ?>
                    </p>
                  <?php endif; ?>

                  <?php if (!empty($voice_labels)) : ?>
                    <h4 class="voice__active-content<?php echo $is_second ? ' voice__active-content-fan' : ''; ?>">
                      <?php echo esc_html(implode('／', array_unique($voice_labels))); ?>
                    </h4>
                  <?php endif; ?>

                </div>

                <h4 class="voice__card-title voice__card-title-next">
                  <?php the_title(); ?>
                </h4>
              </div>

              <div class="js-color-slide voice__card--image">
                <div class="info-colorbox"></div>

                <?php if (has_post_thumbnail()) : ?>
                  <?php
                  the_post_thumbnail('large', [
                    'class' => 'info-color-image',
                  ]);
                  ?>
                <?php else : ?>
                  <img
                    src="<?php echo esc_url(get_theme_file_uri('/images/common/woman.jpg')); ?>"
                    class="info-color-image"
                    alt=""
                  />
                <?php endif; ?>
              </div>
            </div>
          </div>

          <p class="voice__card--txt">
            <?php
            echo esc_html(
              wp_trim_words(get_the_excerpt(), 120, '…')
            );
            ?>
          </p>
        </a>

      <?php endwhile; ?>
    <?php endif; ?>
  </div>

  <?php wp_reset_postdata(); ?>

  <?php $voice_archive_url = get_post_type_archive_link('voice'); ?>

  <?php if ($voice_archive_url) : ?>
    <div class="voice__btn-wrap common__btn-wrap">
      <a
        href="<?php echo esc_url($voice_archive_url); ?>"
        class="common__btn voice__btn voice__viewmore-btn"
      >
        <span class="common__btn--txt voice__btn--txt">view&nbsp;</span><span class="common__btn--txt__down">more</span>
        <span class="common__btn--arrow"></span>
      </a>
    </div>
  <?php endif; ?>
</div>
            <div class="voice__illust"></div>
          </div>
        </div>
      </section>
<!-- questions呼び出し     -->
<?php get_template_part('questions'); ?>
      <!-- トップへ戻る -->
      <div class="pagetop">
        <a href="#top">
          <span></span>
        </a>
      </div>
<!-- questions呼び出し -->
<?php get_template_part('/template-parts/questions'); ?>
</main>
<?php get_footer(); ?>

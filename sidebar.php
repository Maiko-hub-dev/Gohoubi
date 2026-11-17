<aside class="sidebar common-sidebar">
          
<!-- 人気記事 -->
<section class="sidebar__popular">

  <h2 class="sidebar__title">
    <img
      src="<?php echo esc_url(get_theme_file_uri('/images/common/whale.png')); ?>"
      alt="くじらのイラスト"
    />
    <span class="sidebar__title--text">人気記事</span>
  </h2>

  <div class="sidebar__list aside">

    <?php
    $popular_posts = new WP_Query([
      'post_type'      => 'post',
      'posts_per_page' => 3,
      'post_status'    => 'publish',
      'post__in'       => [45, 47, 29],
      'orderby'        => 'post__in',
    ]);
    ?>

    <?php if ($popular_posts->have_posts()) : ?>

      <?php while ($popular_posts->have_posts()) : $popular_posts->the_post(); ?>

        <div class="aside__article">

          <a href="<?php the_permalink(); ?>">

            <?php if (has_post_thumbnail()) : ?>

              <?php the_post_thumbnail('medium', [
                'alt'    => get_the_title(),
                'width'  => 121,
                'height' => 90,
              ]); ?>

            <?php else : ?>

              <img
                src="<?php echo esc_url(get_theme_file_uri('/images/common/no-image.webp')); ?>"
                alt=""
                width="121"
                height="90"
              />

            <?php endif; ?>

          </a>

          <ul>
            <li>
              <time datetime="<?php echo esc_attr(get_the_date('Y-m-d')); ?>">
                <?php echo esc_html(get_the_date('Y.m/d')); ?>
              </time>
            </li>

            <li>
              <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
              </a>
            </li>
          </ul>

        </div>

      <?php endwhile; ?>

      <?php wp_reset_postdata(); ?>

    <?php endif; ?>

  </div>

</section>
<!-- 人気記事ここまで -->

    <!-- 口コミ -->
    <div class="aside__box">
    <h2 class="sidebar__title">
        <img
        src="<?php echo esc_url(get_theme_file_uri('/images/common/whale.png')); ?>"
        alt="くじらのイラスト"
        />
        <span class="sidebar__title--text">口コミ</span>
    </h2>

    <?php
    $voice_query = new WP_Query([
        'post_type'      => 'voice',
        'posts_per_page' => 1,
        'post_status'    => 'publish',
    ]);
    ?>

    <?php if ($voice_query->have_posts()) : ?>
        <?php while ($voice_query->have_posts()) : $voice_query->the_post(); ?>

        <div class="aside__container">

            <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('medium', [
                'class' => 'aside__voice--img',
                'alt'   => get_the_title(),
            ]); ?>
            <?php else : ?>
            <img
                src="<?php echo esc_url(get_theme_file_uri('/images/common/sidebar-voice.jpg')); ?>"
                alt=""
                class="aside__voice--img"
            />
            <?php endif; ?>

            <div class="aside__list">
                <?php
            $voice_content = get_the_content();
            $voice_heading = '';

            if (preg_match('/<h4\b[^>]*>(.*?)<\/h4>/is', $voice_content, $matches)) {
                $voice_heading = $matches[1];
            }
            ?>

            <?php if ($voice_heading !== '') : ?>
            <p class="aside__voice">
                <?php echo wp_kses_post($voice_heading); ?>
            </p>
            <?php endif; ?>

            <div class="voice__btn-wrap common__btn-wrap">
                <a
                href="<?php the_permalink(); ?>"
                class="common__btn voice__btn voice__viewmore-btn"
                >
                <span class="common__btn--txt blog__btn--txt">view&nbsp;</span>
                <span class="common__btn--txt__down">more</span>
                <span class="common__btn--arrow"></span>
                </a>
            </div>

            </div>
        </div>

        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    </div>
    <!-- 口コミここまで -->

    <!-- キャンペーン -->
    <div class="aside__box aside__box--campaign">
    <h2 class="sidebar__title">
        <img
        src="<?php echo esc_url(get_theme_file_uri('/images/common/whale.png')); ?>"
        alt="くじらのイラスト"
        class="aside__img"
        />
        <span class="sidebar__title--text">キャンペーン</span>
    </h2>
<div class="aside__container">

    <?php
    $aside_campaign_query = new WP_Query([
        'post_type'      => 'campaign',
        'posts_per_page' => 2,
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC',
        'no_found_rows'  => true,
    ]);
    ?>

    <?php if ($aside_campaign_query->have_posts()) : ?>
        <?php
        while ($aside_campaign_query->have_posts()) :
            $aside_campaign_query->the_post();
        ?>

            <div class="aside__campaign">
                <a href="<?php the_permalink(); ?>" class="aside__campaign-link">

                    <?php if (has_post_thumbnail()) : ?>
                        <?php
                        the_post_thumbnail('medium_large', [
                            'class' => 'slide-content-img',
                        ]);
                        ?>
                    <?php endif; ?>

                    <div class="aside__campaign--block">
                        <div class="aside__block--titles">
                            <p class="aside__block-txt">
                                <?php the_title(); ?>
                            </p>
                        </div>

                        <div class="aside__container">
                            <p class="slide__text">
                                <?php
                                echo esc_html(
                                    wp_trim_words(get_the_excerpt(), 45, '…')
                                );
                                ?>
                            </p>
                        </div>
                    </div>

                </a>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>

    <?php wp_reset_postdata(); ?>

    <?php
    $campaign_archive_url = get_post_type_archive_link('campaign');
    ?>

    <?php if ($campaign_archive_url) : ?>
        <!-- view moreボタン -->
        <div class="voice__btn-wrap common__btn-wrap">
            <a
                href="<?php echo esc_url($campaign_archive_url); ?>"
                class="common__btn aside__btn voice__viewmore-btn"
            >
                <span class="common__btn--txt blog__btn--txt">view&nbsp;</span>
                <span class="common__btn--txt__down">more</span>
                <span class="common__btn--arrow"></span>
            </a>
        </div>
    <?php endif; ?>

</div>
  
    </div>
    <!-- キャンペーンここまで -->

        <!-- アーカイブ -->
        <div class="aside__box">
        <h2 class="sidebar__title">
            <img
            src="<?php echo esc_url(get_theme_file_uri('/images/common/whale.png')); ?>"
            alt="くじらのイラスト"
            />
            <span class="sidebar__title--text">アーカイブ</span>
        </h2>

        <div class="aside__container">
            <div class="aside__archive archive">

            <?php
            // 通常投稿を新しい順にすべて取得
            $archive_posts = get_posts([
                'post_type'      => 'post',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'orderby'        => 'date',
                'order'          => 'DESC',
            ]);

            // 投稿を「年 → 月 → 記事」に分類
            $archives = [];

            foreach ($archive_posts as $archive_post) {
                $year  = get_the_date('Y', $archive_post);
                $month = get_the_date('n', $archive_post);

                $archives[$year][$month][] = $archive_post;
            }
            ?>

            <?php foreach ($archives as $year => $months) : ?>

                <!-- 年別アコーディオン -->
                <details
                class="archive__year js-details"
                <?php echo ((string) $year === '2023') ? 'open' : ''; ?>
                >
                <summary class="archive__year-title">
                    <?php echo esc_html($year); ?>
                </summary>

                <div class="archive__months">

                    <?php foreach ($months as $month => $posts) : ?>

                    <!-- 月別アコーディオン -->
                    <details class="archive__month js-details">

                        <summary class="archive__month-title">
                        <?php echo esc_html($month); ?>月
                        </summary>

                        <div class="archive__posts">

                        <?php foreach ($posts as $archive_post) : ?>

                            <a href="<?php echo esc_url(get_permalink($archive_post->ID)); ?>">
                            <?php echo esc_html(get_the_title($archive_post->ID)); ?>
                            </a>

                        <?php endforeach; ?>

                        </div>

                    </details>

                    <?php endforeach; ?>

                </div>
                </details>

            <?php endforeach; ?>

            </div>
        </div>
        </div>
        <!-- アーカイブここまで -->

          </aside>

<?php get_header(); ?>

<main>
  <div class="first-view js-first-view campaign-view is-visible">
    <div class="first-view__inner view campaign-view__inner">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="<?php echo esc_url(get_theme_file_uri('/images/common/sp/campaign-sp-fv.jpg')); ?>"
        />
        <img
          src="<?php echo esc_url(get_theme_file_uri('/images/common/campaign-fv.jpg')); ?>"
          alt="キャンペーン"
        />
      </picture>
    </div>

    <div class="view__title diving-title campaign-title">
      <h1 class="campaign-title__main">キャンペーン</h1>
    </div>

    <?php breadcrumbs(); ?>
  </div>

  <div class="campaign-type">
    <div class="campaign-list__inner inner-datail"></div>

    <div class="campaign-type__wrapper">

      <!-- カテゴリー一覧 -->
      <ul class="campaign-type__tablist">

        <!-- ALL -->
        <li class="campaign-list__inner inner-datail">
          <a
            href="<?php echo esc_url(get_post_type_archive_link('campaign')); ?>"
            class="campaign__type-content"
          >
            all
          </a>
        </li>

        <?php
        $campaign_terms = [
            'anniversary' => '記念日',
            'pointcard'   => 'ポイント企画',
            'birthday'    => '誕生日祝い',
            'child-lucky' => 'お子様連れの方',
        ];

        foreach ($campaign_terms as $term_slug => $label) :
            $term = get_term_by(
                'slug',
                $term_slug,
                'campaign_category'
            );

            $term_link = $term ? get_term_link($term) : false;

            $has_link = (
                !is_wp_error($term_link)
                && is_string($term_link)
                && $term_link !== ''
            );

            $is_current = is_tax('campaign_category', $term_slug);
        ?>

          <li class="campaign__type-content<?php echo $is_current ? ' is-active' : ''; ?>">
            <?php if ($has_link) : ?>

              <a
                href="<?php echo esc_url($term_link); ?>"
                <?php if ($is_current) : ?>
                  class="is-active"
                  aria-current="page"
                <?php endif; ?>
              >
                <?php echo esc_html($label); ?>
              </a>

            <?php else : ?>

              <span><?php echo esc_html($label); ?></span>

            <?php endif; ?>
          </li>

        <?php endforeach; ?>

      </ul>

      <!-- 選択中のターム名 -->
      <h2 class="campaign-type__title">
        <?php single_term_title(); ?>
      </h2>

      <!-- メインループ -->
      <?php if (have_posts()) : ?>

        <div class="campaign-types__cards">

          <?php while (have_posts()) : ?>
            <?php the_post(); ?>

            <a
              href="<?php the_permalink(); ?>"
              class="campaign-type__card"
            >
              <div class="campaign__type--titles">
                <div class="campaign__type--heading campaign__active">

                  <h4 class="campaign__type-content">
                    <?php the_title(); ?>
                  </h4>
                </div>

                <h4 class="campaign__card-title campaign__card-title-next">
                 <?php the_content(); ?>
                </h4>
              </div>

              <div class="campaign-types__image">
                <?php
                if (has_post_thumbnail()) {
                    the_post_thumbnail('full', [
                        'class' => 'campaign-types__img',
                    ]);
                }
                ?>
              </div>
            </a>

          <?php endwhile; ?>

        </div>

        <!-- ページネーション -->
        <div class="pagination">
          <?php
          the_posts_pagination([
              'mid_size'  => 1,
              'prev_text' => '前へ',
              'next_text' => '次へ',
          ]);
          ?>
        </div>

      <?php else : ?>

        <p>このカテゴリーの記事はまだ投稿されていません。</p>

      <?php endif; ?>

    </div>
  </div>
</main>

<?php get_footer(); ?>

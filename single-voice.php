<?php get_header(); ?>
<main>
    <!-- voice -->
       <div class="first-view js-first-view voice-view is-visible">
        <div class="first-view__inner view voice-view__inner">
          <picture>
            <source media="(max-width: 767px)" srcset="<?php echo esc_url(get_theme_file_uri("/images/common/sp/voice^sp-fv.jpg")); ?>" />
            <img src="<?php echo esc_url(get_theme_file_uri("/images/common/voice-fv.jpg")); ?>" alt="美しい海で泳ぐ人たち" />
          </picture>
        </div>
          <div class="view__title diving-title voice-title">
          <h1 class="voice-title__main"><?php the_title(); ?></h1>
        </div>
        <?php breadcrumbs(); ?>
     </div>
     <div class="voice-type">
        <div class="voice-list__inner inner-datail">
          <div class="voice-type__inner">
            <?php if (have_posts()) : ?>
                 <?php while (have_posts()) : the_post(); ?>
            <div class="voice__types-illust"></div>
            <div <?php post_class('voice-type__wrapper'); ?>>
 
              <div class="voice-type__titles">
                <time datetime="<?php echo esc_attr(get_the_date('Y-m-d')); ?>" class="voice-type__date"> <?php echo esc_html(get_the_date('Y.m.d')); ?></time>
                <h2><?php the_title(); ?></h2>
              </div>
              <div class="voice-type__article">
                <img src="<?php echo esc_url(get_theme_file_uri("/images/common/coral-leaf.jpg")); ?>" alt="サンゴ礁" class="voice-type__article--img" />
                <p class="voice-type__text"><?php the_content(); ?></p>
              </div>
            <!-- 各カテゴリーへ遷移する -->
                <?php
                // voiceに紐づけたタクソノミーのスラッグを指定
                $taxonomy = 'voice_category';

                $terms = get_the_terms(get_the_ID(), $taxonomy);

                if ($terms && !is_wp_error($terms)) :
                ?>
        
        <ul class="voice-lists">
            <?php foreach ($terms as $term) : ?>

            <li class="voice-list">
                <img
                src="<?php echo esc_url(get_theme_file_uri('/images/common/hitode-green.png')); ?>"
                class="voice-list__logo"
                alt="ヒトデのアイコン"
                />
                <a href="<?php echo esc_url(get_category_link($term)); ?>">
                <?php echo esc_html($term->name); ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
        <?php endif; ?>
         <!-- 前後の記事へ移動 -->
           <?php
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            ?>
              <!-- ページネーション -->
               <nav class="voice__contents--jump pagination voice-type__page">

                  <?php if ($prev_post) : ?>
                      <a
                          class="prev page-links"
                          href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>"
                          aria-label="前の記事へ"
                      ></a>
                  <?php endif; ?>
                  <?php if ($next_post) : ?>
                            <a
                                class="next page-links"
                                href="<?php echo esc_url(get_permalink($next_post->ID)); ?>"
                                aria-label="次の記事へ"
                            ></a>
                        <?php endif; ?>
               </nav>
              </div>
              <?php endwhile; ?>
           <?php else : ?>
             <p>記事が投稿されていません</p>
            </div>
              <?php endif; ?>
          </div>
              <!-- ここにサイドバーを表示する -->

        <?php get_sidebar(); ?>
        </div>
      </div>
      <!-- questions呼び出し -->
<?php get_template_part('template-parts/questions'); ?>

</main>
<?php get_footer(); ?>

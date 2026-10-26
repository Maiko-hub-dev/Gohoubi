<?php
// テーマの初期設定
function my_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);
}
add_action('after_setup_theme', 'my_setup');


// CSS・JavaScriptの読み込み
function my_script_init()
{
    // jQuery
    wp_deregister_script('jquery');
    wp_enqueue_script(
        'jquery',
        'https://code.jquery.com/jquery-3.6.0.min.js',
        [],
        '3.6.0',
        true
    );

    // Swiper
    wp_enqueue_script(
        'swiper',
        'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js',
        [],
        '12.0.0',
        true
    );

    // メインJavaScript
    wp_enqueue_script(
        'main-js',
        get_template_directory_uri() . '/script.js',
        ['jquery', 'swiper'],
        '1.0.1',
        true
    );

    // メインCSS
    wp_enqueue_style(
        'style-css',
        get_template_directory_uri() . '/main.css',
        [],
        '1.0.1'
    );

    // Google Fonts
    wp_enqueue_style(
        'Gotu',
        'https://fonts.googleapis.com/css2?family=Gotu&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'Lato',
        'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'NotoSansJP',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'my_script_init');

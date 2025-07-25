<?php
// ?? double check
function setupDocTitle () {
    add_theme_support('title-tag');
    add_theme_support('title-thumbnails');
}
add_action('after_setup_theme', 'setupDocTitle');

// csfs protection via nonce or site keys
function nonce_is_verified($nonce){
	if (wp_verify_nonce($nonce, "jfansdilfjfqonroiawjer123") == 1) {
		return true;
	}

	return false;
}


// WP assets: scripts & css
function enqueue_assets() {
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/main.js', array(), null, true);

    if (is_front_page()) {
        wp_enqueue_style('front-page-css', get_template_directory_uri() . '/assets/css/front-page.css', array(), null);
    }

	if (is_page("screentryck")) {
        wp_enqueue_style('courses-css', get_template_directory_uri() . '/assets/css/courses.css', array(), null);
    } else if (is_page("illustrationer")) {
        wp_enqueue_style('courses-css', get_template_directory_uri() . '/assets/css/medlemmar.css', array(), null);
    } else if (is_page("kontakt")) {
        wp_enqueue_style('gesall-css', get_template_directory_uri() . '/assets/css/gesall.css', array(), null);
    }

	// if (is_single() && has_category("kurs")) {
    //     wp_enqueue_style('course-css', get_template_directory_uri() . '/assets/css/course.css', array(), null);
    // }
}
add_action('wp_enqueue_scripts', 'enqueue_assets');

// Register All Guthenberg blocks
function register_components_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) { // Function introduced in WordPress 6.8.
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	} else {
		if ( function_exists( 'wp_register_block_metadata_collection' ) ) { // Function introduced in WordPress 6.7.
			wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		}
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}
}
add_action( 'init', 'register_components_block_init' );

?>
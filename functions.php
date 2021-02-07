<?php

function keys_scripts() {
	$version = '1.1.1';

	wp_enqueue_style( 'style-name', get_template_directory_uri() . '/css/main.min.css', [], $version);

	wp_enqueue_script( 'plugins-js', get_template_directory_uri() . '/js/plugins.min.js', [], $version, true );
	wp_enqueue_script( 'main-js', get_template_directory_uri() . '/js/main.js', [], $version, true );
}
add_action( 'wp_enqueue_scripts', 'keys_scripts' );


/**
 * Add image sizes
 */
//if ( function_exists( 'add_image_size' ) ) {
//	add_image_size( 'blog-thumbnail', 370, 160, true );
//	add_image_size( 'blog-single', 1170, 548, true );
//}
//add_theme_support( 'post-thumbnails' );

/**
 * Create custom main menu
 */
function wpb_menu() {
	register_nav_menu('main-menu',__( 'Main menu' ));
}
add_action( 'init', 'wpb_menu' );

/**
 * Widgets
 */
function register_my_widgets()
{
	register_sidebar(array(
		'name' => 'Область для виджета Polylang',
		'id' => 'polylang-sidebar',
		'description' => '',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '',
		'after_title' => '',
	));
}

add_action('widgets_init', 'register_my_widgets');

/**
 * Custom post time
 */
function wp_example_create_post_type() {
	$labels = array(
		'name' => __( 'Example' ),
		'singular_name' => __( 'Example' ),
		'add_new' => __( 'News Example' ),
		'add_new_item' => __( 'Add new Example' ),
		'edit_item' => __( 'Edit Example' ),
		'new_item' => __( 'New Example' ),
		'view_item' => __( 'Show Example' ),
		'search_items' => __( 'Find Example' ),
		'not_found' =>  __( 'Nothing to found' ),
		'not_found_in_trash' => __( 'Nothing to found' ),
	);
	$args = array(
		'labels' => $labels,
		'has_archive' => true,
		'public' => true,
		'hierarchical' => false,
		'menu_position' => 5,
		'supports' => array(
			'title',
			'editor',
			'excerpt',
			'custom-fields',
			'thumbnail'
		),
        'taxonomies' => array( 'example' ),
	);
	register_post_type( 'example', $args );
}
add_action( 'init', 'wp_example_create_post_type' );

function example_create_custom_taxonomy() {
    $labels = array(
        'name' => __( 'Taxonomy'),
        'singular_name' => __( 'Taxonomy'),
        'search_items' =>  __( 'Search Taxonomy' ),
        'all_items' => __( 'All Taxonomy' ),
        'parent_item' => __( 'Taxonomy' ),
        'parent_item_colon' => __( 'Taxonomy:' ),
        'edit_item' => __( 'Edit Taxonomy' ),
        'update_item' => __( 'Update Taxonomy' ),
        'add_new_item' => __( 'Add Taxonomy' ),
        'new_item_name' => __( 'New Taxonomy' ),
        'menu_name' => __( 'Taxonomy' ),
    );
    register_taxonomy('example', array('example'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'with_thumbnail' => true,
    ));
}
add_action( 'init', 'example_create_custom_taxonomy', 9 );


/**
 * TODO: for multilang
 * Translate url
 * @param string $slug
 * @return string
 */
/*
function pll_get_page_url (string $slug) : string
{
	$slug = trim($slug, '/\\');
	// Fix url for custom post type
	if(is_custom_post_type( $slug)) {
		return (pll_current_language() != pll_default_language()) ? '/' . pll_current_language() . '/' . $slug : '/' . $slug;
	}
	return get_the_permalink(pll_get_post(get_page_by_path( $slug )->ID));
}
function is_custom_post_type(string $slug) : bool
{
	$slug = trim($slug, '/\\');
	$all_custom_post_types = get_post_types( array ( '_builtin' => FALSE ) );
	return isset($all_custom_post_types[$slug]);
}*/

function wpdocs_custom_excerpt_length( $length ) {
	return 20;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

function wpdocs_excerpt_more( $more ) {
	return '...';
}
add_filter( 'excerpt_more', 'wpdocs_excerpt_more' );

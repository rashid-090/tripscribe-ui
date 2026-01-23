<?php



function netstager_assets() {

// Add custom fonts, used in the main stylesheet.

wp_enqueue_style( 'style', get_stylesheet_uri() );

wp_enqueue_style( 'designstyle', get_stylesheet_directory_uri(). '/css/style.css' );


}

add_action( 'wp_enqueue_scripts', 'netstager_assets' );



add_theme_support( 'title-tag' );











remove_action('wp_head', 'print_emoji_detection_script', 7);



remove_action('wp_print_styles', 'print_emoji_styles');







register_nav_menus(array(
 'header_menu' => 'Header Menu',
 'footer_menu' => 'Footer Menu',
 'loan_menu' => 'Loan Menu',
 'deposit_menu' => 'Deposit Menu',
 'facilities_menu' => 'Facilities Menu',
 'form_menu' => 'Form Menu',
 'useful_links_menu' => 'Useful Links Menu',
 'more_menu' => 'More Menu',
 'mobile_menu' => 'Mobile Menu',
 'sitemap_menu' => 'Site Map Menu'
));
if (function_exists('register_sidebar')) register_sidebar(array(
 'name' => 'Left Sidebar',
 'id'            => 'sidebar-1',
 'before_widget' => '<li>',
 'after_widget' => '</li>',
 'before_title' => '<h2>',
 'after_title' => '</h2>',
));
if (function_exists('register_sidebar')) register_sidebar(array(
 'name' => 'Right Sidebar',
 'id'            => 'sidebar-2',
 'before_widget' => '<li>',
 'after_widget' => '</li>',
 'before_title' => '<h2>',
 'after_title' => '</h2>',
));
add_theme_support('post-thumbnails');
set_post_thumbnail_size('my_thumb', 190, 140, true);
add_image_size('banner', 550, 270, true);
function excerpt($limit)
{
$excerpt = explode(' ', get_the_content() , $limit);
if (count($excerpt) >= $limit)
{
array_pop($excerpt);
$excerpt = implode(" ", $excerpt) . '...';



	}



	else



	{



		$excerpt = implode(" ", $excerpt);



	}







	$excerpt = preg_replace('`\[[^\]]*\]`', '', $excerpt);



	return $excerpt;



} 



// limit excerpt length --> you can call ' echo excerpt(20) ' as an example







include('admin_option.php');



include('shortcodes.php');







//TRIGGER WHEN THEME ACTIVATED



if (isset($_GET['activated']) && is_admin()){



	



	//Create New Pages starts here



	nets_create_new_page('Home','','home.php');



	//nets_create_new_page('Blog','','blog.php');



	nets_create_new_page('Sitemap','[sitemap]','');



	



	



	



	



	# MENU CREATION STARTS



	nets_create_new_menu();	



	# MENU CREATION ENDS







	



}







//add_post_meta( 99, 'flavor', 'vanilla' );







function nets_create_new_menu()



{



	$menunames = array("Header Menu","Footer Menu","Services Menu","Useful Links Menu","Loan Menu","Deposit Menu","Facilities Menu","Form Menu","More Menu","Mobile Menu","Site Map Menu");

	$locationsArr = array('header_menu','footer_menu','services_menu','useful_links_menu','loan_menu','deposit_menu','facilities_menu','form_menu','mobile_menu','sitemap_menu');



	$i = 0;



	foreach($menunames as $menu_name)



	{



		$menu_exists = wp_get_nav_menu_object( $menu_name );



		// If it doesn't exist, let's create it.



		if( !$menu_exists){



			



			$menu_id = wp_create_nav_menu($menu_name);







			// Set up default menu items



			//'menu-item-classes' => 'home',



			wp_update_nav_menu_item($menu_id, 0, array(



				'menu-item-title' =>  __('Home'),



				



				'menu-item-attr-title' => 'Home',



				'menu-item-url' => home_url( '/' ), 



				'menu-item-status' => 'publish'));



			



			



			//$locations[$i] = $menu_id;







			$locations[$locationsArr[$i]] = $menu_id;



			set_theme_mod( 'nav_menu_locations', $locations );



			



			







		}



		$i++;



	



	}



	



	



	



}







function nets_create_new_page($new_page_title,$new_page_content,$new_page_template)



{



	$page_check = get_page_by_title($new_page_title);



	$new_page = array(



		'post_type' => 'page',



		'post_title' => $new_page_title,



		'post_content' => $new_page_content,



		'post_status' => 'publish',



		'post_author' => 1,



	);



	if(!isset($page_check->ID)){



		$new_page_id = wp_insert_post($new_page);



		if(!empty($new_page_template)){



			update_post_meta($new_page_id, '_wp_page_template', $new_page_template);



		}



	}



	



	$homepage = get_page_by_title( 'Home' );







	if ( $homepage )



	{



		update_option( 'page_on_front', $homepage->ID );



		update_option( 'show_on_front', 'page' );



	}



		



	



}







//Create Home and Blog Pages ends here







//Create Blog post type starts here



//add_action( 'init', 'create_post_your_post');



//function create_post_your_post() {



	//register_post_type( 'blog',



	//	array(



	//		'labels'       => array(



			//	'name'       => __( 'Blog' ),



			//),



			//'public'       => true,



			//'hierarchical' => true,



			//'has_archive'  => false,



			//'supports'     => array(



			//	'title',



			//	'editor',



			//	'excerpt',



			//	'thumbnail',



		//	), 



		//	'taxonomies'   => array(



		//		'post_tag',



		//		'category',



		//	)



	//	)



	//);



	//register_taxonomy_for_object_type( 'category', 'your_post' );



	//register_taxonomy_for_object_type( 'post_tag', 'your_post' );



//}

add_action( 'woocommerce_after_shop_loop_item_title', 'custom_after_title' );

function custom_after_title() {



    global $product;



    if ( $product->get_sku() ) {

        

		echo '<div class="productcode">'; echo $product->get_sku(); // Parent Category Name 

                        echo '</div>';  

    }



}

add_action( 'woocommerce_after_shop_loop_item_img', 'custom_after_img' );

function custom_after_img() {



    global $product;



  echo '<div class="productcodedddd">'; echo $product->get_sku(); // Parent Category Name 

                        echo '</div>';  
}

// add_filter( 'gettext', 'ds_change_readmore_text', 20, 3 );
// function ds_change_readmore_text( $translated_text, $text, $domain ) {

// if ( ! is_admin() && $domain === 'woocommerce' && $translated_text === 'Read more') {

// $translated_text = 'Your custom text';

// }

// return $translated_text;

// }



add_filter('request', function( $vars ) {

	global $wpdb;

	if( ! empty( $vars['pagename'] ) || ! empty( $vars['category_name'] ) || ! empty( $vars['name'] ) || ! empty( $vars['attachment'] ) ) {

		$slug = ! empty( $vars['pagename'] ) ? $vars['pagename'] : ( ! empty( $vars['name'] ) ? $vars['name'] : ( !empty( $vars['category_name'] ) ? $vars['category_name'] : $vars['attachment'] ) );

		$exists = $wpdb->get_var( $wpdb->prepare( "SELECT t.term_id FROM $wpdb->terms t LEFT JOIN $wpdb->term_taxonomy tt ON tt.term_id = t.term_id WHERE tt.taxonomy = 'product_cat' AND t.slug = %s" ,array( $slug )));

		if( $exists ){

			$old_vars = $vars;

			$vars = array('product_cat' => $slug );

			if ( !empty( $old_vars['paged'] ) || !empty( $old_vars['page'] ) )

				$vars['paged'] = ! empty( $old_vars['paged'] ) ? $old_vars['paged'] : $old_vars['page'];

			if ( !empty( $old_vars['orderby'] ) )

	 	        	$vars['orderby'] = $old_vars['orderby'];

      			if ( !empty( $old_vars['order'] ) )

 			        $vars['order'] = $old_vars['order'];	

		}

	}

	return $vars;

});
//Create Blog post type ends here
///////////////////////////////////////////////

///////////////////////////////////////////////
function int_packages_cpt() {
	// Set UI labels for Custom Post Type
	$labels = array(
	'name' => _x( 'International Packages', 'Post Type General Name', 'Netstger Creative Suite' ),
	'singular_name' => _x( 'International Packages', 'Post Type Singular Name', 'Netstger Creative Suite' ),
	'menu_name' => __( 'International Packages', 'Netstger Creative Suite' ),
	'parent_item_colon' => __( 'Parent International Packages', 'Netstger Creative Suite' ),
	'all_items' => __( 'All International Packages', 'Netstger Creative Suite' ),
	'view_item' => __( 'View International Packages', 'Netstger Creative Suite' ),
	'add_new_item' => __( 'Add New International Packages', 'Netstger Creative Suite' ),
	'add_new' => __( 'Add New', 'Netstger Creative Suite' ),
	'edit_item' => __( 'Edit International Packages', 'Netstger Creative Suite' ),
	'update_item' => __( 'Update International Packages', 'Netstger Creative Suite' ),
	'search_items' => __( 'Search International Packages', 'Netstger Creative Suite' ),
	'not_found' => __( 'Not Found', 'Netstger Creative Suite' ),
	'not_found_in_trash' => __( 'Not found in Trash', 'Netstger Creative Suite' ),
	);
	// Set other options for Custom Post Type
	$args = array(
	'label' => __( 'International Packages', 'Netstger Creative Suite' ),
	'description' => __( 'International Packages Details', 'Netstger Creative Suite' ),
	'labels' => $labels,
	// Features this CPT supports in Post Editor
	'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'taxonomies' => array( 'genres' ),
	'hierarchical' => false,
	'public' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'show_in_nav_menus' => true,
	'show_in_admin_bar' => true,
	'menu_position' => 5,
	'menu_icon' => 'dashicons-admin-tools',
	'can_export' => true,
	'has_archive' => false,
	'exclude_from_search' => false,
	'publicly_queryable' => true,
	'capability_type' => 'post',
	'show_in_rest' => true,
	);
	// Registering your Custom Post Type
	register_post_type( 'intpackages', $args );
	}
	add_action( 'init', 'int_packages_cpt', 0 );
///////////////////////////////////////////////
///////////////////////////////////////////////
function domestic_packages_cpt() {
	// Set UI labels for Custom Post Type
	$labels = array(
	'name' => _x( 'Domestic Packages', 'Post Type General Name', 'Netstger Creative Suite' ),
	'singular_name' => _x( 'Domestic Packages', 'Post Type Singular Name', 'Netstger Creative Suite' ),
	'menu_name' => __( 'Domestic Packages', 'Netstger Creative Suite' ),
	'parent_item_colon' => __( 'Parent Domestic Packages', 'Netstger Creative Suite' ),
	'all_items' => __( 'All Domestic Packages', 'Netstger Creative Suite' ),
	'view_item' => __( 'View Domestic Packages', 'Netstger Creative Suite' ),
	'add_new_item' => __( 'Add New Domestic Packages', 'Netstger Creative Suite' ),
	'add_new' => __( 'Add New', 'Netstger Creative Suite' ),
	'edit_item' => __( 'Edit Domestic Packages', 'Netstger Creative Suite' ),
	'update_item' => __( 'Update Domestic Packages', 'Netstger Creative Suite' ),
	'search_items' => __( 'Search Domestic Packages', 'Netstger Creative Suite' ),
	'not_found' => __( 'Not Found', 'Netstger Creative Suite' ),
	'not_found_in_trash' => __( 'Not found in Trash', 'Netstger Creative Suite' ),
	);
	// Set other options for Custom Post Type
	$args = array(
	'label' => __( 'Domestic Packages', 'Netstger Creative Suite' ),
	'description' => __( 'Domestic Packages Details', 'Netstger Creative Suite' ),
	'labels' => $labels,
	// Features this CPT supports in Post Editor
	'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'taxonomies' => array( 'genres' ),
	'hierarchical' => false,
	'public' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'show_in_nav_menus' => true,
	'show_in_admin_bar' => true,
	'menu_position' => 6,
	'menu_icon' => 'dashicons-admin-tools',
	'can_export' => true,
	'has_archive' => false,
	'exclude_from_search' => false,
	'publicly_queryable' => true,
	'capability_type' => 'post',
	'show_in_rest' => true,
	);
	// Registering your Custom Post Type
	register_post_type( 'domestic', $args );
	}
	add_action( 'init', 'domestic_packages_cpt', 0 );
///////////////////////////////////////////////
///////////////////////////////////////////////
function service_cpt() {
	// Set UI labels for Custom Post Type
	$labels = array(
	'name' => _x( 'Services', 'Post Type General Name', 'Netstger Creative Suite' ),
	'singular_name' => _x( 'Service', 'Post Type Singular Name', 'Netstger Creative Suite' ),
	'menu_name' => __( 'Service', 'Netstger Creative Suite' ),
	'parent_item_colon' => __( 'Parent Service', 'Netstger Creative Suite' ),
	'all_items' => __( 'All Services', 'Netstger Creative Suite' ),
	'view_item' => __( 'View Service', 'Netstger Creative Suite' ),
	'add_new_item' => __( 'Add New Service', 'Netstger Creative Suite' ),
	'add_new' => __( 'Add New', 'Netstger Creative Suite' ),
	'edit_item' => __( 'Edit Service', 'Netstger Creative Suite' ),
	'update_item' => __( 'Update Service', 'Netstger Creative Suite' ),
	'search_items' => __( 'Search Service', 'Netstger Creative Suite' ),
	'not_found' => __( 'Not Found', 'Netstger Creative Suite' ),
	'not_found_in_trash' => __( 'Not found in Trash', 'Netstger Creative Suite' ),
	);
	// Set other options for Custom Post Type
	$args = array(
	'label' => __( 'Services', 'Netstger Creative Suite' ),
	'description' => __( 'Service Details', 'Netstger Creative Suite' ),
	'labels' => $labels,
	// Features this CPT supports in Post Editor
	'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'taxonomies' => array( 'genres' ),
	'hierarchical' => false,
	'public' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'show_in_nav_menus' => true,
	'show_in_admin_bar' => true,
	'menu_position' => 5,
	'menu_icon' => 'dashicons-admin-tools',
	'can_export' => true,
	'has_archive' => false,
	'exclude_from_search' => false,
	'publicly_queryable' => true,
	'capability_type' => 'post',
	'show_in_rest' => true,
	);
	// Registering your Custom Post Type
	register_post_type( 'services', $args );
	}
	add_action( 'init', 'service_cpt', 0 );
///////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////
	function testimonials_cpt() {
		// Set UI labels for Custom Post Type
		$labels = array(
		'name' => _x( 'Testimonials', 'Post Type General Name', 'Netstger Creative Suite' ),
		'singular_name' => _x( 'Testimonials', 'Post Type Singular Name', 'Netstger Creative Suite' ),
		'menu_name' => __( 'Testimonials', 'Netstger Creative Suite' ),
		'parent_item_colon' => __( 'Parent Testimonials', 'Netstger Creative Suite' ),
		'all_items' => __( 'All Testimonials', 'Netstger Creative Suite' ),
		'view_item' => __( 'View Testimonials', 'Netstger Creative Suite' ),
		'add_new_item' => __( 'Add New Testimonials', 'Netstger Creative Suite' ),
		'add_new' => __( 'Add New', 'Netstger Creative Suite' ),
		'edit_item' => __( 'Edit Testimonials', 'Netstger Creative Suite' ),
		'update_item' => __( 'Update Testimonials', 'Netstger Creative Suite' ),
		'search_items' => __( 'Search Testimonials', 'Netstger Creative Suite' ),
		'not_found' => __( 'Not Found', 'Netstger Creative Suite' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'Netstger Creative Suite' ),
		);
		// Set other options for Custom Post Type
		$args = array(
		'label' => __( 'Testimonials', 'Netstger Creative Suite' ),
		'description' => __( 'Testimonials Details', 'Netstger Creative Suite' ),
		'labels' => $labels,
		// Features this CPT supports in Post Editor
		'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
		'taxonomies' => array( 'genres' ),
		'hierarchical' => false,
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_in_admin_bar' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-admin-tools',
		'can_export' => true,
		'has_archive' => false,
		'exclude_from_search' => false,
		'publicly_queryable' => false,
		'capability_type' => 'post',
		'show_in_rest' => true,
		);
		// Registering your Custom Post Type
		register_post_type( 'testimonials', $args );
		}
		add_action( 'init', 'testimonials_cpt', 0 );
		//////////////////////////////////////////////////////////////////
	
function visaservice_cpt() {
	// Set UI labels for Custom Post Type
	$labels = array(
	'name' => _x( 'Visa Services', 'Post Type General Name', 'Netstger Creative Suite' ),
	'singular_name' => _x( 'Visa Services', 'Post Type Singular Name', 'Netstger Creative Suite' ),
	'menu_name' => __( 'Visa Services', 'Netstger Creative Suite' ),
	'parent_item_colon' => __( 'Parent Visa Services', 'Netstger Creative Suite' ),
	'all_items' => __( 'All Visa Services', 'Netstger Creative Suite' ),
	'view_item' => __( 'View Visa Services', 'Netstger Creative Suite' ),
	'add_new_item' => __( 'Add New Visa Services', 'Netstger Creative Suite' ),
	'add_new' => __( 'Add New', 'Netstger Creative Suite' ),
	'edit_item' => __( 'Edit Visa Services', 'Netstger Creative Suite' ),
	'update_item' => __( 'Update Visa Services', 'Netstger Creative Suite' ),
	'search_items' => __( 'Search Visa Services', 'Netstger Creative Suite' ),
	'not_found' => __( 'Not Found', 'Netstger Creative Suite' ),
	'not_found_in_trash' => __( 'Not found in Trash', 'Netstger Creative Suite' ),
	);
	// Set other options for Custom Post Type
	$args = array(
	'label' => __( 'Visa Services', 'Netstger Creative Suite' ),
	'description' => __( 'Visa Services Details', 'Netstger Creative Suite' ),
	'labels' => $labels,
	// Features this CPT supports in Post Editor
	'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'taxonomies' => array( 'genres' ),
	'hierarchical' => false,
	'public' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'show_in_nav_menus' => true,
	'show_in_admin_bar' => true,
	'menu_position' => 5,
	'menu_icon' => 'dashicons-admin-tools',
	'can_export' => true,
	'has_archive' => false,
	'exclude_from_search' => false,
	'publicly_queryable' => true,
	'capability_type' => 'post',
	'show_in_rest' => true,
	);
	// Registering your Custom Post Type
	register_post_type( 'visa_services', $args );
	}
	add_action( 'init', 'visaservice_cpt', 0 );
	
///////////////////////////////////////////////////////////////////
function my_login_logo_one() {

    ?> <style type="text/css">
    body.login div#login h1 a {
    
     background-image: url(https://middleeasttravels.com/wp-content/themes/Netstager_Creative_Suite-3.0/images/logo.png);
    
    	 background-size: 220px;
    width: 278px;
    
    padding: 20px;
    height: 55px;
    background-position: center;
    
    } 
    
</style> <?php 

    } 

    add_action( 'login_enqueue_scripts', 'my_login_logo_one' );



    /* Changing the Url of login logo */

 

function ahm_login_logo_url() {

 return home_url();

}

add_filter( 'login_headerurl', 'ahm_login_logo_url' );

//////////////////////////////////////////////////////////////////////////////////

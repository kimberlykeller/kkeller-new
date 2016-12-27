<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package kkeller
 */

get_header(); ?>

	<div id="primary" class="content-area">
	
			
		<?php $posts = array('8', '10', '9','44'); ?>
		
		<?php $args = array(
				   'post_type' => 'page',
				   'post__in'  => $posts,
				   'orderby'=> 'post__in'
				); ?>
			
			 <?php $query = new WP_Query( $args ); ?>
 			
 			<?php 
 			
 				
 			while ( $query->have_posts() ) : $query->the_post(); ?>

			<main id="main" class="site-main" role="main">
				
			<?php	get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif; ?>
			</main><!-- #main -->
		<?php	endwhile; // End of the loop.	?>

	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();

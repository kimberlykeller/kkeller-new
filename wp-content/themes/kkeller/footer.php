<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kkeller
 */

?>

		</div><!-- #content -->
	</div><!-- #wrap -->
</div><!-- #container -->
</div><!-- #page -->
<div id ="footer">
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'kkeller' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'kkeller' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'kkeller' ), 'kkeller', '<a href="http://www.kimberlyannkeller.com" rel="designer">Kimberly Ann Keller</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div>


<?php wp_footer(); ?>

</body>
</html>

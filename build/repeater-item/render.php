<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if ( ! $postId = $attributes['postId'] ?? null ) {
	return;
}
?>

<li <?php echo get_block_wrapper_attributes(); ?>>
	<a href="<?php echo get_the_permalink( $postId ) ?>">
		<?php
		if ( has_post_thumbnail( $postId ) ) {
			echo get_the_post_thumbnail( $postId, 'full' );
		}
		echo get_the_title( $postId );
		?>
	</a>
</li>

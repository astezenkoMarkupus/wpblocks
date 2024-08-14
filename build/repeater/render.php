<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes() ?>>
	<?php
	echo '<h2>', $attributes['sectionTitle'], '</h2>';

	echo '<ul style="grid-template-columns: repeat(', $attributes['columns'], ', 1fr)">', $content, '</ul>';
	?>
</div>

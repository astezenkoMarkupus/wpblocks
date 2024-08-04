<?php
/**
 * Plugin Name:       Test Static Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Andrei Stezenko
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-static-block
 *
 * @package Testblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function testblocks_block_init(): void {
	register_block_type( __DIR__ . '/build/test_static_block' );
	register_block_type( __DIR__ . '/build/testimonial' );

	register_block_style(
		'core/paragraph',
		[
			'name' => 'Test Paragraph',
			'label' => __( 'Test Paragraph', 'test-static-block' ),
			'inline_style' => '.test-paragraph { background-color: red }'
		]
	);
}
add_action( 'init', 'testblocks_block_init' );

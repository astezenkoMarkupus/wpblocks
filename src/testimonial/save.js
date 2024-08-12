/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ){
	const { title, titleColor, body, backgroundImage, overlayColor, overlayOpacity } = attributes

	return (
		<div
			{ ...useBlockProps.save() }
			style={ {
				position: 'relative',
				backgroundImage: `url(${ backgroundImage })`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			} }
		>
			{
				overlayOpacity > 0
					? <div className='cwp-testimonial-overlay' style={ {
						backgroundColor: overlayColor,
						opacity: overlayOpacity
					} }></div> : ''
			}
			<RichText.Content tagName="h2" value={ title } style={ { position: 'relative', color: titleColor } } />
			<RichText.Content tagName="p" value={ body } style={ { position: 'relative' } } />
			<InnerBlocks.Content />
		</div>
	);
}

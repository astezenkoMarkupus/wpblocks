/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
	MediaUpload,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar
} from '@wordpress/block-editor';
import { IconButton, PanelBody, RangeControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const ALLOWED_BLOCKS = ['core/button'];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ){
	const { title, titleColor, body, alignment, backgroundImage, overlayColor, overlayOpacity } = attributes

	return ( [
		<InspectorControls style={ { marginBottom: '40px' } }> <PanelBody
			title="Title Color Settings" initialOpen={ false }
		>
			<p><strong>Select a color:</strong></p>
			<ColorPalette value={ titleColor } onChange={ value => setAttributes( { titleColor: value } ) }/>
		</PanelBody>

			<PanelBody title="Background Image" initialOpen={ false }>
				<p><strong>Select a background image:</strong></p>
				<MediaUpload
					onSelect={ value => setAttributes( { backgroundImage: value.sizes.full.url } ) } type="image"
					value={ backgroundImage } render={ ( { open } ) => {
					return (
						<IconButton
							onClick={ open } icon="upload"
							className="editor-media-placeholder__button is-button is-default is-large"
						> Background Image </IconButton>
					)
				} }
				/>

				<div style={ { margin: '20px 0 40px' } }>
					<p><strong>Background image overlay:</strong></p>
					<ColorPalette
						value={ overlayColor } onChange={ value => setAttributes( { overlayColor: value } ) }
					/> <RangeControl
					label="Overlay opacity" value={ overlayOpacity }
					onChange={ value => setAttributes( { overlayOpacity: value } ) } min="0" max="1" step="0.05"
				/>
				</div>
			</PanelBody> </InspectorControls>
		,
		<div { ...useBlockProps( { className: 'cwp-testimonial' } ) } style={ {
			position: 'relative',
			backgroundImage: `url(${ backgroundImage })`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		} }
		>
			{
				overlayOpacity > 0
					? <div
						className="cwp-testimonial-overlay" style={ {
						backgroundColor: overlayColor,
						opacity: overlayOpacity
					} }
					></div> : ''
			}

			<BlockControls>
				<AlignmentToolbar value={ alignment } onChange={ value => setAttributes( {
					alignment: value || 'none'
				} ) } />
			</BlockControls>

			<RichText
				key="editable" tagName="h2" placeholder="Title" value={ title }
				onChange={ value => setAttributes( { title: value } ) }
				style={ { position: 'relative', color: titleColor, textAlign: alignment } }
			/>
			<RichText
				key="editable" tagName="p" placeholder="Description" value={ body }
				onChange={ value => setAttributes( { body: value } ) }
				style={ { position: 'relative', textAlign: alignment } }
			/>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
		</div>
	] );
}

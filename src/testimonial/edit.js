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
	RichText
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ){
	const { title, titleColor, body } = attributes

	return ( [
		<InspectorControls style={ { marginBottom: '40px' } }>
			<PanelBody title='Title Color Settings'>
				<p><strong>Select a color:</strong></p>
				<ColorPalette value={ titleColor } onChange={ value => setAttributes( { titleColor: value } ) } />
			</PanelBody>
		</InspectorControls>,
		<div { ...useBlockProps( { className: 'cwp-testimonial' } ) }>
			<RichText
				key="editable" tagName="h2" placeholder="Title" value={ title }
				onChange={ value => setAttributes( { title: value } ) } style={ { color: titleColor } }
			/>
			<RichText
				key="editable" tagName="p" placeholder="Description" value={ body }
				onChange={ value => setAttributes( { body: value } ) }
			/>
		</div>
	] );
}

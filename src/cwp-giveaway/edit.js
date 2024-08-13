import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const CWP_TEMPLATE = [
	['core/image', {}],
	['core/heading', { placeholder: 'Giveaway Title' }],
	['core/paragraph', { placeholder: 'Giveaway Description' }],
	['create-block/cwp-giveaway-social-row', {}],
	['core/button', { placeholder: 'Call to Action' }]
]

const ALLOWED_BLOCKS = ['create-block/cwp-giveaway-social-row']

export default function Edit() {
	return (
		<div { ...useBlockProps( { className: 'cwp-giveaway' } ) }>
			<InnerBlocks template={ CWP_TEMPLATE } allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}

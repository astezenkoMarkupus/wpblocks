import { __ } from '@wordpress/i18n'
import { InspectorControls, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from '@wordpress/components'

import './editor.scss'

export default function Edit( { attributes, setAttributes } ) {
	const
		{ sectionTitle, columns } = attributes,
		blockProps = useBlockProps( {
			className: 'repeater',
			style: { gridTemplateColumns: `repeat(${ columns || 3 }, 1fr)` }
		} ),
		innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ['create-block/repeater-item'],
			orientation: 'horizontal'
		} )

	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Settings">
					<RangeControl
						label='Number of Columns'
						help='From 1 to 6'
						min='1'
						max='6'
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<RichText
					tagName="h2"
					className="section-title"
					placeholder="Section Title"
					value={ sectionTitle }
					onChange={ sectionTitle => setAttributes( { sectionTitle } ) }
				/>

				<ul { ...innerBlocksProps } />
			</div>
		</>
	)
}

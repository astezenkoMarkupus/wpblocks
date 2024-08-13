import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'
import rowMetadata from './social-row-block.json'

export { rowMetadata }

const ROW_TEMPLATE = [
	['core/columns', {}, [
		['core/column', { templateLock: 'all', width: '30%', verticalAlignment: 'center' }, [
			['core/image', { sizeSlug: 'thumbnail' }]
		]],
		['core/column', { templateLock: 'all' }, [
			['core/button']
		]]
	]]
]

export const settings = {
	icon: 'smiley',
	edit() {
		return (
			<div { ...useBlockProps( { className: 'cwp-social-row' } ) }>
				<InnerBlocks template={ ROW_TEMPLATE } templateLock='all' />
			</div>
		)
	},
	save() {
		return (
			<div>
				<div className="cwp-social-row">
					<InnerBlocks.Content />
				</div>
			</div>
		)
	}
}
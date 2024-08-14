import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Spinner } from '@wordpress/components'
import React, { useState } from 'react'
import Select from 'react-select'
import { useSelect } from '@wordpress/data'
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const
		{ postId, selectedOption } = attributes,
		[post, setPost] = useState( postId || null ),
		items = useSelect( select => {
			return select( 'core' ).getEntityRecords( 'postType', 'page', { per_page: -1 } )
		}, [] ),
		postsSelections = items ? items.map( item => {
			return {
				value: item.id,
				label: item.title.rendered
			}
		} ) : []

	const handlePostSelect = item => {
		const value = parseInt( item.value )

		setPost( value )
		setAttributes( {
			postId: value,
			selectedOption: item
		} )
	}

	/*const singlePost = useSelect( select => {
		const posts = select( 'core' ).getEntityRecords( 'postType', 'page', { include: postId } )

		return posts ? posts[0] : null
	}, [] )*/

	return (
		<>
			<InspectorControls>
				<PanelBody title="Posts Settings">
					<Select
						name="post-select"
						options={ [{ value: '', label: '---' }, ...postsSelections] }
						value={ selectedOption || '' }
						onChange={ handlePostSelect }
					/>
				</PanelBody>
			</InspectorControls>

			<li { ...useBlockProps( { className: 'repeater-item' } ) }>
				{ selectedOption ? selectedOption.label : 'no data' }
			</li>
		</>
	);
}

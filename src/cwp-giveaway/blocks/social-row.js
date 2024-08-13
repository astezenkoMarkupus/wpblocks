import { useBlockProps, InspectorControls, PlainText } from '@wordpress/block-editor'
import rowMetadata from './social-row-block.json'
import { Dashicon, PanelBody, PanelRow, RadioControl } from '@wordpress/components'

export { rowMetadata }

export const settings = {
	icon: 'smiley',
	attributes: {
		accountType: {
			type: 'string',
			default: 'twitter'
		},
		twitter: {
			default: {
				text: '',
				account: ''
			}
		},
		tweet: {
			default: {
				text: '',
				message: '',
				url: ''
			}
		},
		youtube: {
			default: {
				text: '',
				url: ''
			}
		}
	},
	edit( { attributes, setAttributes } ) {
		return (
			<div { ...useBlockProps( { className: 'cwp-social-row' } ) }>
				<InspectorControls style={{ marginBottom: '40px' }}>
					<PanelBody>
						<PanelRow>
							<RadioControl
								label='Social Media'
								help='The type of social media to use'
								selected={ attributes.accountType }
								options={ [
									{ label: 'Follow on Twitter', value: 'twitter' },
									{ label: 'Share a Tweet', value: 'tweet' },
									{ label: 'Subscribe on YouTube', value: 'youtube' }
								] }
								onChange={ value => setAttributes( { accountType: value } ) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				{
					attributes.accountType === 'twitter' && (
						<div>
							<Dashicon icon='twitter' style={{ color: '#00c3ff' }} />
							<PlainText
								placeholder='Follow me on Twitter'
								value={ attributes.twitter.text }
								onChange={ value => setAttributes( { twitter: { ...attributes.twitter, text: value } } ) }
							/>
							<PlainText
								placeholder='Your Twitter Account'
								value={ attributes.twitter.account }
								onChange={ value => setAttributes( { twitter: { ...attributes.twitter, account: value } } ) }
							/>
						</div>
					)
				}

				{
					attributes.accountType === 'tweet' && (
						<div>
							<Dashicon icon='twitter' style={{ color: '#00c3ff' }} />
							<PlainText
								placeholder='Share a Tweet'
								value={ attributes.tweet.text }
								onChange={ value => setAttributes( { tweet: { ...attributes.tweet, text: value } } ) }
							/>
							<PlainText
								placeholder='Tweet Message'
								value={ attributes.tweet.message }
								onChange={ value => setAttributes( { tweet: { ...attributes.tweet, message: value } } ) }
							/>
							<PlainText
								placeholder='Tweet URL'
								value={ attributes.tweet.url }
								onChange={ value => setAttributes( { tweet: { ...attributes.tweet, url: value } } ) }
							/>
						</div>
					)
				}

				{
					attributes.accountType === 'youtube' && (
						<div>
							<Dashicon icon='youtube' style={{ color: '#ed1111' }} />
							<PlainText
								placeholder='YouTube Text'
								value={ attributes.youtube.text }
								onChange={ value => setAttributes( { youtube: { ...attributes.youtube, text: value } } ) }
							/>
							<PlainText
								placeholder='YouTube URL'
								value={ attributes.youtube.url }
								onChange={ value => setAttributes( { youtube: { ...attributes.youtube, url: value } } ) }
							/>
						</div>
					)
				}
			</div>
		)
	},
	save( { attributes } ) {
		return (
			<div>
				<div className="cwp-social-row">
					{
						attributes.accountType === 'twitter' && (
							<div>
								<a href={ `#${ attributes.twitter.account }` } target='_blank'>
									<Dashicon icon='twitter' style={{ color: '#00c3ff' }} />
									{ attributes.twitter.text }
								</a>
							</div>
						)
					}

					{
						attributes.accountType === 'tweet' && (
							<div>
								<a href={ attributes.tweet.url + '?message=' + attributes.tweet.message } target="_blank">
									<Dashicon icon="twitter" style={ { color: '#00c3ff' } }/>
									{ attributes.tweet.text }
								</a>
							</div>
						)
					}

					{
						attributes.accountType === 'youtube' && (
							<div>
								<a href={ attributes.youtube.url } target="_blank">
									<Dashicon icon="youtube" style={ { color: '#ed1111' } }/>
									{ attributes.youtube.text }
								</a>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}
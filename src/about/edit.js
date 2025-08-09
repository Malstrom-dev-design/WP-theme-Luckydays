import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, MediaUploadCheck, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import {Button} from '@wordpress/components'

export default function Edit({attributes, setAttributes}) {
	const {imageUrl, imageAspectRatio} = attributes;
	const blockProps = useBlockProps({ className: 'about editable edit-hover' });


	return (
		<div { ...blockProps }>
			<div className='text-container'>
				<InnerBlocks
					allowedBlocks={['luckydaysprints/info-box', 'core/paragraph']}>
					template={[
						['luckydaysprints/info-box', {}],
						['core/paragraph', {Placeholder: "Bröd text"}]
					]}
				</InnerBlocks>
			</div>


			<div className='image-container'>

				<img className={imageAspectRatio} src={imageUrl}></img>

				<div className='actions'>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({imageUrl: media.url})}
							allowedTypes={['image']}
							render={({ open }) => (
								<Button onClick={open} className='add-image-btn primary'>
									{imageUrl == "" ? "Select image" : "Replace Image"}
								</Button>
							)}
						/>
					</MediaUploadCheck>


					<div className='button-wrapper'>A-R:
						<button
							className='primary'
							onClick={()=>{setAttributes({imageAspectRatio: "ratio-3-4"})}}
							>3:4
						</button>

						<button
							className='primary'
							onClick={()=>{setAttributes({imageAspectRatio: "ratio-4-3"})}}
							>4:3
						</button>

						<button
							className='primary'
							onClick={()=>{setAttributes({imageAspectRatio: "ratio-9-16"})}}
							>9:16
						</button>

						<button
							className='primary'
							onClick={()=>{setAttributes({imageAspectRatio: ""})}}
							>none
						</button>
					</div>
				</div>

			</div>
		</div>
	);
}

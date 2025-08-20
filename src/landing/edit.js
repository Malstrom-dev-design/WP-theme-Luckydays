import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import {Button} from '@wordpress/components'

export default function Edit({attributes, setAttributes}) {
	const {imageUrl } = attributes;
	const blockProps = useBlockProps({ className: 'landing editable edit-hover' });

	return (
		<div { ...blockProps }>
			<div className='actions'>
				<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({
								imageUrl: media.url,
							})}
							allowedTypes={['image']}
							render={({ open }) => (
								<Button onClick={open} className='add-image-btn primary'>
									{__('Add Images', 'luckydaysprints')}
								</Button>
							)}
						/>
				</MediaUploadCheck>
			</div>

			<div className='image-wraooer'>
				<img src={imageUrl}></img>
			</div>
		</div>
	);
}

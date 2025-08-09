import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/block-editor';
import {Button} from '@wordpress/components';
import {useState, useRef} from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
	const {imageUrls, title} = attributes;
	const blockProps = useBlockProps({ className: 'slide-gallery editable edit-hover' });
	
	const changeImagePlacement = (index, direction) => {
		const urlsCopy = [...imageUrls];
		const newIndex = index + direction;
		if (newIndex < 0 || newIndex >= imageUrls.length) {
			return
		}

		[urlsCopy[newIndex], urlsCopy[index]] = [urlsCopy[index], urlsCopy[newIndex]];
		setAttributes({imageUrls: urlsCopy});
	}

	const removeImage = (index) => {
		const urlsCopy = [...imageUrls];
		
		setAttributes({imageUrls: urlsCopy.filter((url, i) => i !== index)})
	}

	const slideGallery = () => {

	}

	return (
		<div { ...blockProps }>
				<RichText
					tagName='h2'
					value={title}
					onChange={(value) => {setAttributes({title: value})}}
					placeholder='title'
					className='title'
				/>

			<div className='gallery-container'>
				<button className='previous slider-button'></button>
				<div className='gallery-wrapper'>
					<div className='gallery'>
						{imageUrls && imageUrls.map((url, i) => (
							<div key={i} className='image-wrapper'>
								<div className='actions'>
									<button className='reorder-image-btn down primary' onClick={()=> {changeImagePlacement(i, -1)}}></button>
									<button className='remove-image-btn primary' onClick={()=> {removeImage(i)}}></button>
									<button className='reorder-image-btn up primary' onClick={()=> {changeImagePlacement(i, 1)}}></button>
								</div>
								<img src={url} />
							</div>
						))}
					</div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({imageUrls: [... imageUrls, media.url]})}
							allowedTypes={['image']}
							render={({ open }) => (
								<Button onClick={open} className='add-image-btn primary'>
									{__('Add Images', 'luckydaysprints')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</div>
				<button className='next slider-button'></button>
			</div>

		</div>
	);
}

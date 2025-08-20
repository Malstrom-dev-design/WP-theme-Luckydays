import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import {Button} from '@wordpress/components'
import EditButton from '../../components/Edit-Button'

export default function Edit({attributes, setAttributes}) {
	const {imageData, } = attributes;
	const blockProps = useBlockProps({ className: 'gallery editable edit-hover' });
	
	const changeImagePlacement = (index, direction) => {
		const imageDataCopy = [...imageData];

		const newIndex = index + direction;
		if (newIndex < 0 || newIndex >= imageData.length) {
			return
		}

		[imageDataCopy[newIndex], imageDataCopy[index]] = [imageDataCopy[index], imageDataCopy[newIndex]];
		setAttributes({
			imageData: imageDataCopy,
		});
	}

	const removeImage = (index) => {
		const imageDataCopy = [...imageData];
		
		setAttributes({imageData: imageDataCopy.filter((img, i) => i !== index),})
	}


	return (
		<div { ...blockProps }>
			<div className='actions'>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({
							imageData: [{
								url: media.url, id: media.id
							}, ... imageData],
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
		

			<div className='wrapper'>
				{imageData && imageData.map((image, i) => (
					<div key={i} className='image-wrapper'>
						<div className='actions'>
							<EditButton 
								type="arrow" 
								color="white" 
								className="primary plus add-order-type-btn"
								style={"transform: rotate(180deg)"}
								onClick={()=> {changeImagePlacement(i, -1)}}
							/>
							<EditButton 
								type="close" 
								color="white" 
								className="primary plus add-order-type-btn"
								onClick={()=> {removeImage(i)}}
							/>
							<EditButton 
								type="arrow" 
								color="white" 
								className="primary plus add-order-type-btn"
								onClick={()=> {changeImagePlacement(i, 1)}}
								transform='rotate(180deg)'
							/>
						</div>
						<img src={image.url} id={image.id} />
					</div>
				))}
			</div>
		</div>
	);
}

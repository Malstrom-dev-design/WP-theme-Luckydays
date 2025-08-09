import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'slide-gallery rendered' });
	const {imageUrls, title} = attributes;

	return (
		<div { ...blockProps }>

			<RichText.Content
				value={title}
				tagName='h2'
				className='title-container'
			/>

			<div className='gallery-container'>
				<button className='previous slider-button'></button>
				<div className='gallery-wrapper'>
					<div className='gallery' data-images={JSON.stringify(imageUrls)}></div>
				</div>
				<button className='next slider-button'></button>
			</div>
		</div>
	);
}

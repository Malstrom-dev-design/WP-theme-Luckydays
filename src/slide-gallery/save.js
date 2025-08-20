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
				<div className='slide-btn-container previous'>
					<button className='previous slider-button'>
						<svg width="100%" height="100%" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.585786 16.4142C-0.195262 15.6332 -0.195262 14.3668 0.585786 13.5858L13.3137 0.857864C14.0948 0.0768147 15.3611 0.0768146 16.1421 0.857863C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585786 16.4142ZM4 15L4 17L2 17L2 15L2 13L4 13L4 15Z"/>
						</svg>
					</button>
				</div>
				<div className='gallery-wrapper'>
					<div className='gallery' data-images={JSON.stringify(imageUrls)}></div>
				</div>
				<div className='slide-btn-container next'>
					<button className='next slider-button'>
						<svg width="100%" height="100%" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.585786 16.4142C-0.195262 15.6332 -0.195262 14.3668 0.585786 13.5858L13.3137 0.857864C14.0948 0.0768147 15.3611 0.0768146 16.1421 0.857863C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585786 16.4142ZM4 15L4 17L2 17L2 15L2 13L4 13L4 15Z"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'about rendered' });
	const {imageUrl, imageAspectRatio} = attributes;
	
	return (
		<div { ...blockProps }>
			<div className='text-container'>
				<InnerBlocks.Content/>
			</div>

			<div className='image-container'>
				<img className={imageAspectRatio} src={imageUrl}></img>
			</div>

		</div>
	);
}

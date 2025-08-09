import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'gallery rendered' });
	const {imageUrls} = attributes;

	return (
		<div { ...blockProps }>
			{imageUrls && imageUrls.map((url, i) => (
				<img src={url} key={i}
					loading='lazy'
				/>
			))}
		</div>
	);
}

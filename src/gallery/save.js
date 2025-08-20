import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'gallery rendered' });
	const {imageData} = attributes;

	return (
		<div { ...blockProps }>
			{imageData && imageData.map((url, i) => (
				<img src={url} key={i}
					loading='lazy'
					decoding='async'
				/>
			))}
		</div>
	);
}

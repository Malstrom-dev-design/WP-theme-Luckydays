import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'landing rendered' });
	const {imageUrl} = attributes;

	return (
		<section { ...blockProps }>
			<img src={imageUrl} alt='landing page image'></img>
		</section>
	);
}

import {useBlockProps} from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { } = attributes;
	const blockProps = useBlockProps.save({ className: 'slide-gallery' });

	return (
		<div {...blockProps}  >
		</div>
	);
}
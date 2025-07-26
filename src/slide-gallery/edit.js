import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps({ className: 'slide-gallery editable' });
	return (
		<div { ...blockProps }>
			<div className='image-wrapper'>
				<button className='previous'></button>
				<button className='next'></button>
			</div>
		</div>
	);
}

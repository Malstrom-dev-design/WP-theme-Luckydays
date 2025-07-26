import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'sksf-block contact-form' });
	return (
		<p { ...blockProps }>
            'test – hello from the editor!', 'luckydaysprints'
		</p>
	);
}

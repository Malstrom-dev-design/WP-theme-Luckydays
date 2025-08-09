import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';
export default function Save({attributes}) {
    const blockProps = useBlockProps.save({ className: 'info-box rendered' });
	const {titleText, paragraphText} = attributes;
	
	return (
		<div { ...blockProps }>
			<RichText.Content value={titleText} tagName='h4' className='titleText'/>
			<RichText.Content value={paragraphText} tagName='p' className='text'/>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import './editor.scss';
import {  useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const {titleText, paragraphText} = attributes;
	const blockProps = useBlockProps({ className: 'info-box editable edit-hover' });


	return (
		<div { ...blockProps }>

			<RichText
				tagName='h4'
				className='text-input'
				onChange={(value) => {setAttributes({titleText: value})}}
				value={titleText}
				placeholder='titel text...'
			/>

			<RichText
				tagName='p'
				className='text-input'
				onChange={(value) => {setAttributes({paragraphText: value})}}
				value={paragraphText}
				placeholder='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, vitae repellendus placeat ipsum ducimus ipsa deleniti harum enim sit cupiditate sunt magnam, atque recusandae pariatur aliquid ratione tempora ab velit esse accusantium, modi iusto suscipit? Et enim illo non laboriosam earum aut est quod eligendi consequuntur dolor ad iste fuga minima perferendis tempore a natus distinctio culpa sunt, dignissimos rerum!'
			/>
		</div>
	);
}

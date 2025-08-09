import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/block-editor';
import {Button} from '@wordpress/components'


export default function Edit({attributes, setAttributes}) {
	const {imageUrl, orderTypes} = attributes;
	const blockProps = useBlockProps({ className: 'contact-form editable edit-hover' });

	const handleAddOrderType = (e) =>{
		setAttributes({orderTypes: [... orderTypes, ""]})
	}

	const handleChangeOrderTypeLabel = (index, labelText) => {
		let arrayCopy = [...orderTypes];
		
		if (labelText == "") {
			arrayCopy = arrayCopy.filter((t, i) => i !== index);
		} else {
			arrayCopy[index] = labelText;
		}
		setAttributes({orderTypes: arrayCopy})
	}
	
	return (
		<div { ...blockProps }>

			<div className='wrapper'>
				<div className='left-side'>
					<h1 class="title">Kontakt</h1>

					<div class="image-wrapper">
						<div className='actions'>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({imageUrl: media.url})}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button onClick={open} className='primary'> {"Replace Image"}</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>

						<img src={imageUrl ? imageUrl : "/assets/media/images/print.png"} alt=""></img>
						<div class="contact-welcome-text">
							<p class="text-line-1"></p>
							<p class="text-line-2"></p>
						</div>
					</div>

					<div class="select-order-wrapper">
						{orderTypes && orderTypes.map((type, i) => (
							<div for="order" class="order-type-wrapper">
								<div class="custom-radio-button" >
									<input autocomplete="off" type="radio" name="order" value={type}></input>
									<span class="line-1 line"></span>
									<span class="line-2 line"></span>
								</div>
								<RichText
									tagName='h4'
									className='label'
									onChange={(value)=>{handleChangeOrderTypeLabel(i, value)}}
									value={type}
									placeholder="ex: tryck"
								/>
							</div>
						))}

						<div className='actions'>
							<button className='primary plus add-order-type-btn' onClick={handleAddOrderType}>
								<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="18" width="10" height="36" rx="5" fill="white"/>
									<rect y="18" width="10" height="36" rx="5" transform="rotate(-90 0 60)" fill="white"/>
								</svg>
							</button>
						</div>
					</div>

				</div>


                <div className='form'>
					<div className="input-wrapper">
						<label for="name" className="required">namn</label>
						<div className='input-ph'>ex: förnamn & efternamn...</div>
					</div>

					<div className="input-wrapper">
						<label for="email" className="required">epost</label>
						<div className='input-ph'>ex: epost@mail.se...</div>
					</div>

					<div className="input-wrapper">
						<label for="message" className="required">Beskriv ditt ärende</label>
						<div className='textarea-ph'>ex: 20 t-shirts för bandmerch med logga</div>
					</div>

                    <div className="submit-button">Skicka!</div>
                </div>
			</div>
		</div>
	);
}
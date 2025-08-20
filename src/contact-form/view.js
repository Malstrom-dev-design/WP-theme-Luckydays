document.addEventListener('DOMContentLoaded', ()=>{
    let loading = false;

    const contactFormDomEl = document.querySelector('.contact-form.rendered');
    const loader = contactFormDomEl.querySelector('.loader');
    const loaderMessageContainer = loader.querySelector('.message');
    const form = contactFormDomEl.querySelector('form');
    const formInputs = form.querySelectorAll('input,textarea');
    const requiredFormInputs = form.querySelectorAll('input,textarea');

    // check
    if (!contactFormDomEl) {
        return
    }

    // functions
    const handleSelectOrderType = (type) => {
        type.addEventListener('click', ()=>{
            // reset class
            orderTypes.forEach(t => {
                t.querySelector('.custom-radio-button').classList.remove('checked');
            });
    
            const typeInput = type.querySelector('input');
            const customRadioButton = type.querySelector('.custom-radio-button');
            typeInput.checked = true;
            customRadioButton.classList.add('checked');
    
        });
    }

    const inputErrorOccured = () => {
        let inputError = false;

        form.querySelectorAll('input.input-error,textarea.input-error').forEach(i => {
            i.classList.remove('input-error');
        });

        requiredFormInputs.forEach(i => {
            if (i.value === "") {
                i.offsetHeight;
                i.classList.add('input-error');
                inputError = true;
            }
        });

        if (inputError) {
            return true
        } else {
            return false
        }
    }
    const stopLoading = () => {
        loading = false;
        loaderMessageContainer.textContent = ""

        contactFormDomEl.classList.remove('loading');
        loader.classList.remove('check');
        loader.classList.remove('error');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) { return }
        loading = true;
        closeMessageButton.removeEventListener('click', stopLoading);


        if (inputErrorOccured()) {
            loading = false;
            return
        }

        contactFormDomEl.classList.add('loading');




        const formData = {
        }

        formInputs.forEach(input => {
            const name = input.name;
            const value = input.value;
            formData[name] = value;
        });

        let orderType = "";
        contactFormDomEl.querySelectorAll('.order-type-wrapper input').forEach(typeInput => {
            if (typeInput.checked) {
                orderType = typeInput.value
            }
        })
        formData.subject = `${orderType} förfrågan`;
        formData.target = "malstrom";

        const rqst = new Request('https://malstrom.art/API/mail/api.php', 
            {
                method: "POST", 
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            

        try {
            const response = await fetch(rqst);
            const data = await response.json();
            console.log(response, data);
            

            if (!response.ok) {
                loaderMessageContainer.textContent = "misslyckades att skicka!"
                loader.classList.add('error');
                closeMessageButton.addEventListener('click', stopLoading);
            }

            if (response.ok) {
                loaderMessageContainer.textContent = "meddelandet har skickats!"
                loader.classList.add('check');
                closeMessageButton.addEventListener('click', stopLoading);
            }
            
        } catch (error) {
            loaderMessageContainer.textContent = "Något gick fel! Vänligen prova igen"
            loader.classList.add('error');
            closeMessageButton.addEventListener('click', stopLoading);
        }

    
    }


        // attach handler functions
    // handle select order type
    const orderTypes = contactFormDomEl.querySelectorAll('.order-type-wrapper');
    orderTypes.forEach(handleSelectOrderType);


    // handle submit
    const submitButton = form.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);

    const closeMessageButton = loader.querySelector('.close-btn');


});

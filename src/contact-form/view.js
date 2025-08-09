document.addEventListener('DOMContentLoaded', ()=>{
    let loading = false;

    const contactFormDomEl = document.querySelector('.contact-form.rendered');
    const form = contactFormDomEl.querySelector('form');
    const formInputs = form.querySelectorAll('input,textareaa');
    const requiredFormInputs = form.querySelectorAll('input,textarea');

    // check
    if (!contactFormDomEl) {
        console.log("no contact form found");
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) { return }
        loading = true;

        if (inputErrorOccured()) {
            loading = false;
            return
        }

        contactFormDomEl.classList.add('loading');



        
        const formData = {
            name2: "", // ta bort som nyckel, dubbelkolla API
        }


        // const {success, data } = await fetchFunction({method: 'POST', formData, url: "https://malstrom.art/API/mail/api.php"} );
        // console.log(success, data);
        

        // if (!success) {
        //     alert('it failed');
        // }

        setTimeout(()=>{
            contactFormDomEl.classList.remove('loading');
            loading = false;
        }, 2000)
    }

        // attach handler functions
    // handle select order type
    const orderTypes = contactFormDomEl.querySelectorAll('.order-type-wrapper');
    orderTypes.forEach(handleSelectOrderType);


    // handle submit
    const submitButton = form.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);











    // animation
    class SVGPathAnimator {
        constructor(svgElement) {
          this.path = svgElement.querySelector('.morphing-path');
          this.paths = {
            spinner: "M50 10 A40 40 0 1 1 49.999 10",
            checkmark: "M20 50 L40 70 L80 30",
            error: "M30 30 L70 70 M70 30 L30 70"
          };
        }
      
        animateTo(targetPath, duration = 500) {
          const endPath = this.paths[targetPath];
          
          // Use a different approach - manually animate the path
          this.path.style.transition = `d ${duration}ms ease-in-out`;
          this.path.setAttribute('d', endPath);
          
          // Reset transition after animation
          setTimeout(() => {
            this.path.style.transition = '';
          }, duration);
        }
      
        showSpinner() {
          this.path.setAttribute('d', this.paths.spinner);
          // Add rotation animation to the SVG element instead of the path
          this.path.parentElement.style.animation = 'spin 1s linear infinite';
        }
      
        showSuccess() {
          this.path.parentElement.style.animation = 'none';
          return this.animateTo('checkmark');
        }
      
        showError() {
          this.path.parentElement.style.animation = 'none';
          return this.animateTo('error');
        }
    }

    const animator = new SVGPathAnimator(contactFormDomEl.querySelector('.loader .wrapper .status-icon'));
    animator.showSpinner();

    document.querySelector('.loader').addEventListener('click', ()=> {
        animator.showSuccess();

        setTimeout(()=>{
            animator.showError();
        }, 2000)
    });

});

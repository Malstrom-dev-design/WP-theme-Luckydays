document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slide-gallery.rendered').forEach(setupGallery);
});

function setupGallery(galleryRoot) {
    let windowWidth = window.innerWidth;
    let mode;
    let visibleCount;
    let resizeTimerId;

    if (windowWidth > 799) {
        mode = "desktop";
        visibleCount = 5
    } else if (windowWidth < 460) {
        mode = "mobile"
        visibleCount = 1
    } else if (windowWidth > 461 && windowWidth < 800) {
        mode = "tablet"
        visibleCount = 3
    }


    const galleryWrapper = galleryRoot.querySelector('.gallery-wrapper');
    const gallery = galleryRoot.querySelector('.gallery');
    const prevBtn = galleryRoot.querySelector('.previous');
    const nextBtn = galleryRoot.querySelector('.next');
    // dimensions
    const margin = 36;

    let galleryWidth;
    let imageWidth;
    let galleryHeight;

    const imageUrls = JSON.parse(gallery.dataset.images || '[]');
    // preload images
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });

    
    let nextImageIndex = 0;
    let prevImageIndex = 0;
    let isTransitioning = false;

    // Set initial gallery dimensions
    setDimensions();

    setupCarouselImages();



    function setDimensions() {
        galleryWidth = galleryWrapper.getBoundingClientRect().width;
        const nMargin = visibleCount ===1 ? 2 : visibleCount-1;
        imageWidth = visibleCount === 1 ? (galleryWidth - margin * nMargin) : (galleryWidth - margin * nMargin) / nMargin;

        galleryHeight = imageWidth / (9/16);
        
        galleryWrapper.style.height = `${galleryHeight}px`;
        gallery.style.height = `${galleryHeight}px`;
    }

    

    function setupCarouselImages() {
        // place prev hidden;
        const hiddenPrevPos = visibleCount === 1 ? (-imageWidth) :(-imageWidth/2) -imageWidth -margin
        appendImg(hiddenPrevPos, imageUrls[imageUrls.length-1]); 
        prevImageIndex = imageUrls.length-1;

        let imageIndex = 0;
        for (let posIndex = 0; posIndex < visibleCount; posIndex++) {
            let position
            if (visibleCount === 1) {
                position = margin;
            } else {
                position = ((imageWidth/2) * -1) + ((posIndex * 36) + (posIndex * imageWidth));
            }
            appendImg(position, imageUrls[imageIndex]);

            imageIndex++;
            if (imageIndex === imageUrls.length) {
                imageIndex = 0;
            }
            

            // place hidden nextImage
            if (posIndex+1 === visibleCount) {
                nextImageIndex = imageIndex;
                const hiddenNextPos = visibleCount === 1 ? galleryWidth : galleryWidth + (imageWidth/2) + margin
                appendImg(hiddenNextPos, imageUrls[nextImageIndex]);
            }
        }
    }

    function appendImg (position, url, prepend){
        const img = document.createElement('img');
        img.src = url;
        img.dataset.position = position;
        img.style.left = `${position}px`;

        if (prepend) {
            gallery.prepend(img);
        } else {
            gallery.append(img);
        }
        

    }

    function rotateToNextImage() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        if (nextImageIndex +1 === imageUrls.length) {
            nextImageIndex = 0;
        } else {
            nextImageIndex++
        }

        if (prevImageIndex +1 ===  imageUrls.length) {
            prevImageIndex = 0
        } else {
            prevImageIndex++
        }




        const childToRemove = gallery.firstElementChild
        childToRemove.addEventListener('transitionend', ()=> {
            childToRemove.remove();
        });


        gallery.querySelectorAll('img').forEach(img => {
            const currentPosition = parseInt(img.dataset.position);
            let newPosition
            newPosition = currentPosition - imageWidth - margin;

            img.dataset.position = newPosition;
            img.style.left = `${newPosition}px`;
        });

        const hiddenNextPos = visibleCount === 1 ? galleryWidth : galleryWidth + (imageWidth/2) + margin
        appendImg(hiddenNextPos, imageUrls[nextImageIndex]);


        setTimeout(()=>{
            if (childToRemove) {
                childToRemove.remove();
                
            }
            isTransitioning = false;
        }, 300);
    }

    function rotateToPreviousImage() {
        if (isTransitioning) return;
        isTransitioning = true;
        if (nextImageIndex -1 === -1) {
            nextImageIndex = imageUrls.length-1;
        } else {
            nextImageIndex--;
        }


        if (prevImageIndex -1 === -1) {
            prevImageIndex = imageUrls.length-1;
        } else {
            prevImageIndex--;
        }

        const childToRemove = gallery.lastElementChild
        childToRemove.addEventListener('transitionend', ()=> {
            childToRemove.remove();
        });
        


        gallery.querySelectorAll('img').forEach(img => {
            const currentPosition = parseInt(img.dataset.position);
            const newPosition = currentPosition + imageWidth + margin;
            img.dataset.position = newPosition;
            
            img.style.left = `${newPosition}px`;
        });

        const hiddenPrevPos = visibleCount === 1 ? (-imageWidth) :(-imageWidth/2) -imageWidth -margin
        appendImg(hiddenPrevPos, imageUrls[prevImageIndex], true); 


        setTimeout(()=>{
            if (childToRemove) {
                childToRemove.remove();
            }
            isTransitioning = false;
        }, 300);

    }


    // Event listeners
    nextBtn.addEventListener('click', rotateToNextImage);
    prevBtn.addEventListener('click', rotateToPreviousImage);

    let touchStartX = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50; // Minimum distance for a swipe to be registered

    galleryWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });

    galleryWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                rotateToPreviousImage();

            } else {
                rotateToNextImage();

            }
        }
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (resizeTimerId) {
            clearTimeout(resizeTimerId);
        }

        resizeTimerId = setTimeout(()=>{
            windowWidth = window.innerWidth;

            if (mode != "desktop" && windowWidth > 799) {
                mode = "desktop";
                visibleCount = 5
            } 
            if (windowWidth < 460) {
                mode = "mobile"
                visibleCount = 1
            } 
            if (windowWidth > 461 && windowWidth < 800) {
                mode = "tablet"
                visibleCount = 3
            }
    
            gallery.innerHTML = "";
            setDimensions();
            setupCarouselImages();
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');
    let currentVideo = null;

    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const label = this.querySelector('.gallery-label').textContent;
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            caption.textContent = label;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    });

    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = 'none';
            document.body.style.overflow = ''; 
        }
    });

   
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = ''; 
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display !== 'block') return;
        
        const images = Array.from(document.querySelectorAll('.gallery-item img'));
        const currentIndex = images.findIndex(img => img.src === lightboxImg.src);

        if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
            const nextItem = images[currentIndex + 1].closest('.gallery-item');
            lightboxImg.src = images[currentIndex + 1].src;
            lightboxImg.alt = images[currentIndex + 1].alt;
            caption.textContent = nextItem.querySelector('.gallery-label').textContent;
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            const prevItem = images[currentIndex - 1].closest('.gallery-item');
            lightboxImg.src = images[currentIndex - 1].src;
            lightboxImg.alt = images[currentIndex - 1].alt;
            caption.textContent = prevItem.querySelector('.gallery-label').textContent;
        }
    });
});
/******************************************
/* CAROUSEL / SLIDER
/*******************************************/

const carouselImages = document.querySelector('.carousel-images');
const carouselPreviewImages = document.querySelectorAll('.carousel-preview img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

  
function showImage(index) {
    
  carouselImages.style.transform = `translateX(-${index * 50}%)`;
  carouselPreviewImages.forEach((previewImg, idx) => {
    if (idx === index) {
      previewImg.style.opacity = 1;
    } else {
      previewImg.style.opacity = 0.5;
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselPreviewImages.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselPreviewImages.length) % carouselPreviewImages.length;
  showImage(currentIndex);
}

carouselPreviewImages.forEach((previewImg, idx) => {
  previewImg.addEventListener('click', () => {
    currentIndex = idx;
    showImage(currentIndex);
  });
});

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
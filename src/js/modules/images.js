const imagesModal = (parentImagesSelector) => {
  const parentImages = document.querySelector(parentImagesSelector);

  const modalSelector = document.createElement('div');
  const bigImage = document.createElement('img');
  modalSelector.classList.add('popup');

  function onModalImage() {
    parentImages.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('preview')) {
        event.preventDefault();

        const path = event.target.parentNode.getAttribute('href');

        bigImage.src = path;
        bigImage.style.cssText = 'width: 600px; height: 600px; object-fit: cover';

        modalSelector.style.cssText = 'display: flex; justify-content: center; align-items: center;';
        document.body.style.overflow = 'hidden';

        modalSelector.append(bigImage);
        parentImages.append(modalSelector);
      }
    });
  }

  function closeModalImage() {
    parentImages.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  onModalImage();
  closeModalImage();
};

export default imagesModal;

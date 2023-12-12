let loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('is-hidden');
  setTimeout(() => {
    loader.remove();
  }, 600);
});

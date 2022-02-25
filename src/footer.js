import './footer.css';

const footer = () => {
  const footerWrapper = document.createElement('div');
  footerWrapper.classList.add('footer-wrapper');
  const footerWrapperText = document.createElement('div');
  footerWrapperText.textContent = 'Developed by Bedena';
  footerWrapperText.classList.add('footer-wrapper-text');
  footerWrapper.appendChild(footerWrapperText);
  return footerWrapper;
};

export default footer;
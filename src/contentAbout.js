import './contentAbout.css';

const contentAbout = () => {
  const aboutWrapper = document.createElement('div');
  aboutWrapper.classList.add('about-wrapper');
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');
  aboutContainer.classList.add('container');
  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('about-title');
  aboutTitle.textContent = 'It is a pizza restaurant';
  aboutContainer.appendChild(aboutTitle);
  const aboutDescription = document.createElement('p');
  aboutDescription.classList.add('about-description');
  aboutDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati vero natus ad, voluptatem harum ut odio quo voluptatum quam.';
  aboutContainer.appendChild(aboutDescription);
  aboutWrapper.appendChild(aboutContainer);
  return aboutWrapper;
};

export default contentAbout;
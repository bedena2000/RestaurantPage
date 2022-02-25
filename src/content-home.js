import './content-home.css';

const contentHome = () => {
  const contentHomeContainer = document.createElement('div');
  contentHomeContainer.classList.add('container');
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper');
  const homeH1 = document.createElement('h1');
  homeH1.classList.add('home-wrapper-title');
  homeH1.textContent = 'PizzaPlace';
  const homeDescription = document.createElement('p');
  homeDescription.classList.add('home-wrapper-description');
  homeDescription.textContent = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui incidunt, alias quam aliquam odio, nobis facilis, delectus ex rem sunt. Explicabo perferendis neque voluptate. Laudantium suscipit impedit minima maxime.
  `;
  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'Menu';
  homeWrapper.appendChild(homeH1);
  homeWrapper.appendChild(homeDescription);
  homeWrapper.appendChild(homeButton);
  contentHomeContainer.appendChild(homeWrapper);
  return contentHomeContainer;
};

export default contentHome;
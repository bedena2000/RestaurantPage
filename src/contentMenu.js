import './contentMenu.css';
import pizza1 from './img/pizza-1.jpg';
import pizza2 from './img/pizza-2.jpg';
import pizza3 from './img/pizza-3.jpg';

const contentMenu = () => {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('container');
  menuContainer.classList.add('menu-container');
  menuWrapper.appendChild(menuContainer);
  for(let i = 0; i < 3; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    if(i === 0) {
      const imageItem = document.createElement('img');
      imageItem.classList.add('image-item');
      imageItem.src = pizza1;
      menuItem.appendChild(imageItem);
    } else if(i === 1) {
      const imageItem = document.createElement('img');
      imageItem.classList.add('image-item');
      imageItem.src = pizza2;
      menuItem.appendChild(imageItem);
    } else if (i === 2) {
      const imageItem = document.createElement('img');
      imageItem.classList.add('image-item');
      imageItem.src = pizza3;
      menuItem.appendChild(imageItem);
    }
    const menuItemText = document.createElement('h3');
    menuItemText.classList.add('menu-item-text');
    menuItemText.textContent = `Pizza: ${i + 1}`;
    menuItem.appendChild(menuItemText);
    const menuItemDescription = document.createElement('div');
    menuItemDescription.classList.add('menu-item-description');
    menuItemDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum facere dolores pariatur, nihil architecto velit ipsa eveniet inventore ex!';
    menuItem.appendChild(menuItemDescription);
    menuContainer.appendChild(menuItem);
  }
  return menuWrapper;
};

export default contentMenu;
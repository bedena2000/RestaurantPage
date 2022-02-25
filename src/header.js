import './header.css';

const Header = (contentLoaderFunc) => {
  // Page Header
  const headerSection = document.createElement('div');
  headerSection.classList.add('header-section');
  const containerElement = document.createElement('div');
  containerElement.classList.add('header-container');
  containerElement.classList.add('container');
  headerSection.appendChild(containerElement);
  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');
  for(let i = 0; i < 3; i++) {
    const menuListItem = document.createElement('li');
    if(i === 0) { 
      menuListItem.textContent = 'Home';
      menuListItem.addEventListener('click', (event) => {
        contentLoaderFunc('1');
      });
    } else if (i === 1) {
      menuListItem.textContent = 'Menu';
      menuListItem.addEventListener('click', (event) => {
        contentLoaderFunc('2');
      });
    } else if (i === 2) {
      menuListItem.textContent = 'About'; 
      menuListItem.addEventListener('click', (event) => {
        contentLoaderFunc('3');
      });
    }
    menuListItem.classList.add('menu-list-item');
    menuList.appendChild(menuListItem);
  }
  containerElement.appendChild(menuList);
  return headerSection;
};

export default Header;
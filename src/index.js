import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import contentHome from './content-home.js';
import contentMenu from './contentMenu.js';
import contentAbout from './contentAbout.js';
import './index.css';
import './media.css';

// PageChecker

let pageChecker = 1; 


// Render All

// Header
document.body.appendChild(Header(contentLoaderFunc));

// Content 
function contentLoader () {
  if(pageChecker === 1) {
    const removeElement = document.querySelector('.content-container');
    document.querySelector('body').removeChild(removeElement);
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
  } else if (pageChecker === 2) {
    const removeElement = document.querySelector('.content-container');
    document.querySelector('body').removeChild(removeElement);
    console.log(removeElement);
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
  } else if (pageChecker === 3) {
    const removeElement = document.querySelector('.content-container');
    document.querySelector('body').removeChild(removeElement);
    console.log(removeElement);
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
  }
};

document.body.appendChild(Content(contentHome));

function contentLoaderFunc (number) {
  if(number === '1') {
    pageChecker = 1;
  } else if(number === '2') {
    pageChecker = 2;
  } else if(number === '3') {
    pageChecker = 3;
  }
  contentLoader();
};
// Footer
document.body.appendChild(Footer());

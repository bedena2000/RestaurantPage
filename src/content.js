import './content.css';


const content = (content) => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  const resultItem = content();
  contentContainer.appendChild(resultItem);
  return contentContainer;
};

export default content;
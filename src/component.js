export default (text = "Webpack created us a title!") => {
    const element = document.createElement("h1");
  
    element.innerHTML = text;
  
    return element;
  };
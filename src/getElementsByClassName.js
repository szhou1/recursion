// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // create elements array to store list
  var elements = [];

  function getChildElements(element){
    // check if the className we are searching for is contained in this element
    if(_.contains(element.classList, className)){
      // push to array
      elements.push(element);
    }

    // for each child element, recursively push the elements
    element.childNodes.forEach(function(child){
      getChildElements(child);
    });

  }

  getChildElements(document.body);
  return elements;
};

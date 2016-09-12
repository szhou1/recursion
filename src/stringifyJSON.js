// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  function stringifyJSONHelper(obj){

    var str = "";

    if(Array.isArray(obj)){
      str += "[";
      obj.forEach(function(item, i){
        if(i > 0){str += ","}
        str += stringifyJSONHelper(item);
      });

      return str += "]";
    }
    else if(obj === null){
      return null + "";
    }
    else if(typeof obj === 'object'){
      str += "{";

      var keys = Object.keys(obj);
      for(var i=0; i<keys.length; i++){
        if(typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined'){
          if(i>0) {str += ","}
          str += "\"" + keys[i] + "\"" + ":" + stringifyJSONHelper(obj[keys[i]]);
        }
      }

      return str += "}";
    }
    else if(typeof obj === 'string'){
      return str += "\"" + obj + "\"";
    }
    else if(typeof obj === 'boolean'){
      return str += obj + "";
    }
    else if(typeof obj === 'function'){
      return null;
    }
    else if(typeof obj === "undefined"){
      return null;
    }
    else{
      return str += obj + "";
    }

  };

  return stringifyJSONHelper(obj);

};

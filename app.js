"use strict";

 function capitalize_Words(string)
{
 return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('Hello, world!'));

// var a = document.getElementsByClassName('demo');
// console.log(a)

// for(var i= 0; i<a.length;i++){
//     console.log(a[i].innerHTML)
// }

// var b = document.getElementsByTagName('p')
// console.log("Tag==>" ,b)

///dom///
// console.log(document)


//  

//instead of getemlemntbyid you can use childNodes
//documnet ky sary childnodes batae ha e.g: include elements, text and comments.
// console.log(document.childNodes[1])


///html ky jo tag hain unky childnodes dekhao: childNodes this will show head, text , body
// console.log(document.childNodes[1].childNodes)

//jang artifactes
//jang artifacte g 3 hondi aa nodetype
//html g 1 hondi aa
//nodetype : itd an attribute

//The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

//js main hi html ky elemnt create karengy by using createelemnt
var span = document.createElement('span')
//element main agar khuch likhna ho:
var spanText = document.createTextNode('this is text')

myspan.appendChid(spanText) 


//Creating tag in js
//create element
//set atrribute: class

//create text
//now link : appned elemnt and text

//
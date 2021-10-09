var pageNav = document.createElement('nav')
var arrNav = ['Home', 'About', 'Contact']

for (i=0; i < arrNav.length; i++) {
    var span = document.createElement('span');

    span.innerText = arrNav[i];
    span.style.padding = '5px';

    pageNav.appendChild(span);
}
document.body.appendChild(pageNav)

var myH1 = document.createElement("h1");
myH1.textContent = "Welcome to my JS site";
document.body.append(myH1);

var myPtag = document.createElement("p");   
myPtag.textContent = "All this was created with Javascript";
document.body.append(myPtag);

var myOl = document.createElement("ol");

var myLi1 = document.createElement("li");
myLi1.textContent = "Hunting gear";
myOl.appendChild(myLi1);


var myLi2 = document.createElement("li");
myLi2.textContent = "Food list";
myOl.appendChild(myLi2);

var myLi3 = document.createElement("li");
myLi3.textContent = "Fuel";
myOl.appendChild(myLi3);

document.body.append(myOl);

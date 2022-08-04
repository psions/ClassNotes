//querySelector
//selector: id, class, tag, etc.
// Select a single element from the page.


// var result = document.querySelector("ol#favorite-things > li")
// console.log(result);

//querySelectorAll

// var result=document.querySelectorAll("ol#favorite-things > li");
// console.log(Array.from(result));

// for (var i = 0; i < result.length; i++) {
//   result[i].textContent = "** REDACTED **";
// }

//getElementById
//getElementsByClassName
//getElementsByTagName
//getElementsByName
//getElementsByAttribute
//getElementsByQuery
//getElementsByQueryAll


//innerHTML - security risk
//innerText - expensive
//textContent - cheap and easy

// var person = {name: "John", age: 30};
// person.name = "Jim";
// console.log(person);

/**
 * 1. select the h1 element
 * 2. save the h1 element's text to a variable
 * 3. change the paragraph elements text to be the same as the h1 element's text
 */


// var text = document.querySelector("#header").textContent
// document.querySelector("#paragraph").textContent = text


// var header = document.getElementById("header");
// header.style.backgroundColor = "red"

// document.body.style.backgroundColor = "blue"

//fontSize: 1.5em;
//color: red;
//backgroundColor: blue;
//textAlign: center;
//padding: 10px;
//border: 1px solid black;

//className
// var className = documentquerySelector("#header").className += " new-class"

//classList
// document.querySelector("#header").classList.add("new-class")
// document.querySelector("#header").classList.remove("another-class")
// document.querySelector("#header").classList.toggle("new-class")
// console.log(document.querySelector("#header").className)

// var inputBox = document.querySelector("#input-box")

// var newLi = document.createElement("li")
// newLi.textContent = "4"
// var myList = document.getElementById("my-list")
// myList.append(newLi)

// var newP = document.createElement("p")
// newP.textContent = "This is a new paragraph"
// document.body.append(newP)

// newP.style.textAlign = "center"
// newP.style.color = "red"
// newP.style.fontSize = "1.5em"
// newP.style.backgroundColor = "#00ff00"
// newP.style.padding = "10px"
// newP.style.border = "1px solid black"


//innerHTML vs textContent

// var myList = document.getElementById("my-list")
// myList.innerHTML += "<li>3</li>"

// document.body.innerHTML += "<p id= 'paragraph'>This is a new paragraph</p>"
// document.getElementById("paragraph").style.textAlign = "This is a new paragraph"

// var powerRangers = ["Jason", "Zack", "Trini", "Billy", "Kimberly, Tommy", "Ricky", "Reed", "Red", "Green", "Blue", "Yellow", "Black"]

// var rangersList = document.getElementById("rangers")
// // var newName = document.getElementById("li")
// // newName.textContent = powerRangers[0]
// // rangersList.append(newName)

// for (var i = 0; i < powerRangers.length; i++) {
//   var newName = document.createElement("li")
//   newName.textContent = powerRangers[i]
//   rangersList.append(newName)
// }



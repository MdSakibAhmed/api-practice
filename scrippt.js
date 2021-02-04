// fetch("https://jsonplaceholder.typicode.com/todos").then(result => console.log(result.json()))

// const img = document.querySelector(".ship-img");
// // img.src = "ship-min.png";

// img.addEventListener("load",function(){
//     img.classList.add("sakib-img")
// })

// document.querySelector("h1").style.color="red";

// XMLHTTPREQUEST

// const request = new XMLHttpRequest();

// request.open("GET","https://restcountries.eu/rest/v2/name/india");

// request.send();

// request.addEventListener("load",function(){
//     const [,result] = JSON.parse(this.responseText);
//     console.log(result);
// })

// setTimeout(()=>{

//     setTimeout(() => {
//         console.log("2");

//         setTimeout(() => {
//             console.log("3");

//         }, 1000);

//     }, 500);
// console.log("1");
// },2000)

// const request = fetch("https://restcountries.eu/rest/v2/name/bangladesh");

// request
//   .then((respons) => respons.json())
//   .then((data) => {
//     console.log(data);
//     const neigbour = data[0].borders[1];
//     if (!neigbour) return;
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neigbour}`);
//   })
//   .then((data) => {
//     return data.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });


// fetch(`https://jsonplaceholder.typicode.com/todos`).then(respons => respons.json()).then(data => setItemText(data)); 




// function setItemText(data){
//     const userName = data.map(element =>{
//         const parentElement = document.getElementById("parent-element");
//         const newElement = document.createElement("li");
//         newElement.innerText = element.title;
//         parentElement.appendChild(newElement);
//         return element.completed;


//     })
//     console.log(userName);


// }

function getUserData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 const favaurate = document.querySelector("input[name='play']:checked").value;

 
  const userInformation = {
    name: name,
    emeil: email,
    password:password,
    favaurate: favaurate,
  };
  return userInformation;
}

document.getElementById("btn").addEventListener("click", function () {
  const userData = getUserData();
  console.log(userData);
  postData("posts",userData);
});

function postData(dataServer,userData) {
  console.log(userData);

  fetch(`https://jsonplaceholder.typicode.com/${dataServer}`, {
    method: "POST",
    body:JSON.stringify(userData),
    headers:{"Content-type": "application-type/json; charset=UTF-8"}
  }).then(respons => respons.json()).then(data => console.log(data));
}

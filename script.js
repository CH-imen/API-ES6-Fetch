// fetch("https://www.breakingbadapi.com/api/")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// })
//promise

///// Es6 affichage des noms des actors a partir d'API   ////
// async function get(){
//    const response = await fetch("https://www.breakingbadapi.com/api/characters")
//    const data = await response.json() 

//    document.querySelector("#content h1").innerHTML=   data[0].name 
//    document.querySelector("#content h5").innerHTML=   data[0].birthday 
//    document.querySelector("#content img").src=  data[0].img 
   
//    document.querySelector("#actor").innerHTML=
//  `  
//    <select>
//    ${ data.map(actor =>`<option> ${actor.name} </option>`)

// }
// </select>
// `
// }
// get()
// const selectElement = document.querySelector('actor');

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// });

// quand je selection le nom de l'acteur :affiche nom +birthday+img
const api = "https://www.breakingbadapi.com/api/characters";

async function getData(){
    try{
        const response =await fetch (api)
        const data = await response.json();
    
        printData(data)
    }catch(e){
        console.log("Error:" ,e.message)
    }
    
}

function printData(data){
    const header = document.querySelector("#header")
     const content = document.querySelector("#content")
   header.innerHTML += `
   <select class="form-control" onChange="getActor(this.value)">
      ${ data.map(actor =>`<option> ${actor.name} </option>`)
   
   }
   </select>
   `}
  async function getActor(name){
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json();

    content.innerHTML = `
    <h2> ${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].birthday} </h4>
    <img src="${data[0].img} " width="250">
    `
   }

getData()
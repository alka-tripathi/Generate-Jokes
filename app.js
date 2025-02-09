let btn = document.querySelector("button");
let output = document.querySelector(".jokes");
let url="https://icanhazdadjoke.com/";
btn.addEventListener("click",getJokes)

async function getJokes(){
   try{
    let res = await fetch(url,{
        headers:{
            "Accept":"application/json"
        }
    });
  let data =  await res.json();
 let jokes = data.joke;
 output.innerText= jokes;
 console.log(jokes);
   }
   catch(err){
    console.log("Error is:",err);
    output.innerText= "Failed to generate the Jokes";

   }
}
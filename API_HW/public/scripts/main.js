let link = "https://64486933e7eb3378ca2e0f51.mockapi.io/api/users?id=";
function getRandomInt(){


    return Math.floor((Math.random() * 10) + 1);
}

let id = getRandomInt();

document.getElementById('fetchData').addEventListener('click', function(){
    fetch(link + id.toString())
  .then(response => response.json())
  .then(data => {
    let info = data[0];
   
    document.getElementById('dataContainer').innerHTML = info["message"];
    document.getElementById('imageShow').src = info["avatar"];
    document.getElementById('nameArea').innerHTML = info["name"];
    id = getRandomInt()
})

    
    .catch(error => {
        console.error("There was an error fetching data:", error);
        console.log('oops');
    });
});
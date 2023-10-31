let link = "https://64486933e7eb3378ca2e0f51.mockapi.io/api/users?id=";
function getRandomInt(){


    return Math.floor((Math.random() * 10) + 1);
}

let id = getRandomInt();

document.getElementById('fetchData').addEventListener('click', function(){
    fetch(link + id.toString())
  .then(response => response.json())
  .then(data => {
    document.getElementById("dataContainer").innerHTML = "";
    let info = data[0];
    const processedMessage = processText(info["message"]);
    let textArray = textToArray(processedMessage);
    let paragraph = document.getElementById("dataContainer");
    for (let sentence of textArray) {
        let span = document.createElement("span");
        span.style.display = "block";
        span.textContent = sentence;
        paragraph.appendChild(span);
    }
   
    // document.getElementById('dataContainer').innerHTML = processedMessage;
    document.getElementById('imageShow').src = info["avatar"];
    document.getElementById('nameArea').innerHTML = info["name"];
    id = getRandomInt()
})

    
    .catch(error => {
        console.error("There was an error fetching data:", error);
        console.log('oops');
    });
});

function processText(text) {
    text = text.replace(/\./g, '!!!\n');
    
    console.log(text);
    return text;
}
function textToArray(text) {
    text = text.replace(/\./g, '!!!\n');
    let sentences = text.split('\n');
    console.log(sentences);
    return sentences;
}
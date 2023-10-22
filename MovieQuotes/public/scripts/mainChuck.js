document.getElementById('fetchData').addEventListener('click', function(){
    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    let quote = data.value;
    document.getElementById('dataContainer').innerHTML = quote;
})

    
    .catch(error => {
        console.error("There was an error fetching data:", error);
        console.log('oops');
    });
});
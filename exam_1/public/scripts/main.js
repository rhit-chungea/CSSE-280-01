let birdImage = "images/hedwig.png";
let title = "Hedwig";
let bio = "Hedwig (d. 27 July 1997) was Harry Potter's pet female snowy owl. Hedwig was an eleventh birthday gift from Rubeus Hagrid to Harry. Hagrid purchased her at the Eeylops Owl Emporium. In addition to delivering mail, the typical use owls are put to, Hedwig was also a close companion to Harry. She remained one of his closest friends right up to her death during the Battle of the Seven Potters at the height of the Second Wizarding War.";
let birdDescriptor = "This is Hedwig!";
main = function(){
    console.log('Ready');
    document.querySelector("#hedwigButton").onclick = (event) => {
        birdImage = "images/hedwig.png";
        title = "Hedwig";
        birdDescriptor = "This is Hedwig!";
        bio = "Hedwig (d. 27 July 1997) was Harry Potter's pet female snowy owl. Hedwig was an eleventh birthday gift from Rubeus Hagrid to Harry. Hagrid purchased her at the Eeylops Owl Emporium. In addition to delivering mail, the typical use owls are put to, Hedwig was also a close companion to Harry. She remained one of his closest friends right up to her death during the Battle of the Seven Potters at the height of the Second Wizarding War.";
        updateView();

    }
    document.querySelector("#pigwidgeonButton").onclick = (event) => {
        birdImage = "images/pigwidgeon.png";
        title = "Pigwidgeon";
        bio = "Ron Weasley's first owl, Pigwidgeon, or 'Pig' for short, was a tiny Scops owl, gifted by Sirius Black. Although he wasn't big, Pigwidgeon's enthusiasm made up for what he lacked in size and strength. His high energy, show-off nature and impatience meant he was hard to ignore.";
        birdDescriptor = "This is Pigwidgeon!";
        updateView();
        
    }

}

updateView = function(){
    document.querySelector(".card-title").innerHTML = `${birdDescriptor}`;
    document.querySelector("#birdName").innerHTML = `${title}`;
    document.querySelector("#bio").innerHTML = `${bio}`;
    document.getElementById("birdPic").src = `${birdImage}`;
    
}

main();

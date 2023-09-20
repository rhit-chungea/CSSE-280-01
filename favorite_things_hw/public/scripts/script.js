
let counter = 0;
let text = "Blue";
let color = "0000ff"
main = function() {
    
    console.log("Ready")
    document.querySelector("#decrementButton").onclick = (event) =>{
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    }
    document.querySelector("#resetButton").onclick = (event) =>{
        console.log("reset button");
        counter = 0;
        updateView();
    }
    document.querySelector("#incrementButton").onclick = (event) =>{
        console.log("increment button");
        counter = counter + 1;
        updateView();
    }
    document.querySelector("#redButton").onclick = (event) =>{
        console.log("red button");
        text = "Red";
        color = "#ff0000";
        updateView();

    }
    document.querySelector("#greenButton").onclick = (event) =>{
        console.log("green button");
        text = "Green";
        color = "#008000";
        updateView();
    }
    document.querySelector("#blueButton").onclick = (event) =>{
        console.log("green button");
        text = "Blue";
        color = "#0000ff"
        updateView();
    }
    document.querySelector("#orangeButton").onclick = (event) =>{
        console.log("orange button");
        text = "Orange";
        color = "#ffa500"
        
        updateView();
    }
}
updateView = function(){
    document.querySelector("#counterText").innerHTML = `${counter}`
    document.querySelector("#colorText").innerHTML =`${text}`
    document.querySelector('#colorText').style.backgroundColor = `${color}`;
}

main();
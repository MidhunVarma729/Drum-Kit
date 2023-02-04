buttons_list = document.querySelectorAll(".drum");
for(var i = 0; i<buttons_list.length; i++){
    buttons_list[i].addEventListener('click', function(p){
        var p = this.textContent;
        makeSound(p);
        addAnimation(p);
    })    
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
})


function makeSound(e){
    switch (e) {
        case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;
        case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
            break;
        case "s":
                var audio = new Audio('sounds/snare.mp3');
                    audio.play();
            break;
        case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
            break;
        case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
            break;
        case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
            break;
        case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
            break;
        default:
            break;
    }
}

function addAnimation(key){
    letterKey =document.querySelector('.'+key);
    letterKey.classList.add('pressed');
    setTimeout(function() {
        letterKey.classList.remove('pressed');
    }, 50)
}












































// --------------------------->>>> Notes

// Structure of an event listener

// function newEventListener( typeOfEvent, callback){
//     let eventHappened ={
//         eventType: "keypress",
//         key: "p",
//         duration: 20,
//     }

//     if(eventHappened.eventType === "typeOfEvent"){
//         callback(eventHappened);
//     }
// }









// mistake is / and \
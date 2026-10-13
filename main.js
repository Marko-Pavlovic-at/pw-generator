console.log("hello")

let pwBoxOne = document.querySelector(".pw-box1")
let pwBoxTwo = document.querySelector(".pw-box2")


const characters = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"
    ,"P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
    ,"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2",
     "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
     "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"
];

let pwOne = ""
let pwTwo = ""


function getPassword(){
   let  pw = "";
    for(let i = 0; i < 16; i++){
        char = Math.floor(Math.random() * characters.length)


        pw += characters[char];
    }
    return pw
}

function renderPassword(){
    pwOne = getPassword();
    pwTwo = getPassword();
    pwBoxOne.textContent = pwOne;
    pwBoxTwo.textContent = pwTwo;
}
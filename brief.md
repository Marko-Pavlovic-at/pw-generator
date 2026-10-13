the page has a heading and a generate pw button that button does fill two fields below it with a generated password so there will be two random passwords for each click

characters array:

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

each pw needs to be 15 characters long

design file : https://www.figma.com/design/FFuy5jQpRNijv2YIsE3yBx/Random-Password-Generator--New-version---Copy-?node-id=0-1&p=f&t=tG6GTi5xGxsgQqtg-0

# mvp:
- built from scratch DONE
- generate two random passwords when the user clicks a button DONE
- each password should be 15 characters long DONE


# strech goals:
- set pw length beforehand
- copy on click feature
- toggle symbols and numbers on or off

# Pseudocode :

## HTML and CSS
- create index.html and styles.css DONE
- create a heading a paragraph and a button DONE
- create 2 divs below that for the output DONE
- link html and css DONE
- background color for the body #111827 DONE
- color for the heading green #4ADF86 DONE
- color for the heading white DONE
- color for the button #10B981 DONE
- button border none rounded corners and padding text white font weight DONE
- heading font size DONE
- color for the password divs #273549 DONE
- the subsection with the divs is a flex row DONE
- button has padding is rounded with white text DONE
- passwort output is also slightly rounded DONE

## JS Generation Logic
- create js file and link it to html DONE
- console log something to make sure it works DONE
- add the array from the brief in js DONE
- create a function getPassword DONE
- declare a variable pw empty string DONE
- use a for loop so it get run 15 times DONE
- set a variable char to a random number using the index from character array DONE
- use the pw var add to with characters with the index of the var char DONE
- end the loop DONE
- return pw DONE
- call the function by creating new variables pwone and pwtwo DONE

## Connect with the DOM
- save the div classes inside of variables DONE
- create a new function renderPassword DONE
- in the function set the two password vars with the getpassword function DONE
- change the text content of the div classes to the pw vars
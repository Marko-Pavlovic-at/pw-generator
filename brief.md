the page has a heading and a generate pw button that button does fill two fields below it with a generated password so there will be two random passwords for each click

characters array:

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

each pw needs to be 15 characters long

design file : https://www.figma.com/design/FFuy5jQpRNijv2YIsE3yBx/Random-Password-Generator--New-version---Copy-?node-id=0-1&p=f&t=tG6GTi5xGxsgQqtg-0

# mvp:
- built from scratch
- generate two random passwords when the user clicks a button
- each password should be 15 characters long


# strech goals:
- set pw length beforehand
- copy on click feature
- toggle symbols and numbers on or off

# Pseudocode :

## HTML and CSS
- create index.html and styles.css DONE
- create a heading a paragraph and a button DONE
- create 2 divs below that for the output DONE
- link html and css
- background color for the body #111827
- color for the heading green #4ADF86
- color for the heading white 
- color for the button #10B981
- color for the password divs #273549 
- body is flex collumn
- header is a left aligned flex collumn
- the subsection with the divs is a flex row
- button has padding is rounded with white text
- passwort output is also slightly rounded
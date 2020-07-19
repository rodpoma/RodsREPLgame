const readlineSync = require ('readline-sync')

let userName = readlineSync.question("What is your name?");
console.log(`Hello ${userName}! Welcome to my game!`);
console.log(`These are the instructions: The evil Pirate Captain Rod has stolen your treasure!!`);
console.log(`You must challenge him to a duel in order to retrieve it.`);
console.log(`Use your pistol to defeat him! But remember it only has one bullet at a time!`);
console.log(`\nYou will have three options: Fire[1], Reload[2], and dodge[3]\n`);
console.log(`You must fire at Captain Rod while he is reloading to harm him.`);
console.log(`Additionally, you can be harmed while you reload.`);
console.log(`Both combatants pulling their weapon results in a stand-still. One combatant taking cover results in no damage if shot at.\n\n`);

let gameStart = true; //readlineSync automatically defaults values as booleans
gameStart = readlineSync.keyInYN("Are you ready to take back your Treasure? y or n") 
if (gameStart === true){ // if player says 'y', game will start
    console.log(`\nGood Luck ${userName}`);

        let userHP = 2;  // user and Rod start with 2 HP, game ends when one healthbar is down to 0
        let captHP = 2;
        let userBullets = 1;
        let captBullets = 1;
        let userInput = readlineSync.questionFloat("\n\nWhat do you want to do?\nFire[1], Reload[2], Take cover[3]\n\n");
        let captRodAtk = Math.ceil(Math.random()* 3) 

        
        while (userHP > 0 && captHP > 0) {
             
// user chooses to fire----------------------------------------------------------------------------------------------------------

            if ((userInput === 1 && captRodAtk === 1) || (userInput === 1 && captRodAtk === 2 && captBullets === 1)){
                console.log("Both of you have pulled up your pistol. You both choose to not fire.\n No dmg to either\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`);
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3)
                
            }else if (userInput === 1 && captRodAtk === 2 && userBullets === 1 && captBullets === 0){
                console.log("Nice Shot! You seem to have caught Captain Rod while he was reloading.\n\n");
                captHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets--;
                captBullets++;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (captHP === 0){
                    console.log("You did it! You defeated the captain and retrieved the treasaure!");
                    playAgain()
                }

            }else if (userInput === 1 && captRodAtk === 2 && userBullets === 0 && captBullets === 0){
                console.log("You pull your pistol and fire... but there are no bullets. Captain Rod reloads a bullet.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

            }else if (userInput === 1 && captRodAtk === 3 && userBullets === 1){
                console.log("You pull your pistol and fire, but Captain Rodd evades.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets--;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 1 && captRodAtk === 3 && userBullets === 0){
                console.log("You pull your pistol and fire, but there's no bullet... Captain Rodd evades.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

    // user chooses to reload----------------------------------------------------------------------------------------------------------


            }else if ((userInput === 2 && captRodAtk === 1 && userBullets === 0 && captBullets === 1) || (userInput === 2 && captRodAtk === 2 && userBullets === 0 && captBullets === 1)){
                console.log("The Capt has fired while you were reloading.\nYou take damage\n\n");
                userHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                captBullets--;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (userHP === 0){
                    console.log("You have been defeated.");
                    playAgain();
                }

            }else if ((userInput === 2 && captRodAtk === 1 && userBullets === 1 && captBullets === 1) || (userInput === 2 && captRodAtk === 2 && userBullets === 1 && captBullets === 1)){
                console.log("You go to reload... but there is already a bullet. Captain Rod hits you.\nYou take damage\n\n");
                userHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets--;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (userHP === 0){
                    console.log("You have been defeated.");
                    playAgain();
                }

            }else if ((userInput === 2 && captRodAtk === 2 && userBullets === 0 && captBullets === 0) || (userInput === 2 && captRodAtk === 1 && userBullets === 0 && captBullets === 0)){
                console.log("You both reload.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

            }else if (userInput === 2 && captRodAtk === 2 && userBullets === 1 && captBullets === 0){
                console.log("You try to reload, but already have a bullet. Captain Rod reloads.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 2 && captRodAtk === 3 && userBullets === 0){
                console.log("You reload. Captain Rod dodges.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 2 && captRodAtk === 3 && userBullets === 1){
                console.log("You go to reload, but there is already a bullet. Captain Rod dodges.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

    // user chooses to dodge----------------------------------------------------------------------------------------------------------


            }else if ((userInput === 3 && captRodAtk === 1 && captBullets === 1) || (userInput === 3 && captRodAtk === 2 && captBullets === 1)){
                console.log("You dodge Captain Rod's attack.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets--;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if ((userInput === 3 && captRodAtk === 1 && captBullets === 0) || (userInput === 3 && captRodAtk === 2 && captBullets ===0)){
                console.log("You dodge. The Captain reloads.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 3 && captRodAtk === 3) {
                console.log("You both dodge!\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if(userInput > 3){
                console.log("What? That's not an option");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            }
      
    }

    // For Replayability
    function playAgain(){
        let playAgain = readlineSync.question("\nWould you like to play again? y or n ");
        playAgain=playAgain.toLowerCase();
        if(playAgain === 'y'){
        userHP = 2;
        captHP = 2;
        userBullets = 1;
        captBullets = 1;
        let userInput = readlineSync.questionFloat("\n\nWhat do you want to do?\nFire[1], Reload[2], Take cover[3]\n\n");
        let captRodAtk = Math.ceil(Math.random()* 3) 
        while (userHP > 0 && captHP > 0) {
             
// user chooses to fire----------------------------------------------------------------------------------------------------------

            if ((userInput === 1 && captRodAtk === 1) || (userInput === 1 && captRodAtk === 2 && captBullets === 1)){
                console.log("Both of you have pulled up your pistol. You both choose to not fire.\n No dmg to either\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`);
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3)
                
            }else if (userInput === 1 && captRodAtk === 2 && userBullets === 1 && captBullets === 0){
                console.log("Nice Shot! You seem to have caught Captain Rod while he was reloading.\n\n");
                captHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets--;
                captBullets++;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (captHP === 0){
                    console.log("You did it! You defeated the captain and retrieved the treasaure!");
                    playAgain()
                }

            }else if (userInput === 1 && captRodAtk === 2 && userBullets === 0 && captBullets === 0){
                console.log("You pull your pistol and fire... but there are no bullets. Captain Rod reloads a bullet.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

            }else if (userInput === 1 && captRodAtk === 3 && userBullets === 1){
                console.log("You pull your pistol and fire, but Captain Rodd evades.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets--;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 1 && captRodAtk === 3 && userBullets === 0){
                console.log("You pull your pistol and fire, but there's no bullet... Captain Rodd evades.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

    // user chooses to reload----------------------------------------------------------------------------------------------------------


            }else if ((userInput === 2 && captRodAtk === 1 && userBullets === 0 && captBullets === 1) || (userInput === 2 && captRodAtk === 2 && userBullets === 0 && captBullets === 1)){
                console.log("The Capt has fired while you were reloading.\nYou take damage\n\n");
                userHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                captBullets--;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (userHP === 0){
                    console.log("You have been defeated.");
                    playAgain();
                }

            }else if ((userInput === 2 && captRodAtk === 1 && userBullets === 1 && captBullets === 1) || (userInput === 2 && captRodAtk === 2 && userBullets === 1 && captBullets === 1)){
                console.log("You go to reload... but there is already a bullet. Captain Rod hits you.\nYou take damage\n\n");
                userHP--;
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets--;
                if (userHP > 0 && captHP > 0){
                    userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                    captRodAtk = Math.ceil(Math.random()* 3);
                }else if (userHP === 0){
                    console.log("You have been defeated.");
                    playAgain();
                }

            }else if ((userInput === 2 && captRodAtk === 2 && userBullets === 0 && captBullets === 0) || (userInput === 2 && captRodAtk === 1 && userBullets === 0 && captBullets === 0)){
                console.log("You both reload.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            

            }else if (userInput === 2 && captRodAtk === 2 && userBullets === 1 && captBullets === 0){
                console.log("You try to reload, but already have a bullet. Captain Rod reloads.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 2 && captRodAtk === 3 && userBullets === 0){
                console.log("You reload. Captain Rod dodges.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 2 && captRodAtk === 3 && userBullets === 1){
                console.log("You go to reload, but there is already a bullet. Captain Rod dodges.\n\n")
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

    // user chooses to dodge----------------------------------------------------------------------------------------------------------


            }else if ((userInput === 3 && captRodAtk === 1 && captBullets === 1) || (userInput === 3 && captRodAtk === 2 && captBullets === 1)){
                console.log("You dodge Captain Rod's attack.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets--;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if ((userInput === 3 && captRodAtk === 1 && captBullets === 0) || (userInput === 3 && captRodAtk === 2 && captBullets ===0)){
                console.log("You dodge. The Captain reloads.\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                captBullets++;
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if (userInput === 3 && captRodAtk === 3) {
                console.log("You both dodge!\n\n");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
                

            }else if(userInput > 3){
                console.log("What? That's not an option");
                console.log(`Your HP: ${userHP} | Capt. HP: ${captHP}`)
                userInput = readlineSync.questionFloat("What do you want to do next?\nFire[1], Reload[2], Take cover[3]\n\n");
                captRodAtk = Math.ceil(Math.random()* 3);
            }
      
    }
        


        }else{
            console.log("Very Well! Have a nice day")
        }
    }
//------------------------------------------------------------------------------------------------------------------------
} else {
   console.log("Very well. Come back when you're ready.");
}

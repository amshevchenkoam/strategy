"use strict";

let day = 0;
let hp = 10;
let money = 10;
let armor = 0;


function functionHeal() {


    if (money < 10) {
        alert("Not enough money!");
    }
    if (money > 9) {
        money = money - 10;
        day = day + 1;
        hp = hp + getRandomInt(1, 7);
    }
    document.getElementById("day_state").innerHTML = day;
    document.getElementById("money_state").innerHTML = money;
    document.getElementById("hp_state").innerHTML = hp;


    if (day > 99) {
        document.getElementById("game").style.display = "none";
        document.getElementById("win").style.display = "block";
 
    }
    if (hp < 1) {
        document.getElementById("game").style.display = "none";
        document.getElementById("over").style.display = "block";
        
    }
    console.log(day);
    console.log(hp);
    console.log(money);
    console.log(armor);
    console.log('------');
}

function functionFight() {
    day = day + 1;

    if (armor < 1) {
        hp = hp - getRandomInt(1, 3);
    }
    if (armor > 0) {
   
        hp = hp - 1;
    }
    money = money + getRandomInt(1, 10);
    document.getElementById("day_state").innerHTML = day;
    document.getElementById("money_state").innerHTML = money;
    document.getElementById("hp_state").innerHTML = hp;

 

    if (day > 99) {
        document.getElementById("game").style.display = "none";
        document.getElementById("win").style.display = "block";
 
    }
    if (hp < 1) {
        document.getElementById("game").style.display = "none";
        document.getElementById("over").style.display = "block";
        
    }
    console.log(day);
    console.log(hp);
    console.log(money);
    console.log(armor);
    console.log('------');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reload() {
    location.reload();
}

function functionUpdate() {



    if (armor > 0 ) {
        alert("Armor already taken!");
    }

    if (money > 39 && armor < 1 ) {
        money = money - 40;
        armor = armor + 1;
        document.getElementById("day_state").innerHTML = day;
        document.getElementById("money_state").innerHTML = money;
        document.getElementById("hp_state").innerHTML = hp;
        const knightImage = document.querySelector("#knight img");
        knightImage.src = "img/armor.svg";
        document.getElementById("armor_state").innerHTML = 'Taken';
        document.getElementById("update_button").innerHTML = 'Sold out';
    }

    if (money < 40 && armor < 1 ) {
        alert("Not enough money!");
    }

    console.log(day);
    console.log(hp);
    console.log(money);
    console.log(armor);
    console.log('------');
}



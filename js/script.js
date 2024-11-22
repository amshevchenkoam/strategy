"use strict";

let day = 0;
let hp = 10;
let money = 10;
let over = document.getElementById("over");
let win
let game

function functionHeal() {


    if (money < 10) {
        alert("Not enough money!");
    }
    if (money > 9) {
        money = money - 10;
        day = day + 1;
        hp = hp + getRandomInt(1, 5);
    }
    document.getElementById("day_state").innerHTML = day;
    document.getElementById("money_state").innerHTML = money;
    document.getElementById("hp_state").innerHTML = hp;
  

    if (day > 99) {
        document.getElementById("win").style.display = "block";
        document.getElementById("game").style.display = "none";
    }
    if (hp < 1) {
        document.getElementById("over").style.display = "block";
        document.getElementById("game").style.display = "none";
    }
}

function functionFight() {
    day = day + 1;
    hp = hp - getRandomInt(1, 4);
    money = money + getRandomInt(1, 7);
    document.getElementById("day_state").innerHTML = day;
    document.getElementById("money_state").innerHTML = money;
    document.getElementById("hp_state").innerHTML = hp;


    if (day > 99) {
        document.getElementById("win").style.display = "block";
        document.getElementById("game").style.display = "none";
    }
    if (hp < 1) {
        document.getElementById("over").style.display = "block";
        document.getElementById("game").style.display = "none";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Cal{
    constructor(first,second){
        this.first=first;
        this.second=second;
    }
    plus(){
        return this.first+this.second;
    }
    minus(){
        return this.first-this.second;
    }
    power(){
        return this.first*this.second;
    }
    divide(){
        return this.first/this.second
    }
}   //사칙연산 기능 클래스

var firstValue=document.getElementById('firstValue').value;
var secondValue=document.getElementById('secondValue');
var conc= new Cal(firstValue, secondValue);
console.log(firstValue)
// document.getElementsByClassName('.plus').addEventListener('click',document.getElementsByClassName('.output').insertAdjacentHTML('beforeend',conc.plus()));
// document.getElementsByClassName('.minus').addEventListener('click',document.getElementsByClassName('.output').insertAdjacentHTML('beforeend',conc.plus()));
// document.getElementsByClassName('.power').addEventListener('click',document.getElementsByClassName('.output').insertAdjacentHTML('beforeend',conc.plus()));
// document.getElementsByClassName('.divide').addEventListener('click',document.getElementsByClassName('.output').insertAdjacentHTML('beforeend',conc.plus()));



let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let sleep = document.querySelector(".sleep");
let continueSleep = document.querySelector(".continueSleeping");
let getOut = document.querySelector(".getReady");
let extraSleep = document.querySelector(".option-one-screen");
let tenExtraMin = document.querySelector(".option-one-end");
let sleptIn = document.querySelector(".option-two-screen");
let atSchool = document.querySelector(".option-two-end");
let moreSleep = document.querySelector(".sleepMore");


sleep.onclick=function(){
  title.style.display="none"; 
  storyOpening.style.display="none"; 
  extraSleep.style.display="block";
  sleep.style.display="none";
  getOut.style.display="none";
  tenExtraMin.style.display="none";
  moreSleep.style.display="block";
};
  
moreSleep.onclick=function(){
  extraSleep.style.display="none";
  moreSleep.style.display="none";
  sleptIn.style.display="block";
}

getOut.onclick=function(){
  atSchool.style.display="block";
  getOut.style.display="none";
  sleep.style.display="none";
  title.style.display="none";
  storyOpening.style.display="none";
}
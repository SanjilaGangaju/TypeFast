let paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a useful skill for everyone.",
  "Practice makes perfect when learning to type.",
  "JavaScript powers many websites you use daily.",
  "Coding is like solving puzzles with logic.",
  "Stay focused and keep your hands on the keyboard.",
  "Every great developer started with small projects.",
  "Short sentences are great for typing practice.",
  "Speed and accuracy both matter in typing tests.",
  "You can improve your typing speed with daily practice.",
];
let testPara = document.querySelector(".para");
let randomPara = Math.floor(Math.random() * paragraphs.length);
testPara.innerText = paragraphs[randomPara];
let userPara=document.querySelector("#user-text");
let timerStarted=false;//flag to check if typing has already begun
userPara.addEventListener("keydown",()=>{
  
  if (!timerStarted){
    timerStarted=true;
    let startTime= Date.now();
    const timerInterval=setInterval(()=>{
      const elapsedTime = (Date.now())-startTime;
    console.log('Elapsed Time: '+ elapsedTime + 'ms');
    },2000);
  console.log("timerstarted");
  
}
}
);
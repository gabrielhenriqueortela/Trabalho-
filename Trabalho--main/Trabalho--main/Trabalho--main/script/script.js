let entrevista_1 = {
  entrevistador: "Gabriel Ortela",
  entrevistado: "João Victor",
    questoes: {
      p1: "O que você mais tirou proveito do colégio?",
      r1: "Fazer amizades e aprender a conviver na sociedade.",

      p2: "O que você pretende fazer depois do colégio?",
      r2: "Trabalhar e fazer uma faculdade de agronomia.",

      p3: "Qual era sua profissão do sonho quando era criança?",
      r3: "Astronauta.",

      p4: "Hoje em dia qual e o seu sonho de profissão?",
      r4: "Ser agricultor.",

      p5: "Se esse sonho não se realizar, qual a sua segunda opção?",
      r5: "Ser caminhoneiro.",

      p6: "Como você se interesou por sua profissão de sonho?",
      r6: "Pela minha familia.",

      p7: "Você pretende casar?",
      r7: "Sim.",

      p8: "Você pretende ter filhos,se sim quantos?",
      r8: "Sim,pretendo ter uns 2 filhos.",

      p9: "O que você gosta de fazer nas horas vagas?",
      r9: "Jogar video game.",
      
      p10: "Você acha que vai sentir falta da sua época de criança,se sim porque?",
      r10:"Sim, pois é uma época inesquecivel.",

    }
}
let entrevista_2 = {
  entrevistador: "João Victor",
  entrevistado: "Gabriel Ortela",
    questoes: {
      p1: "O que você mais tirou proveito do colégio?",
      r1: "Amizades,conhecimento.", 

      p2: "O que você pretende fazer depois do colégio?",
  
      p3: "Qual era sua profissão do sonho quando era criança?",
      r3: "Ser joogador de futebol.",

      p4: "Hoje em dia qual e o seu sonho de profissão?",
      r4: "Ser um engenheiro civil, ter meu propio negocio.",

      p5: "Se esse sonho não se realizar, qual a sua segunda opção?",
      r5: "Ser arquiteto ou engenheiro de maquinas.",

      p6: "Como você se interesou por sua profissão de sonho?",
      r6: "Pelo meu pais.",

      p7: "Você pretende casar?",
      r7: "Sim.",

      p8: "Você pretende ter filhos,se sim quantos?",
      r8: "Sim,no maximo uns 3 filhos.",

      p9: "O que você gosta de fazer nas horas vagas?",
      r9: "Dormir e jogar fifa.",

      p10: "Você acha que vai sentir falta da sua época de criança,se sim porque?",
      r10:"Sim, pois e uma época que nunca volta.",

    }
}






const parentContainer = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const logoOverlay = document.querySelector('.logoOverlay');
const logoSubtitle = document.querySelector('.logoSubtitle');
const musicOption = document.querySelector('#music');
const logo = document.querySelector('.logo');
let music = new Audio(`http://k003.kiwi6.com/hotlink/rm6zji20wb/Avengers_test.mp3`);
let images;
let currentIndex = 0;
let MAX_LOOPS = 15;   //15 
let timer = null
let timeOut = 1000;
let startTime;

const imgArray = ["https://i.pinimg.com/originals/f7/5f/e9/f75fe9d6f289c1f3b5382f832ff35477.jpg",
                 "https://ae01.alicdn.com/kf/HTB1Ws_fLXXXXXaPapXXq6xXFXXXz/Marvel-Comics-Wallpaper-3D-wallpaper-for-walls-Mural-Kids-Bedroom-Room-Decor-TV-background-wall-covering.jpg",
                 "https://s.abcnews.com/images/Entertainment/170615_gostream_marvel60_16x9_992.jpg",
                  "https://fsmedia.imgix.net/f0/20/a6/d6/e02b/49e4/9829/75241e549d7a.jpeg?rect=0%2C176%2C865%2C432&auto=format%2Ccompress&w=",
                  "https://kozepsuli.hu/wp-content/uploads/2014/12/Marvel.jpg",
                  "http://sfwallpaper.com/images/marvel-comics-desktop-wallpaper-23.jpg"
                 ];
loadBackgroundImages();

function start() {
  // target time: 10s
  startTime = new Date();
  startAnimation();
  if(musicOption.checked) music.play();
}


function loadBackgroundImages() {
  let newImage;
  for(let j = 0; j < MAX_LOOPS; j++){
    for(let i = 0; i < imgArray.length; i++){
      newImage = document.createElement('div');
      newImage.classList.add('imageContainer');
      newImage.style.backgroundImage = `url(${imgArray[i]})`;
      parentContainer.appendChild(newImage);
    }  
  }
  images = document.querySelectorAll('.imageContainer');
  console.log(`LOADED ${images.length} images`)
}


function startAnimation() {
  overlay.classList.add('fade');
  setTimeout(transitionImage, timeOut);
}

function fadeInEndingLogo() {
    logo.classList.add('scaleLogo');
    logoOverlay.classList.add('fadeInLogo');
    
  setTimeout(() => {
    renderSubtitle();
  },3000);
}

function renderSubtitle() {
    logoSubtitle.classList.add('borderAndHeight');  
}



function transitionImage() {
  let currentImage = images[currentIndex];
  const opacityFadeClass = currentIndex < 10 ? 'opacityFadeInit' : 'opacityFade';
  const completedPercentage = currentIndex / images.length;
  
  if(completedPercentage > 0.5) {          
    // for last stretch, disable top transition for smoother page flips
    timeoutVal = 115;
    currentImage.style.transition = `none`;
  } else if(completedPercentage > 0.3) {
    timeoutVal = 120;
    currentImage.style.transition = `none`;
    fadeInEndingLogo();
  } else if(completedPercentage > 0.2) {
    timeoutVal = 250;
  } else if(currentIndex > 0 && currentIndex % 2 > 0) {    // cadence of two fast slides at a time in the beginning
    timeoutVal = 400;
  } else {
    timeoutVal = 350;
  }

  currentImage.classList.add(opacityFadeClass);  
  currentImage.classList.add('blur');
  currentImage.style.top = `10px`;
  currentIndex += 1;
  if(currentIndex < images.length) {
    setTimeout(transitionImage, timeoutVal);
  } else {
    console.log(`DONE`);
    console.log(`Elapsed time ${new Date() - startTime}`);
  }
}

  

 

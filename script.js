const ring = document.getElementById("ring");
const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const letter = document.getElementById("letter");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const ending = document.getElementById("ending");

/* 🌌 Stars */
const starsContainer = document.getElementById("stars");
for(let i=0;i<120;i++){
    const star=document.createElement("div");
    star.classList.add("star");
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.animationDuration=(1+Math.random()*2)+"s";
    starsContainer.appendChild(star);
}

/* Ring click */
ring.addEventListener("click",()=>{
    music.play();
    intro.classList.add("hidden");
    proposal.classList.remove("hidden");
});

/* No button runs */
noBtn.addEventListener("mouseover",()=>{
    noBtn.style.position="absolute";
    noBtn.style.top=Math.random()*70+"%";
    noBtn.style.left=Math.random()*70+"%";
});

/* Yes click */
yesBtn.addEventListener("click",()=>{
    proposal.classList.add("hidden");
    overlay.style.opacity="0.4";   // cinematic dim
    letter.classList.remove("hidden");
    typeWriter();
});

/* 3-minute letter pacing */
const message = `From the moment you came into my life,
everything changed.

You became my peace.
My calm.
My happiness.

With you,
love feels effortless.
Time feels beautiful.
Life feels complete.

I don’t just want today.
I want every tomorrow.

If forever exists,
I want it with you. ❤️`;

let i=0;

function typeWriter(){
    if(i < message.length){
        text.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        ending.style.display="block";
    }
}

/* 🌹 Petals */
function createPetal(){
    const petal=document.createElement("div");
    petal.classList.add("petal");
    petal.style.left=Math.random()*100+"vw";

    const duration=8+Math.random()*6;
    petal.style.animationDuration=duration+"s";

    if(Math.random()>0.5){
        petal.style.filter="blur(4px)";
        petal.style.opacity="0.5";
    }

    document.body.appendChild(petal);
    setTimeout(()=>petal.remove(),duration*1000);
}

setInterval(createPetal,600);

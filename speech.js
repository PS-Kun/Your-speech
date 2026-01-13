 const photo = document.querySelector(".photo");
 const textarea = document.querySelector("textarea");

let speech = new SpeechSynthesisUtterance();

let voices =[];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=> (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", ()=>{
    let write = document.querySelector("textarea").value.trim();
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);


    if(write){

       
        photo.style.display = "block"; // make it visible

    gsap.fromTo(".photo",{
        scale: 0,
        
    },
    {
        scale: 1,
        duration: 0.5,
        
    }
)};
}); 

textarea.addEventListener("input", () => {
    if (textarea.value.trim() === "") {
        // Animate out, then hide
        gsap.to(".photo", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                photo.style.display = "none";
                 gsap.set(photo, { scale: 1, opacity: 1 });

            }
        });
    }
});





console.log("hello podcast...");

// localStorage.setItem("test", 1234);
// localStorage.clear();
console.log("localStorage: ", localStorage);

// const audio = new Audio("./assets/hustle-harder-hustle-smarter.mp3");
const audio = new Audio("./assets/ADV1416247436.mp3");

const play = document.querySelector("#play");

const REWIND_OFFSET_SECS = 5; // rewind current time by this offset everytime paused

const playAudio = () => {
    const { currentTime } = localStorage;
    if (currentTime) {
        const time = Math.floor(Number(currentTime));
        console.log("load currentTime: ", time);

        audio.fastSeek(time - REWIND_OFFSET_SECS);

        setTimeout(() => {
            audio.play();
        }, 1000);
    } else {
        console.log("No data found, start from the beginning...");
        audio.play();
    }
};

const pauseAudio = () => {
    audio.pause();

    const time = Math.max(0, audio.currentTime - REWIND_OFFSET_SECS);
    console.log("save currentTime: ", time);

    localStorage.setItem("currentTime", time);
};

play.addEventListener("click", () => {
    if (audio.paused) {
        playAudio();
        play.textContent = "Pause";
    } else {
        pauseAudio();
        play.textContent = "Play";
    }
});

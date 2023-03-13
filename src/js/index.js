console.log("hello podcast...");

// localStorage.setItem("test", 1234);
// localStorage.clear();
console.log("localStorage: ", localStorage);

// const audio = document.querySelector("#audio-player");
// console.log("audio: ", audio);
// audio.seek(100);

const audio = new Audio("./assets/hustle-harder-hustle-smarter.mp3");
console.log("seekable: ", audio.seekable);
// audio.play();

const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");

const REWIND_OFFSET_SECS = 5; // rewind current time by this offset everytime paused

play.addEventListener("click", () => {
    console.log("play");
    const { currentTime } = localStorage;

    if (currentTime) {
        console.log("we found current time...", currentTime);
        audio.fastSeek(currentTime);
        audio.play();
    } else {
        console.log("No data found, start from the beginning...");
        audio.play();
    }
});
pause.addEventListener("click", () => {
    console.log("pause");
    // audio.fastSeek(300);
    audio.pause();
    localStorage.setItem(
        "currentTime",
        Math.max(0, audio.currentTime - REWIND_OFFSET_SECS)
    );
});
stop.addEventListener("click", () => {
    console.log("stop");
    audio.fastSeek(0);
    // audio.pause();
});

// setInterval(() => {
//     console.log(audio.currentTime);
// }, 1000);

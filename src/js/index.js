console.log("hello podcast...");

// localStorage.setItem("test", 1234);
// localStorage.clear();
console.log("localStorage: ", localStorage);

const audio = new Audio("./assets/hustle-harder-hustle-smarter.mp3");
console.log("seekable: ", audio.seekable);
// audio.play();

const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");

const REWIND_OFFSET_SECS = 10; // rewind current time by this offset everytime paused

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

    play.classList = ["disabled"];
    play.disabled = true;
});

pause.addEventListener("click", () => {
    if (audio.paused) return;
    console.log("pause");
    audio.pause();
    const time = Math.max(0, audio.currentTime - REWIND_OFFSET_SECS);
    // console.log("currentTime: ", audio.currentTime);
    // console.log("time set: ", time);
    localStorage.setItem("currentTime", time);
    play.classList = [];
    play.disabled = false;
});

stop.addEventListener("click", () => {
    console.log("stop");
    audio.fastSeek(1500);
    // audio.pause();
});

// setInterval(() => {
//     // console.log(audio.currentTime);
//     console.log(audio.paused);
// }, 1000);

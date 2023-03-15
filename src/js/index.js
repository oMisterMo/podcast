console.log("hello podcast...");

// localStorage.setItem("test", 1234);
// localStorage.clear();
console.log("localStorage: ", localStorage);

const audio = new Audio("./assets/hustle-harder-hustle-smarter.mp3");
console.log(audio);

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const stop = document.querySelector("#stop");
stop.style.display = "none";

const REWIND_OFFSET_SECS = 20; // rewind current time by this offset everytime paused

play.addEventListener("click", () => {
    // console.log("play");
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

    play.classList = ["disabled"];
    play.disabled = true;
});

pause.addEventListener("click", () => {
    if (audio.paused) return;
    // console.log("pause");
    audio.pause();

    const time = Math.max(0, audio.currentTime - REWIND_OFFSET_SECS);
    console.log("save currentTime: ", time);

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

import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeShop,
    cardFirePlace,
    buttonDarkMode,
    volCardForest,
    volCardRain,
    volCardCoffeShop,
    volCardFirePlace,
} from "./elements.js";

const Buttons = ({ timer, events, sounds }) => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let newMinutes;

    buttonPlay.addEventListener("click", () => {
        timer.countDown();
    });

    buttonStop.addEventListener("click", () => {
        timer.resetTimer();
    });

    buttonIncrease.addEventListener("click", () => {
        timer.updateDisplay((minutes += 5), seconds);
        newMinutes = minutes;
        timer.updateMinutes(newMinutes);
    });

    buttonDecrease.addEventListener("click", () => {
        if (minutes > 5) {
            timer.updateDisplay((minutes -= 5), seconds);
            newMinutes = minutes;
            timer.updateMinutes(newMinutes);
        }
    });

    let newValue = 0.5;

    cardForest.addEventListener("click", () => {
        events.Forest();
        sounds.Forest.play();
        volCardForest.value = newValue;
        sounds.Forest.volume = volCardForest.value;

        sounds.Rain.pause();
        sounds.CoffeShop.pause();
        sounds.FirePlace.pause();

        volCardForest.addEventListener("input", () => {
            newValue = volCardForest.value;
            sounds.Forest.volume = volCardForest.value;
        });

        volCardRain.value = 0;
        sounds.Rain.volume = 0;

        volCardCoffeShop.value = 0;
        sounds.CoffeShop.volume = 0;

        volCardFirePlace.value = 0;
        sounds.FirePlace.volume = 0;
    });

    cardRain.addEventListener("click", () => {
        events.Rain();
        sounds.Rain.play();

        volCardRain.value = newValue;
        sounds.Rain.volume = volCardRain.value;
        sounds.Forest.pause();
        sounds.CoffeShop.pause();
        sounds.FirePlace.pause();

        volCardRain.addEventListener("input", () => {
            newValue = volCardRain.value;
        });

        volCardForest.value = 0;
        sounds.Forest.volume = 0;

        volCardCoffeShop.value = 0;
        sounds.CoffeShop.volume = 0;

        volCardFirePlace.value = 0;
        sounds.FirePlace.volume = 0;
    });

    cardCoffeShop.addEventListener("click", () => {
        events.CoffeShop();
        sounds.CoffeShop.play();

        volCardCoffeShop.value = newValue;
        sounds.CoffeShop.volume = volCardCoffeShop.value;

        sounds.Forest.pause();
        sounds.Rain.pause();
        sounds.FirePlace.pause();

        volCardCoffeShop.addEventListener("input", () => {
            newValue = volCardCoffeShop.value;
        });

        volCardRain.value = 0;
        sounds.Rain.volume = 0;

        volCardForest.value = 0;
        sounds.Forest.volume = 0;

        volCardFirePlace.value = 0;
        sounds.FirePlace.volume = 0;
    });

    cardFirePlace.addEventListener("click", () => {
        events.FirePlace();
        sounds.FirePlace.play();

        volCardFirePlace.value = newValue;
        sounds.FirePlace.volume = volCardFirePlace.value;

        sounds.Forest.pause();
        sounds.Rain.pause();
        sounds.CoffeShop.pause();

        volCardFirePlace.addEventListener(
            "input",

            () => {
                newValue = volCardFirePlace.value;
            }
        );

        volCardForest.value = 0;
        sounds.Forest.volume = 0;

        volCardRain.value = 0;
        sounds.Rain.volume = 0;

        volCardCoffeShop.value = 0;
        sounds.CoffeShop.volume = 0;
    });

    buttonDarkMode.addEventListener("click", () => {
        events.DarkMode();
    });
};

export default Buttons;

import Timer from "./timer.js";
import cardsEvents from "./cardsEvents.js";
import Sounds from "./sounds.js";
import Buttons from "./buttons.js";
import {
    minutesDisplay,
    secondsDisplay,
    cardForest,
    cardRain,
    cardCoffeShop,
    cardFirePlace,
} from "./elements.js";

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

const timer = Timer({
    minutes,
    minutesDisplay,
    seconds,
    secondsDisplay,
});

const events = cardsEvents({
    cardForest,
    cardRain,
    cardCoffeShop,
    cardFirePlace,
});

const sounds = Sounds();

Buttons({ timer, events, sounds });

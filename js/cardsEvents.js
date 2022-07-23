import {
    main,
    volCardCoffeShop,
    volCardFirePlace,
    volCardForest,
    volCardRain,
} from "./elements.js";

const cardsEvents = ({
    cardForest,
    cardRain,
    cardCoffeShop,
    cardFirePlace,
}) => {
    const DarkMode = () => {
        main.classList.toggle("darkMode");

        let isDarkPresent = main.classList.contains("darkMode");
        console.log(isDarkPresent);

        if (isDarkPresent === true) {
            cardForest.classList.add("show");
            cardRain.classList.add("show");
            cardCoffeShop.classList.add("show");
            cardFirePlace.classList.add("show");

            volCardForest.classList.remove("inputClickedLightMode");
            volCardRain.classList.remove("inputClickedLightMode");
            volCardCoffeShop.classList.remove("inputClickedLightMode");
            volCardFirePlace.classList.remove("inputClickedLightMode");
        } else {
            cardForest.classList.remove("show");
            cardRain.classList.remove("show");
            cardCoffeShop.classList.remove("show");
            cardFirePlace.classList.remove("show");

            cardForest.classList.remove("clickedDarkMode");
            cardRain.classList.remove("clickedDarkMode");
            cardCoffeShop.classList.remove("clickedDarkMode");
            cardFirePlace.classList.remove("clickedDarkMode");

            volCardForest.classList.remove("inputClickedLightMode");
            volCardRain.classList.remove("inputClickedLightMode");
            volCardCoffeShop.classList.remove("inputClickedLightMode");
            volCardFirePlace.classList.remove("inputClickedLightMode");
        }

        volCardForest.classList.toggle("inputDarkMode");
        volCardRain.classList.toggle("inputDarkMode");
        volCardCoffeShop.classList.toggle("inputDarkMode");
        volCardFirePlace.classList.toggle("inputDarkMode");
    };

    const Forest = () => {
        let isDarkPresent = main.classList.contains("darkMode");

        if (isDarkPresent === true) {
            console.log(isDarkPresent);

            cardForest.classList.add("clickedDarkMode");
            cardRain.classList.remove("clickedDarkMode");
            cardCoffeShop.classList.remove("clickedDarkMode");
            cardFirePlace.classList.remove("clickedDarkMode");
        } else {
            console.log(isDarkPresent);

            cardForest.classList.add("show");
            cardRain.classList.remove("show");
            cardCoffeShop.classList.remove("show");
            cardFirePlace.classList.remove("show");

            volCardForest.classList.add("inputClickedLightMode");
            volCardRain.classList.remove("inputClickedLightMode");
            volCardCoffeShop.classList.remove("inputClickedLightMode");
            volCardFirePlace.classList.remove("inputClickedLightMode");
        }
    };

    const Rain = () => {
        let isDarkPresent = main.classList.contains("darkMode");

        if (isDarkPresent === true) {
            console.log(isDarkPresent);

            cardRain.classList.add("clickedDarkMode");
            cardForest.classList.remove("clickedDarkMode");
            cardCoffeShop.classList.remove("clickedDarkMode");
            cardFirePlace.classList.remove("clickedDarkMode");
        } else {
            console.log(isDarkPresent);

            cardRain.classList.add("show");
            cardForest.classList.remove("show");
            cardCoffeShop.classList.remove("show");
            cardFirePlace.classList.remove("show");

            volCardRain.classList.add("inputClickedLightMode");
            volCardForest.classList.remove("inputClickedLightMode");
            volCardCoffeShop.classList.remove("inputClickedLightMode");
            volCardFirePlace.classList.remove("inputClickedLightMode");
        }
    };

    const CoffeShop = () => {
        let isDarkPresent = main.classList.contains("darkMode");

        if (isDarkPresent === true) {
            console.log(isDarkPresent);

            cardCoffeShop.classList.add("clickedDarkMode");
            cardForest.classList.remove("clickedDarkMode");
            cardRain.classList.remove("clickedDarkMode");
            cardFirePlace.classList.remove("clickedDarkMode");
        } else {
            console.log(isDarkPresent);

            cardCoffeShop.classList.add("show");
            cardForest.classList.remove("show");
            cardRain.classList.remove("show");
            cardFirePlace.classList.remove("show");

            volCardCoffeShop.classList.add("inputClickedLightMode");
            volCardRain.classList.remove("inputClickedLightMode");
            volCardForest.classList.remove("inputClickedLightMode");
            volCardFirePlace.classList.remove("inputClickedLightMode");
        }
    };

    const FirePlace = () => {
        let isDarkPresent = main.classList.contains("darkMode");

        if (isDarkPresent === true) {
            console.log(isDarkPresent);

            cardFirePlace.classList.add("clickedDarkMode");
            cardCoffeShop.classList.remove("clickedDarkMode");
            cardForest.classList.remove("clickedDarkMode");
            cardRain.classList.remove("clickedDarkMode");
        } else {
            console.log(isDarkPresent);

            cardFirePlace.classList.add("show");
            cardCoffeShop.classList.remove("show");
            cardForest.classList.remove("show");
            cardRain.classList.remove("show");

            volCardFirePlace.classList.add("inputClickedLightMode");
            volCardRain.classList.remove("inputClickedLightMode");
            volCardForest.classList.remove("inputClickedLightMode");
            volCardCoffeShop.classList.remove("inputClickedLightMode");
        }
    };

    return { DarkMode, Forest, Rain, CoffeShop, FirePlace };
};

export default cardsEvents;

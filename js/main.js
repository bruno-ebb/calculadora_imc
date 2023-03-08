
import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import * as Utils from "./utils.js";

// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
form.onsubmit = (event) => {
    event.preventDefault();
    
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const weightOrHeightIsNotANumber = Utils.notANumber(weight) || Utils.notANumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close();

    const result = Utils.calculateIMC(weight, height);
    displayResultMessage(result);
}

const displayResultMessage = (result) => {
    const message = `Seu IMC é de ${result}`;
    
    Modal.message.innerText = message;
    
    Modal.open();
}


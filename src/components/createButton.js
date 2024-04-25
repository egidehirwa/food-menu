/**
 * Create a button element.
 * 
 * @param {object} button - The button object data.
 * @returns {HTMLElement} - The button element.
 */

import filterHandler from "../handlers/filterHandler.js";

const createButton = (btn) => {
    const button = document.createElement('button')
    button.type = 'button';
    button.id = btn.id;
    button.innerText = btn.text;
    button.className = 'filter-btn';

    button.addEventListener('click', () => {
       filterHandler(button.id)
    })

    return button;
}

export default createButton;
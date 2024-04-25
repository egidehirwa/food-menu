/**
 * @jest-environment jsdom
 */

import createButton from "./createButton.js";

describe ('Create the button element', () => {
    const button = createButton({
        id: 'all',
        text: 'All',
    })

    test ('id -> all', () => {
        expect(button.id).toEqual('all');
    })

    test('className -> filter-btn', () => {
        expect(button.className).toEqual('filter-btn');
    })

    test('type -> buttom', () => {
        expect(button.type).toEqual('button');
    })
})
let baseURL = 'http://deckofcardsapi.com/api/deck';

//1
async function drawCard() {
    let data = await $.getJSON(`${baseURL}/new/draw`);
    let card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
}

drawCard();

//2
async function drawTwo() {
    let data = await $.getJSON(`${baseURL}/new/draw`);
    let deck_id = data.deck_id;
    let card1 = data.cards[0];
    let card2_data = await $.getJSON(`${baseURL}/${data.deck_id}/draw/`);
    let card2 = card2_data.cards[0];
    [card1, card2].forEach(function (card) {
        console.log(`${card.value} of ${card.suit}`);
    });
}

drawTwo();

//3
let $draw = $('#draw');
let deck_id = null;

async function createNewDeck() {
    let deck = await $.getJSON(`${baseURL}/new/draw/`);
    deck_id = deck.deck_id;
}

async function drawCards() {
    let data = await $.getJSON(`${baseURL}/${deck_id}/draw/`);
    let card = data.cards[0];
    let card_img = card.image;
    $('body').append(`<img src="${card_img}">`);
}

window.onload = createNewDeck;
$draw.on('click', drawCards);
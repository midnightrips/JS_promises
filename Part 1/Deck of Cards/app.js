let baseURL = 'http://deckofcardsapi.com/api/deck';
let shuffleDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let drawCard = 'https://deckofcardsapi.com/api/deck'; //<<deck_id>>/draw/?count=2';

// axios
//     .get(`${shuffleDeck}`)
//     .then(p => {
//         return axios.get(`${drawCard}/${p.data.deck_id}/draw/?count=1`)
//     })
//     .then(p => {
//         console.log(p.data.cards.value, p.data.cards.suit);
//     });

$.getJSON(`${baseURL}/new/draw/`)
    .then(data => {
        let { suit, value } = data.cards[0];
        console.log(`${value} of ${suit}`);
    });

$.getJSON(`${baseURL}/new/draw/`)
    .then(data => {
        card1 = data.cards[0];
        return $.getJSON(`${drawCard}/${data.deck_id}/draw/`);
    })
    .then(data => {
        let card2 = data.cards[0];
        [card1, card2].forEach(function (card) {
            console.log(`${card.value} of ${card.suit}`);
        });
    });


//3
let deck_id = null;
let $draw = $('#draw');

function createNewDeck() {
    $.getJSON(`${baseURL}/new/draw/`)
        .then(data => {
            deck_id = data.deck_id;
        });
}

function drawNewCard() {
    $.getJSON(`${drawCard}/${deck_id}/draw/`)
        .then(data => {
            let card = data.cards[0];
            let image = card.image;
            $('body').append(`<img src="${image}">`);

            console.log(card);

            if (data.remaining == 0) {
                $('body').append('<p>No more cards left!</p>');
            }
        });
}

window.onload = createNewDeck;
$draw.on('click', drawNewCard);

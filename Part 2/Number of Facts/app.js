let favNum = 312;
let baseURL = "http://numbersapi.com";

//1
async function getFavNum(num) {
    let fact = await $.getJSON(`${baseURL}/${num}?json`);
    console.log(fact.text);
}

getFavNum(favNum);

//2
async function getSomeNums() {
    let facts = await $.getJSON(`${baseURL}/1..3?json`);
    console.log(facts);
}

getSomeNums();

//3
async function getFourFacts(num) {
    let p1 = $.getJSON(`${baseURL}/${num}?json`);
    let p2 = $.getJSON(`${baseURL}/${num}?json`);
    let p3 = $.getJSON(`${baseURL}/${num}?json`);
    let p4 = $.getJSON(`${baseURL}/${num}?json`);

    let fact1 = await p1;
    let fact2 = await p2;
    let fact3 = await p3;
    let fact4 = await p4;

    $('body').append(`<p>${fact1.text}`);
    $('body').append(`<p>${fact2.text}`);
    $('body').append(`<p>${fact3.text}`);
    $('body').append(`<p>${fact4.text}`);
}

getFourFacts(42);


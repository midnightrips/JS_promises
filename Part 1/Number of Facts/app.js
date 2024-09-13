let favNum = 312;
let baseURL = "http://numbersapi.com";

axios
    .get(`${baseURL}/${favNum}?json`)
    .then(promise => {
        console.log(promise.data.text);
    });

axios
    .get(`${baseURL}/1..3?json`)
    .then(promise => {
        console.log(promise.data);
    });

// 312 is apparently uninteresting so we're going with 42 :/

axios
    .get(`${baseURL}/42?json`)
    .then(p1 => {
        $('body').append(`<p>${p1.data.text}`);
        return axios.get(`${baseURL}/42?json`);
    })
    .then(p2 => {
        $('body').append(`<p>${p2.data.text}`);
        return axios.get(`${baseURL}/42?json`);
    })
    .then(p3 => {
        $('body').append(`<p>${p3.data.text}`);
        return axios.get(`${baseURL}/42?json`);
    })
    .then(p4 => {
        $('body').append(`<p>${p4.data.text}`);
    });
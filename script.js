'use strict';

function getDogBreedImage() {
    let dogBreed = $('#dogs').val();
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            $('.results').append(`<p class="error">Something went wrong. Cannot retrieve that breed.</p>`);   
            throw new Error(response.statusText)
        }   
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(error));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let dog =responseJson.message;
    $('.results').append(`<h2>Here is the image:</h2>
    <div class="results-img"><img src="${dog}"></div>`);
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        getDogBreedImage();
    });
}

$(function() {
    console.log('Ready to retrieve cute dog image!');
    watchForm();
});
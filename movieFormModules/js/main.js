import {addMovie, addProgram, addMovieToProgram} from './actions/controller.js'

let createMovieBtn = document.querySelector("#create-movie");
let createProgramBtn = document.querySelector("#create-program");
let addMovieToProgramBtn = document.querySelector("#add-movie");
let inputDateEle = document.querySelector("#date");
let inputTitleEle = document.querySelector("#title");
let inputLengthEle = document.querySelector("#length");
let selectGenreEle = document.querySelector("#genre");

createMovieBtn.addEventListener('click', function(e) {

    let titleValue = inputTitleEle.value;
    let lengthValue = inputLengthEle.value;
    let genreValue = selectGenreEle.value;

    addMovie(titleValue, lengthValue, genreValue);
});

createProgramBtn.addEventListener("click", function(e) {
    addProgram(inputDateEle.value);
});
addMovieToProgramBtn.addEventListener("click", addMovieToProgram);
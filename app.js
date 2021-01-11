const formElement = document.querySelector('#form');
const movieNameElement = document.querySelector('#movieName');
const movieDirectorElement = document.querySelector('#directorName');
const bannerUrlElement = document.querySelector('#bannerUrl');
const movieCards = document.querySelector('.movie-cards');
const clearAllButton = document.querySelector('.btn-delete-all');


//Triggering All Events
eventListeners();

function eventListeners() {
    formElement.addEventListener('submit', addMovie);
    document.addEventListener('DOMContentLoaded', () => {
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMoviesToUi(movies);
    });
    movieCards.addEventListener('click', deleteAll);
    clearAllButton.addEventListener('click', clearAllMovies);
}

function addMovie(e) {

    e.preventDefault();

    const movieName = movieNameElement.value;
    const movieDirector = movieNameElement.value;
    const bannerUrl = bannerUrlElement.value;

    if (movieName === "" || movieDirector === "" || bannerUrl === "") {
        UI.displayMessage('Tüm alanları doldurun!', 'danger');
    } else {
        const newMovie = new Movie(movieName, movieDirector, bannerUrl);

        UI.addMovieToUi(newMovie);
        Storage.addMovieToStorage(newMovie);
        UI.clearInputs(movieNameElement, movieDirectorElement, bannerUrlElement);
        UI.displayMessage('Film başarıyla eklendi', 'success');
    }
}

function deleteAll(e) {

    if (e.target.classList.contains('btn-delete')) {
        UI.deleteMovieFromUi(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent);
        UI.displayMessage('Silme işlemi başarılı', 'success');
    }

}

function clearAllMovies(e) {
    if (confirm('Emin misiniz?')) {
        UI.clearAllMoviesFromUi();
        Storage.clearAllMoviesFromStorage();
    }

}
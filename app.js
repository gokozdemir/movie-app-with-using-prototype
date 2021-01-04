const formElement = document.querySelector('#form');
const movieNameElement = document.querySelector('#movieName');
const movieDirectorElement = document.querySelector('#directorName');
const bannerUrlElement = document.querySelector('#bannerUrl');
const movieCards = document.querySelector('.movie-cards');
const clearAllButton = document.querySelector('.btn-delete-all');

//Initializing UI Object
const ui = new UI();

//Initializing Storage Object
const storage = new Storage();

//Triggering All Events
eventListeners();

function eventListeners() {
    formElement.addEventListener('submit', addMovie);
    document.addEventListener('DOMContentLoaded', () => {
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMoviesToUi(movies);
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
        ui.displayMessage('Tüm alanları doldurun!', 'danger');
    } else {
        const newMovie = new Movie(movieName, movieDirector, bannerUrl);

        ui.addMovieToUi(newMovie);
        storage.addMovieToStorage(newMovie);
        ui.clearInputs(movieNameElement, movieDirectorElement, bannerUrlElement);
        ui.displayMessage('Film başarıyla eklendi', 'success');
    }
}

function deleteAll(e) {

    if (e.target.classList.contains('btn-delete')) {
        ui.deleteMovieFromUi(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent);
        ui.displayMessage('Silme işlemi başarılı', 'success');
    }

}

function clearAllMovies(e) {
    if (confirm('Emin misiniz?')) {
        ui.clearAllMoviesFromUi();
        storage.clearAllMoviesFromStorage();
    }

}
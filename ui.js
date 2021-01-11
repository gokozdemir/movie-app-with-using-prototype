class UI{
    static addMovieToUi = function (newFilm) {

        const movieList = document.querySelector('.movie-cards');
        movieList.innerHTML += `
            <div class="movie-card">
                <div class="movie-image">
                    <img src="${newFilm.url}" alt="">
                </div>
                <div class="movie-description">
                    <div class="movie-name">
                        <p>${newFilm.name}</p>
                    </div>
                    <div class="movie-director">
                        <p>${newFilm.director}</p>
                    </div>
                    <div class="action-area">
                        <button class="btn btn-delete">Sil</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    static clearInputs(name, director, url) {
        name.value = "";
        director.value = "";
        url.value = "";
    }
    
    static displayMessage(message, type) {
        const formSection = document.querySelector('.form-section');
    
        const div = document.createElement('div');
        div.className = `${type}`;
    
        div.textContent = message;
    
        formSection.appendChild(div);
    
        setTimeout(() => {
            div.remove();
        }, 2000)
    }
    
    static loadAllMoviesToUi(movies){
        const movieCards = document.querySelector('.movie-cards');
    
        movies.forEach((movie) => {
            movieCards.innerHTML += `
            <div class="movie-card">
                <div class="movie-image">
                    <img src="${movie.url}" alt="">
                </div>
                <div class="movie-description">
                    <div class="movie-name">
                        <p>${movie.name}</p>
                    </div>
                    <div class="movie-director">
                        <p>${movie.director}</p>
                    </div>
                    <div class="action-area">
                        <button class="btn btn-delete">Sil</button>
                    </div>
                </div>
            </div>
            `
        })
    }
    
    static deleteMovieFromUi(buttonDelete){
        buttonDelete.parentElement.parentElement.parentElement.remove();
    }
    
    static clearAllMoviesFromUi(){
        let movieCards = document.querySelector('.movie-cards');
        
        while(movieCards.firstElementChild !== null){
            movieCards.firstElementChild.remove();
        }
    }
}


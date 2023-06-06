const apiKey = 'a5a29587875c73b539198c8c059365ef'
const baseUrl = 'https://api.themoviedb.org/3/'
const popularMoviesUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
const imgUrl = 'https://image.tmdb.org/t/p/w500'
const mainEl = document.getElementById('main')

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayMovies(data.results)
        })
}

function displayMovies(data) {
    mainEl.innerHTML = ''

    data.forEach(movie => {
        const {poster_path, title, vote_average, overview} = movie

        const movieDivEl = document.createElement('div')
        movieDivEl.classList.add('movie-card')

        movieDivEl.innerHTML = `
            <img src="${imgUrl}${poster_path}" >

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>

            <div class="overview">
                ${overview}
            </div>
        `
        mainEl.appendChild(movieDivEl)
    })  
}

getMovies(popularMoviesUrl)
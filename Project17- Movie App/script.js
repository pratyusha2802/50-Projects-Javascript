const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a930c316af6b436b78be222f965eb17&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=4a930c316af6b436b78be222f965eb17&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ""

  movies.forEach((movie) => {
    const { title, poster_path, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `

      main.appendChild(movieEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})

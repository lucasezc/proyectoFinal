
const APIKEY = "554d8a0bf349a5c03f0378c7f313da84";

const urls = [
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=554d8a0bf349a5c03f0378c7f313da84',
    'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=554d8a0bf349a5c03f0378c7f313da84',
    'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2023&api_key=554d8a0bf349a5c03f0378c7f313da84'
];

window.addEventListener('DOMContentLoaded',()=>{
    const peticiones = urls.map(peticion=>fetch(peticion));
    Promise.all(peticiones).then(values=>{
        return Promise.all(values.map(r=>r.json()))
    }).then(catologos=>{
        const [catalogoUno,catalogoDos,catalogoTres] = catologos;
        // Catalogo uno
        const populares = document.getElementById('populares');
        catalogoUno.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            populares.append(article);
        });
        // Catalogo dos
        const estrenos = document.getElementById('estreno');
        catalogoDos.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            estrenos.append(article);
        });
        // Catalogo tres
        const vistas = document.getElementById('vistas');
        catalogoTres.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            vistas.append(article);
        });
    });
});
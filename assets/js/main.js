let movieList = null;
let inputSearch = null;
let triggerMode = false;


const createStyle = () => {
    const headStyle = document.createElement('style');

    headStyle.innerHTML = `
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
    }
    
    .wrapper {
        padding: 20px;
    }
    
    .movies {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .movie {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    
    .movie__image {
        width: 100%;
        object-fit: cover;
    }`;

    document.querySelector('head').appendChild(headStyle);

};

const createHeader = (container) => {
    const header = document.createElement('h1');
    header.innerText = 'Приложение для поиска фильмов';
    container.appendChild(header); 
}

const setAttribute = (el, attrs) => {
    for (let key in attrs) el.setAttribute(key, attrs[key]);
}

const triggerModeHandler = () => triggerMode = !triggerMode;

const createSearchBox = (container) => {
    const searchBox = document.createElement('div');
    const input = document.createElement('input');
    const labelForInput = document.createElement('label');
    const checkBox = document.createElement('input');
    const labelForCheckBox = document.createElement('label');

    searchBox.setAttribute('class', 'search');

    setAttribute(input, {
        class: 'search_input',
        id: 'search',
        placeholder: 'Начните вводить текст...',
        type: 'text',
    });

    labelForInput.innerText = 'Поиск фильмов';

    setAttribute(labelForInput, {
        class: 'search_label-input',
        for: 'search',
    });

    setAttribute(checkBox, {
        class: 'search_checkBox',
        id: 'checkBox',
        type: 'checkBox',
    });
    checkBox.addEventListener('click', triggerModeHandler);

    setAttribute(labelForCheckBox, {
        class: 'search_label-checkBox',
        for: 'checkBox',
    });
    labelForCheckBox.innerText = 'Добавить фильм к существующему списку';



    searchBox.append(labelForInput, input, checkBox, labelForCheckBox);
    
    container.append(searchBox);
}

const createMarkup = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    createHeader(container);
    createSearchBox(container);


    const movies = document.createElement('div');
    movies.classList.add('movies');
    
    container.appendChild(movies);
    document.querySelector('body').prepend(container);
    
    movieList = document.querySelector('.movies');
    inputSearch = document.querySelector('#search');
}

const addMovieToList = (movie) => {

    const item = document.createElement('div');
    const img = document.createElement('img');
    
    img.src = movie.Poster;
    img.classList.add('movie__image');
    
    item.classList.add('movie');
    item.appendChild(img);
    movieList.appendChild(item);   
};

const clearMovieMarkup = () => movieList && (movieList.innerHTML = ' ');


const delay = ( () => {
    let timer = 0;

    return (callback, ms) => {
        clearTimeout(timer);
        timer = setInterval(callback, ms);
    };
})();

createStyle();
createMarkup();
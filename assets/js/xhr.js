// 1й вариант

// const getData = (url) => new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.onload = () => {
//         if(xhr.status === 200) {
//             let json = JSON.parse(xhr.response);
//             resolve(json.Search);
//         } else reject(xhr.status);
//         };
//     xhr.onerror = (err) => reject(err);
//     xhr.send();
// });


// 2й вариант

const getData = (url) => fetch(url)
.then((res) => res.json())
.then((json) => {
    if(json.Search) return json.Search;
    throw Error('Сервер вернул неправильный объект');
});

// let search1 = 'Iron Man';
// let search2 = 'Batman';
// let search3 = 'Superman';

// let ironman = getData(`https://www.omdbapi.com/?s=${search1}&apikey=27653a86&`);
// let batman = getData(`https://www.omdbapi.com/?s=${search2}&apikey=27653a86&`);
// let superman = getData(`https://www.omdbapi.com/?s=${search3}&apikey=27653a86&`);

// Promise.all([ironman, batman, superman])
// .then((res) => res.forEach((movies) => movies.forEach((movie) => addMovieToList(movie) )) )
// .catch(err => console.log(err));


// 3й вариант
// ССЫЛКА НА API
// https://www.omdbapi.com/?s=${search1}&apikey=27653a86&



let searchLast = null;

inputSearch.addEventListener('keyup', (e) => {

    delay(() => {
        const searchString = e.target.value;

    if(searchString && searchString.length > 3 && searchString !== searchLast) {
    
        if(!triggerMode) clearMovieMarkup();

        getData(`https://www.omdbapi.com/?s=${searchString}&apikey=27653a86&`)
        .then((movies) => movies.forEach((movie) =>addMovieToList(movie)))
        .catch(err => console.log(err));
    }


    searchLast = searchString;
    }, 1000);
});




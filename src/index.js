import { fetchBreeds, fetchCatByBreed } from './cat-api';
import './styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

const ref = {
  selector: document.querySelector('.breed-select'),
  divCatInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
const { selector, divCatInfo, loader, error } = ref;
  console.log(divCatInfo);
loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
console.log(arrBreedsId);
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      // console.log(data);
      arrBreedsId.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: selector,
      data: arrBreedsId,
    });
  })
  .catch(onFetchError);

selector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  loader.classList.replace('is-hidden', 'loader');
  selector.classList.add('is-hidden');
  divCatInfo.classList.add('is-hidden');
  console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);

  const breedId = event.currentTarget.value;
  console.log(breedId);
  
  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data[0]);
      loader.classList.replace('loader', 'is-hidden');
      selector.classList.remove('is-hidden');
      const { url, breeds } = data[0];
      console.log(data);
      

      divCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
      divCatInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
}

function onFetchError(error) {
  selector.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      timeout: 5000,
      width: '400px',
      fontSize: '24px',
    }
  );
}




// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На березі спокійних вод",
//         author: "Роберт Шеклі",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смішної людини",
//         author: "Федір Достоєвський",
//         rating: 7.75,
//     },
//     {
//         title: "Великі сподівання",
//         author: "Чарльз Діккенс",
//         rating: 8.75,
//     },
// ];
// console.log(books);

// let massive = [];
// console.log(massive);
// console.log(massive[0]);
// // const markup = massive.map(element => element[0]);
// // console.log(markup);
// // cardContainer.innerHTML = markup


// // const createObj = books.map(book => `<option value="${book.title}">${book.author}</option>`
// // ).join(" ");
// // console.log(createObj);
// // cardContainer.innerHTML = createObj;

// const addObj = books.forEach(item => {
//     `<option value="${item.title}">${item.author}</option>`;
//     console.log(item);
//     massive.push({ name: item.author, value: item.title });
//     cardContainer.innerHTML = massive;
// })

// console.log(addObj);

// const createObj = books.map(book => {`<option value="${book.title}">${book.author}</option>`
//     // console.log(book);
//     // console.log(book.author);
//     // massive.push({ name: book.author, value: book.title });
//     //     new SlimSelect({
//     //   select: book.author,
//     //   data: massive,
//     // });
// // return massive
// });
// cardContainer.innerHTML = createObj;
// console.log(createObj);



// const createObj = books.map(book => {
// console.log(book);
// }
    
// massive.push({ text: book.name, value: book.id });
    
    // new SlimSelect({
    //   select: cardContainer,
    //   data: massive,
    // });


    // console.log(book);
    // massive.push(book.author);
    // cardContainer.innerHTML = `<option value="">${massive}</option>`;
    // console.log(cardContainer.textContent);
    // return massive;

    
    // return massive;
    // const allAuthors = book.author;
    // console.log(allAuthors);
    // const option = document.createElement('option');
    // console.log(option);
    // option.value = book.author;
    // option.innerHTML = book.title;
    // console.log(option.innerHTML);
    // cardContainer.textContent = massive;
    // console.log(cardContainer.textContent);
    // cardContainer.innerHTML = `<option value="${idx}">${book.author}</option>`;
    // new SlimSelect({
    //   select: cardContainer,
    //   data: massive,
    // });
    // return massive
    // cardContainer.value = allAuthors;
    // cardContainer.innerHTML = `<option value="">${massive}</option>`;


//     cardContainer.innerHTML = `<option value="">${createObj}</option>`;
// console.log(createObj);



// function selectCat(event) {
//     console.log(event);
// }




// import axios from "axios";
// // console.log(axios);
// axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";

// import '../src/cat-api.js'
// import { TheCatAPI } from "@thatapicompany/thecatapi";


// const cardContainer = document.querySelector('.breed-select');
// console.log(cardContainer);
// const divCatInfo = document.querySelector('.cat-info');
// console.log(divCatInfo);
// cardContainer.addEventListener('submit', selectCats)


// // const theCatAPI = new TheCatAPI("live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq");
// // console.log(theCatAPI);



// // fetchBreeds()



// // function fetchBreeds() {
// //    return fetch('https://api.thecatapi.com/v1/breeds')
// //        .then(resp => {
// //         return resp.json();
// //     })
// //     .then(cats => {
// //         console.log(cats);
// //         cats.forEach(cat => {
// //             // console.log(cat.id);
// //             // console.log(`значення: ${cat.id}, Ім'я: ${cat.name}`);
// // //   console.log(`значення: ${cat.id}, Ім'я: ${cat.name}, Oпис: ${cat.description}`);
// //             massiveCats.push({ text: cat.name, value: cat.id })
// //             // cardContainer.value = cat.id;
// //             // console.log(cardContainer.value);
            
// // });
        
// //     })
// //     .catch(error => {
// //         console.log(error);
// //     })
    
// // }
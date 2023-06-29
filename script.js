// завдання 1

function getData() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', true);
  ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
      if (ajaxRequest.status === 200) {
        const response = JSON.parse(ajaxRequest.responseText);
        updateButtonContent(response.data);
      } else {
        console.log('Помилка запиту: ' + ajaxRequest.status);
      }
    }
  };
  ajaxRequest.send();
}

function updateButtonContent(data) {
  let button = document.getElementById('getDateButton');
  button.innerHTML = data;
}

window.onclick = function() {
  let date = new Date().toLocaleString();
  updateButtonContent(`Your vote is accepted: ${date}`);
}

// завдання 2

let btn = document.getElementById('getBooks')
let bookList = document.getElementById('booksList')

btn.addEventListener('click', async () => {
  let response = await fetch('./books.json')
  let data = await response.json()
  data.map (elem => {
    bookList.innerHTML += `<li>${elem.author}</li>`
  })
})

// завдання 3

async function getRandomUser () {
  let response = await fetch('https://randomuser.me/api')
  let users = await response.json()

  users.results.forEach(elem => {
    let date = Object.values(elem)
    console.log(date);
    let [f, {first, last}, {city, country}, s] = date
    console.log(f);
    console.log(first, last);
    console.log(city);
    console.log(country);
    console.log(s);
  })
}

getRandomUser()







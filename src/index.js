const ramenUrl = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector('#ramen-menu');
const ramenDetail = document.querySelector('#ramen-detail');
const image = document.querySelector('.detail-image');
const name = document.querySelector('.name');
const restaurant = document.querySelector('.restaurant');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');
const newRamen = document.querySelector('#new-ramen');
const editRamen = document.querySelector('#edit-ramen');
let selectedRamen;

function getAllRamen(url) {
    return fetch(url)
    .then(response => response.json())
    .then((ramensArray) => {
        ramensArray.forEach((ramenObj) => {
            renderInMenu(ramenObj)
        })
        renderRamenDetail(ramensArray[0])
    })
}

function renderInMenu(ramenObj) {
    const img = document.createElement('img');
    img.src = ramenObj.image;
    ramenMenu.append(img);
    img.addEventListener('click', () => renderRamenDetail(ramenObj));
}

function renderRamenDetail(ramenObj) {
    image.src = ramenObj.image;
    name.textContent = ramenObj.name;
    restaurant.textContent = ramenObj.restaurant;
    rating.textContent = ramenObj.rating;
    comment.textContent = ramenObj.comment;
}

newRamen.addEventListener('submit', addNewRamen)
editRamen.addEventListener('submit', updateRamen)


function addNewRamen(e) {
    e.preventDefault();
    // debugger
    const name = e.target.name.value;
    const restaurant = e.target.restaurant.value;
    const image = e.target.image.value;
    const rating = e.target.rating.value;
    const comment = e.target['new-comment'].value;
    const newRamenObj = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    renderInMenu(newRamenObj)
    newRamen.reset()
}

function updateRamen(e) {
    e.preventDefault();
    selectedRamen.rating = e.target.rating.value;
    selectedRamen.comment = e.target["new-comment"].value;
    renderRamenDetail(selectedRamen);
    editRamen.reset();
}

getAllRamen(ramenUrl);






// // DOM SELECTORS
// const ramenMenu = document.querySelector('#ramen-menu')
// const detailImg = document.querySelector('.detail-image')
// const name = document.querySelector('.name')
// const restaurant = document.querySelector('.restaurant')
// const ratingDisplay = document.querySelector('#rating-display')
// const commentDisplay = document.querySelector('#comment-display')
// const newRamen = document.querySelector('#new-ramen')


// fetch('http://localhost:3000/ramens')
// .then(response => response.json())
// .then((ramensArray) => {
//     ramensArray.forEach((ramenObj) => {
//         renderInMenu(ramenObj)
//     })
//     renderRamenDetail(ramensArray[0])
// })

// function renderInMenu(ramenObj) {
//     const img = document.createElement('img')
//     img.src = ramenObj.image
//     ramenMenu.append(img)
//     img.addEventListener('click', () => renderRamenDetail(ramenObj))
// }

// function renderRamenDetail(ramenObj) {
//     detailImg.src = ramenObj.image
//     name.textContent = ramenObj.name
//     restaurant.textContent = ramenObj.restaurant
//     ratingDisplay.textContent = ramenObj.rating
//     commentDisplay.textContent = ramenObj.comment
// }

// newRamen.addEventListener('submit', addNewRamen)

// function addNewRamen(e) {
//     e.preventDefault()
//     const name = e.target.name.value
//     const restaurant = e.target.restaurant.value
//     const image = e.target.image.value
//     const rating = e.target.rating.value
//     const comment = e.target["new-comment"].value
//     const newRamenObj = {
//         name,
//         restaurant,
//         image,
//         rating,
//         comment
//     }
//     renderInMenu(newRamenObj)
//     newRamen.reset()
// }




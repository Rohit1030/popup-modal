const openButton = document.querySelector(".open-button");
const pageOne = document.querySelector('.page-1');
const arrowPageOne = document.querySelector('.arrow-page-one');
const locationBtn = document.querySelector('.location-btn');
const pageTwo = document.querySelector('.page-2');
const confirmBtn = document.querySelector('.confirm-proceed');


confirmBtn.addEventListener('click', function(){
    pageTwo.close();
})

openButton.addEventListener('click', () => {
    pageOne.showModal();
});

arrowPageOne.addEventListener('click', () => {
    pageOne.close();
});

locationBtn.addEventListener('click', function(){
    pageOne.close();
    pageTwo.showModal();
});
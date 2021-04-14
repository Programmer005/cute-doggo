const doggoImageElement = document.querySelector(".doggo-img")
const moreDoggoBtn = document.querySelector(".more-doggo-btn")
const slideshowCheck = document.querySelector(".slideshow-check")
const API_URL = "https://api.thedogapi.com/v1/images/search"

function setDoggo() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const doggo = data[0].url

      doggoImageElement.setAttribute("src", doggo)
    })
}

setDoggo()

moreDoggoBtn.addEventListener("click", setDoggo)

const doggoImageElement = document.querySelector(".doggo-img")
const moreDoggoBtn = document.querySelector(".more-doggo-btn")
const API_URL = "https://api.thedogapi.com/v1/images/search"
const doggoBreed = document.querySelector(".breed")
const downloadPara = document.querySelector(".download-p")

function setDoggo() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const doggo = data[0].url

      if (data[0].breeds[0] === undefined) {
        doggoBreed.textContent =
          "Sorry I don't know this doggo. but he's cute! isnt he?"
      } else {
        doggoBreed.textContent = data[0].breeds[0].name
      }

      doggoImageElement.setAttribute("src", doggo)
    })
}

setDoggo()

moreDoggoBtn.addEventListener("click", setDoggo)

downloadPara.addEventListener("click", () => {
  alert(
    `Right click the doggo image, then click the "Save image as" button. Now you have a cute doggo with you.`
  )
})

const getFace = async e => {
  e.preventDefault()
const gender = document.querySelector('#gender').value
const ethnicity = document.querySelector('#ethnicity').value
const age = document.querySelector('#age').value
console.log(gender, age, ethnicity);
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b507308dfemshec72d93af6c763ap196a45jsn2c66a6ffb28f',
      'X-RapidAPI-Host': 'face-studio.p.rapidapi.com',
    },
  }

  //asynchroniczność
  //fetch
  //promise
  //async await
  //try
  //catch

  //wysyłamy żadania - czekamy
  // dostaliśmy odpowiedź
  //przerabiwamy odpowiedź
  // coś robimy z odpowiedzią
  try {
    const response = await fetch(url, options)
    const result = await response.blob()
    const image = URL.createObjectURL(result)
    showPhoto(image)
    console.log(result)
  } catch (error) {
    console.error(error)
  }

  function showPhoto(url)  {
    const imgPlace = document.querySelector('.photo-result')
    const img = document.createElement("img")
    img.classList.add("photo")
    img.setAttribute("src", url)
    imgPlace.appendChild(img)
  }
  
}

document.querySelector('#form').addEventListener('submit', getFace)

// const btn = document.querySelector(".btn-face-maker")
// btn.addEventListener("click" , getFace)

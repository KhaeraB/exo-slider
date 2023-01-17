// Tableau pour stocker les informations des diapositives
const slidesData = [
  {
    id: '1',
    title: 'La maison bleu',
    content: 'Maison en bord de mer',
    img: 'maison.jpg',
  },
  {
    id: '2',
    title: "L'océan",
    content: 'Navire prit dans une tempête',
    img: 'navire.jpg',
  },
  {
    id: '3',
    title: 'La plage',
    content: 'Canoé sur une plage exotique',
    img: 'plage.jpg',
  },
]

// Génère les options du sélecteur à partir des données du tableau
function generateSelectOptions() {
  let options = ''
  for (let i = 0; i < slidesData.length; i++) {
    options += `<option value="${slidesData[i].id}">${slidesData[i].title}</option>`
  }
  return options
}

let currentSlideIndex = 0

const slideSelector = document.getElementById('slide-selector')
const slideContainer = document.getElementById('slide-container')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

// Ajoutez les options générées au sélecteur
slideSelector.innerHTML = generateSelectOptions()

// Affiche la diapositive courante
function displayCurrentSlide() {
  const currentSlideData = slidesData[currentSlideIndex]
  slideSelector.value = currentSlideData.id
  slideContainer.innerHTML = `<h2>${currentSlideData.title}</h2><img src="img/${currentSlideData.img}"><p>${currentSlideData.content}</p>`
}

// Ajoutez un écouteur d'événements sur le sélecteur pour détecter les changements de sélection
slideSelector.addEventListener('change', (event) => {
  currentSlideIndex = slidesData.findIndex(
    (slide) => slide.id === event.target.value,
  )
  displayCurrentSlide()
})

prevButton.addEventListener('click', () => {
  currentSlideIndex =
    currentSlideIndex === 0 ? slidesData.length - 1 : currentSlideIndex - 1
  displayCurrentSlide()
})

nextButton.addEventListener('click', () => {
  currentSlideIndex =
    currentSlideIndex === slidesData.length - 1 ? 0 : currentSlideIndex + 1
  displayCurrentSlide()
})

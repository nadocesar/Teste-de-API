const container = document.createElement('div')//Container Div Main
container.className = 'container'

const header = document.createElement('div')//Div header
header.className = 'header'
container.appendChild(header)

const animeTitle = document.createElement('h1')//Logo
animeTitle.innerHTML = 'Animes'
header.appendChild(animeTitle)

const cardDiv = document.createElement('div')//Div para Card
cardDiv.className = 'cardDiv'
container.appendChild(cardDiv)

const card = document.createElement('div')//Card dentro da Div card
card.className = 'card'
cardDiv.appendChild(card)

// const cardItens = document.createElement('div')//Card dentro da Div card
// cardItens.className = 'cardItens'
// cardDiv.appendChild(cardItens)

fetch('https://gogoanime.herokuapp.com/anime-movies')
   .then(respostas => respostas.json())//.then(data => console.log(data))
   .then(data => data.map(el => generateCard(el)))

   function generateCard(data){//função gerando uma div para a variavel que recebera os cards
    const cardItens = document.createElement('div')
    cardItens.className = 'cardItens'
    card.appendChild(cardItens)

    const cardImg = document.createElement('img')
    cardImg.src = data.animeImg
    card.appendChild(cardImg)

    const cardTitle = document.createElement('h3')
    cardTitle.className = 'cardTitle'
    cardTitle.innerHTML = data.animeTitle
    cardItens.appendChild(cardTitle)

    const buttonCard = document.createElement('button')
    buttonCard.className = 'buttonCard'
    card.appendChild(buttonCard)

    const linkVideo = document.createElement('a')
    linkVideo.href = data.animeUrl
    linkVideo.innerHTML = 'Assistir'
    buttonCard.appendChild(linkVideo)
}

const divBusca = document.createElement('div')
divBusca.className = 'divBusca'
header.appendChild(divBusca)

const Search = document.createElement('input')
Search.type = 'text'
divBusca.appendChild(Search)

const buttonSearch = document.createElement('input')
buttonSearch.type = 'submit'
buttonSearch.value = 'Buscar'
divBusca.appendChild(buttonSearch)

//Criando uma div para listar Animes "listAnimes"


document.body.appendChild(container)
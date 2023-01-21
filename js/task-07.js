const ref = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
}

handleInput();
ref.input.addEventListener('input', handleInput)

function handleInput() {
  ref.text.style.fontSize = `${ref.input.value}px`
}



//const inputChange = document.querySelector('input#font-size-control')
//const abracadabra = document.querySelector('span#text')

//inputChange.addEventListener('change', e => {
//  abracadabra.style.fontSize = `${e.target.value }px`
//})
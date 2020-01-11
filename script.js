console.log("Hello World")
//Year Input
let yearInput = document.querySelector('#year-input')
//Fact
const fact = document.querySelector('#fact')
//Fact Text
const yearText = document.querySelector('#year-text')

yearInput.addEventListener('input', fetchFact)

//Get Fact
function fetchFact(){
    console.log(yearInput.value)
    let year = yearInput.value
    fetch('http://numbersapi.com/'+year+'/year')
      .then(res => res.text())
      .then(data => {
          if(year != '') {
          yearText.innerHTML = data
          fact.style.display = 'block'
          }
      })
      .catch(err => console.log(err))


}



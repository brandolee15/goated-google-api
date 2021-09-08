const searchBtn = document.getElementById('search')

searchBtn.addEventListener('click', search)

function search(e) {
    e.preventDefault();
    fetch('http://localhost:3000/search')
    .then(resp => resp.json())
    const searchedTerm = document.getElementById('search').textContent
    let searchArray = searchedTerm.split(' ')
    .then(searchArray.forEach(sortResults))
    .then(console.log(data[1]))
    .catch(error => {
      console.log(error)
  })
  }

  function sortResults(data) {
    
    for (let i=0;i<=10;i++) {
        if (data.description[i].contains(searchedTerm) || data.title[i].contains(searchedTerm)) {
                data.count[i]++
            }
    }
  }

  
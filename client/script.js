const searchBtn = document.getElementById('search')

searchBtn.addEventListener('click', search)

function search(e) {
    e.preventDefault();
    fetch('http://localhost:3000/search')
    .then(resp => resp.json())
    .then(sortResults)
    .catch(error => {
      console.log(error)
  })
  }

  function sortResults(data) {
    const searchedTerm = document.getElementById('search').textContent
    let orderedResults = []
    for (let i=0;i<=10;i++) {
        if (data.description[i].contains(searchedTerm) || data.title[i],contains(searchedTerm)) {
            orderedResults.append(data.description[i])
        }
        else {
            continue
        }
    }
  }
const searchBtn = document.getElementById('google-search')

searchBtn.addEventListener('click', search)

function search(e) {
    try {
    e.preventDefault();
    const searchedTerm = document.getElementById('search').value;
    let searchArray = searchedTerm.split(' ');
    
    console.log(searchedTerm)
    
    console.log(searchArray)
    fetch('http://localhost:3000/search')
    //console.log(searchBtn)
    .then(resp => resp.json())
    .then(data => {
        for (let k = 0; k < searchArray.length; k++) {
            sortResults(data, searchArray[k])
        }
    })
    
    // .then(console.log(data[1]))
    } catch (error) {
        console.log(error);
    }
  }

  function sortResults(data,searchArray) {
    //console.log(typeOf(searchArray[0]))
    let resData = data;
    console.log(searchArray);
    for (let i = 0; i <= 9; i++) {
        console.log('it went through')
        let str = resData[i]["description"];
        let str2 = resData[i]["title"];
        if (str.includes(searchArray) || str2.includes(searchArray)) {
            console.log('butter'); 
                resData[i].count++;
            }
        else {
            continue;
        }
    }
    console.log(resData[0]);
  }

  
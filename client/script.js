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
        return data
    })
    .then(orderArray)
    
    } catch (error) {
        console.log(error);
    }
  }

  function sortResults(data,word) {
    let resData = data;
    console.log(word)
    if (word[0]) {

    for (let i = 0; i <= 9; i++) {

        let str = resData[i]["description"].toLowerCase();
        let str2 = resData[i]["title"].toLowerCase();

        if (str.includes(word.toLowerCase())) {
            console.log('butter'); 
                resData[i].count++;
            }
        if (str2.includes(word.toLowerCase())) {
            resData[i].count++
        }
        else {
            continue;
        }   
    }  
    }
}

 function orderArray(array) {
    let sortedArray = array.sort((a,b) => b['count'] > a['count'] ? 1 : -1);
    console.log(sortedArray)
    return sortedArray
}
  
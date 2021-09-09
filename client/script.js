const searchBtn = document.getElementById('google-search')

searchBtn.addEventListener('click', search);

function search(e) {
    try {
    e.preventDefault();

    //Reset Links Section for next search 
    let updatedLinkSection = document.getElementById('link-section')
    updatedLinkSection.innerHTML = "";

    const searchedTerm = document.getElementById('search').value;
    let searchArray = searchedTerm.split(' ');
    console.log(searchedTerm)
    
    console.log(searchArray)
    fetch('http://localhost:3000/search')
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


// Append to our link container each link object with the class for that styling 

 function orderArray(array) {
    let sortedArray = array.sort((a,b) => b['count'] > a['count'] ? 1 : -1);
    console.log(sortedArray)
    let linkSection = document.getElementById('link-section');
    for(let j = 0; j <= sortedArray.length - 1; j++){
        let linkDiv = `<div class="link-container">
        <a href="">${sortedArray[j]['link']}</a>
        <br>
        <h3>${sortedArray[j]['title']}</h3>
        <div>${sortedArray[j]['description']}</div>
        </div><br>`
        console.log(linkDiv);
        linkSection.insertAdjacentHTML('beforeend', linkDiv);
        linkDiv = '';
    }
    // return sortedArray
}
  

module.exports = {
    search,
    sortResults,
    orderArray
}
Google Search Engine API - Futureproof 

Installation: 

- Clone or download this repo 
- Navigate to the client folder
- Run npm install to install dependencies
- Navigate to the server folder
- Run npm install to install dependencies

Usage:

- Navigate to the server directory
- Run node index.js to launch server
- Run nodemon index.js to launch server using nodemon
- Go into script.js and read the chain of functions carefully to understand how the search engine works
- The index.html file is served on localhost:3000 using express.static

Wins:

- Managed to implement our own search engine by chaining different functions 
- Managed to display the ordered results from our search engine to our index.html

Challenges: 

- Figuring out how to sort our data objects based on the user input  
- Looping through the user input array and our data array, and returning a result which is soted from most relevant to least relevant 
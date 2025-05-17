let currantData = []
async function getdata(){
const url = "https://dummyjson.com/quotes";
try {

const response = await fetch(url);
if(!response.ok){
throw new Error(`Response status: ${response.status}`);

}
const qoutes = await response.json()

currantData = qoutes.quotes
return currantData
}
catch {
  
  console.error(error.message)
  const empty = document.querySelector('#empty');
    empty.innerHTML = `<h2 style="color:red;">Error: ${error.message}</h2>`;
}
}
async function allQuotes(){
  await getdata()  
  displayQuotes(currantData)
}
allQuotes()




async function searchValue(){
const searchData = document.querySelector('#search').value
const searchResult = currantData.filter((quote) =>
  quote.quote.toLowerCase().includes(searchData.toLowerCase())
)
console.log(searchResult)
if(searchData){
  displayQuotes(searchResult)
}
if (searchResult.length === 0 ){
  const empty = document.querySelector('#empty')
 

const noResult = document.createElement('h1')
const message = document.createTextNode("No Result");
noResult.appendChild(message);
empty.appendChild(noResult)
return empty
} 
displayQuotes(searchResult)

}
function displayQuotes(currentQuotes){
  const contianer = document.querySelector('#quots-contianer')
  
currentQuotes.forEach(quote =>{
const row = document.createElement('li')
row.innerHTML = `
<h1>${quote.quote}</h1>
<p>-${quote.author}</p>
`
contianer.appendChild(row)
}
)
}



//The filter should only display quotes whose text contains the entered substring
// The data should be fetched from the API only once. and the results should be filtered using JavaScript.
// Display an error message if the API call fails.
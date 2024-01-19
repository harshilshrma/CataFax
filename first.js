let URL = "https://cat-fact.herokuapp.com/facts";
const text = document.querySelector("#fax");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    text.innerText = data[0].text;
}; 

btn.addEventListener("click", getFacts);
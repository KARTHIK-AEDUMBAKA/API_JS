const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('getBottom');

const getNewDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(json =>{
    console.log(json.message);
    dogImageDiv.innerHTML =`<img src='${json.message}' height=300 width=300 />`; 
})
.catch(error => console.log(error));
}

dogButton.onclick = () => getNewDog();
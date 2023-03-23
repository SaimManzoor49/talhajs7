const cities = ["Faisalabad" , "Lahore" , "islamabad"]

document.getElementById("cities").innerText = cities;


let addCity = document.getElementById("addCity")
addCity.onclick = ()=>{
    
    cities.push(
        document.getElementById("newCity").value
        
        )
        document.getElementById("cities").innerText = cities;
    
 }
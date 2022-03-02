let form = document.forms["registracija"];
let list = document.getElementById("id_of_select");
let btn = document.getElementById("btn-list");
let parent = document.getElementById("list")


form.addEventListener("submit", function(e){
    e.preventDefault();
    let optionalValueOfSelect = list.value;

    let name = form["vardas"].value;
    let lastName = form["pavarde"].value;
    let school = form["mokykla"].value;
    let city = form["miestas"].value;
    
    btn.addEventListener("click", function(){
        let li = document.createElement("li");
        parent.appendChild(li);
        counter++;
        li.innerHTML =  name + ", " + lastName + ", " + school + ", " + city + ", " +getArea(optionalValueOfSelect);

    })
})

function getArea(optionalValue){
    if(optionalValue = "Front-end"){
        return "Sritis: Front-end";
    } else if (optionalValue = "Back-end"){
        return "Sritis: Back-end";
    }
}
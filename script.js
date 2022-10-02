const btn_submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");
const firstname = document.querySelector("#fname");
const lastname = document.querySelector("#lname");
const address = document.querySelector("#address");
const pincode = document.querySelector("#pincode");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const gender = document.querySelector("#gender");
const food = document.querySelectorAll(".food");

let tableData=[];


let Table = function Table(
    firstname,
    lastname,
    address,
    pincode,
    state,
    country,
    gender,
    selectedFood
){
    this.id=this.count;
    this.firstname=firstname;
    this.lastname=lastname;
    this.address=address;
    this.pincode=pincode;
    this.state=state;
    this.country=country;
    this.gender=gender;
    this.selectedFood=selectedFood;
};


function createTable(){
    let data="";
    let count=0;

    tableData.forEach(function(ele){
        const tableValue=ele;
        tableValue.id=count;
        data += `<tr id="${tableValue.id}">
        <td>${tableValue.firstname}</td>
        <td>${tableValue.lastname}</td>
        <td>${tableValue.address}</td>
        <td>${tableValue.pincode}</td>
        <td>${tableValue.state}</td>
        <td>${tableValue.country}</td>
        <td>${tableValue.gender}</td>
        <td>${tableValue.selectedFood}</td>
        </tr>`
        count++;
    });
    tbody.innerHTML = data;
    
}

function updateTable(ele, selectedFood){
    ele.firstname=firstname.value;
    ele.lastname=lastname.value;
    ele.address=address.value;
    ele.pincode=pincode.value;
    ele.state=state.value;
    ele.country=country.value;
    ele.gender=gender.value;
    ele.selectedFood=selectedFood;
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    const selectedFood =[];
    food.forEach(function(item) {
        if(item.checked==true){
            selectedFood.push(item.value);
        }
    });
    if(selectedFood.length<2){
        alert("Must select at least two foods");
        return;
    }
    if(!false){
        const newTable = new Table(
            firstname.value,
            lastname.value,
            address.value,
            pincode.value,
            state.value,
            country.value,
            gender.value,
            selectedFood
        );
        tableData.push(newTable);
    } else updateTable(selectedFood);
        firstname.value=
        lastname.value=
        address.value=
        pincode.value=
        state.value=
        country.value="";
        gender.value="";
        food.forEach((item)=>(item.checked=false));
        createTable();
});



btn_submit.addEventListener("submit",createTable());
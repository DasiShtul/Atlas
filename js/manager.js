import CountryModule from "./countryModule.js"
let allCountries_ar =[];
export const getCountries = (_ar)=>{
    allCountries_ar = _ar;
    
}
export const startCountries =()=>{
    console.log(allCountries_ar)
      let start = allCountries_ar.filter(item => item.name.common.toLowerCase()=="israel" || 
      item.name.common.toLowerCase()=="united states" ||
      item.name.common.toLowerCase()=="thailand" ||
      item.name.common.toLowerCase()=="france");
      createAtlas(start)
}
export const fillSelectBox = async () => {

  allCountries_ar.sort((a, b) => a.name.common.localeCompare(b.name.common))
  let select_country = document.querySelector("#id_select_country");
  allCountries_ar.map(item => {
      select_country.innerHTML += `
<option value=${item.name.common}>${item.name.common}</option>`
  });
}
export const createAtlas = (_arr) => {
    document.querySelector("#id_parent").innerHTML = "";      
      _arr.forEach((item) => {
        let country = new CountryModule("#id_parent",item, createAtlasAll, countryCodForName);
        country.renderAll();
      });

}
export const createOneAtlas = (_input) => {
    document.querySelector("#id_parent").innerHTML = "";
    let arr = allCountries_ar.filter(item => item.name.common.toLowerCase()==_input.toLowerCase());      
      arr.forEach((item) => {
        let country = new CountryModule("#id_parent",item, createAtlasAll, countryCodForName);
        country.render();
      });

}
export const createAtlasAll = (_input) => {

    if(_input=="ALL"){
      console.log(allCountries_ar.length)
        createAtlas(allCountries_ar);
    }
    else{
    let arr = allCountries_ar.filter(item => item.name.common.toLowerCase().includes(_input.toLowerCase()));
               console.log(arr);
               if(arr.length>0){
                console.log(arr)
                createAtlas(arr);
               }
               else{
                document.querySelector(
                  "#id_parent"
                ).innerHTML = `<h2>Country ${_input} is  not found </h2>`;
               }

    } 

}


export const countryCodForName = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`
    let resp = await fetch(url);
    let data = await resp.json();
    let name = await data[0].name.common;
    // name = name.toLowerCase()
    console.log(name)
    return name;
}
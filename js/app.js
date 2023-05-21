import {getCountries, startCountries,fillSelectBox} from "./manager.js"
import { declareEvents } from "./eventsView.js"
// let startPage_ar = ["israel","usa","thailand","france"];

const init = () => {
    doApi();
    declareEvents();
    
}
const doApi = async (search="all") => {
     
    let url = (`https://restcountries.com/v3.1/${search}`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        data = data.filter(item => item.name.common !="Palestine")
        // createAtlasAll(data); 
        console.log(data) 
        getCountries(data);
        startCountries();
        fillSelectBox();


    }
    catch (err) {
        console.log(err);
        alert("There problem, come back later")
    }
 
 
 }



init();
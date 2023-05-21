import {createAtlasAll, countryCodForName ,startCountries,createOneAtlas} from "./manager.js"
export const declareEvents =  () => {
    let LOGO = document.querySelector(`#id_logo`);
    LOGO.addEventListener("click", () => {
        startCountries();
    }) 
    let USA = document.querySelector(`#usa`);
    USA.addEventListener("click",async () => {
       let name = await countryCodForName(USA.innerHTML)
       createOneAtlas(name);
    }) 
    let ISRAEL = document.querySelector(`#israel`);
    ISRAEL.addEventListener("click", () => {
        createOneAtlas(ISRAEL.innerHTML);
    }) 
    let THAILAND = document.querySelector(`#thailand`);
    THAILAND.addEventListener("click", () => {
        createOneAtlas(THAILAND.innerHTML);
    }) 
    let FRANCE = document.querySelector(`#france`);
    FRANCE.addEventListener("click", () => {
        createOneAtlas(FRANCE.innerHTML);
    }) 
    let ALL = document.querySelector(`#all`);
    ALL.addEventListener("click", () => {
        createAtlasAll(ALL.innerHTML);
    }) 
    
    let id_input = document.querySelector("#id_input")
    let id_Search = document.querySelector("#id_Search")
    let id_select = document.querySelector("#id_select_country")
    
    id_Search.addEventListener("click", () => {
        createAtlasAll(id_input.value);
    })
    id_select.addEventListener("change", () => {
        if (id_select.value != "0"){
        document.querySelector("#id_input").value=id_select.value;
        }
    })


}


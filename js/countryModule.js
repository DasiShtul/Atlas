export default class CountryModule {
  constructor(_parent, _item, createAtlasAll, countryCodForName) {
    this.name = _item.name.common;
    this.region = _item.region;
    this.capital = _item.capital;
    this.pop = _item.population.toLocaleString();
    this.flags = _item.flags.png;
    // this.coin = Object.keys(_item.currencies);
    // this.coinDescription = Object.values(_item.currencies)[0].name;
    this.languages = _item.languages ? Object.values(_item.languages).join() : "none";
    this.borders = _item.borders ? _item.borders: "none";
    this.map = _item.latlng;
    this.parent = _parent;
    this.createAtlasAll = createAtlasAll;
    this.countryCodForName = countryCodForName;

  }

  renderAll() {
    let myDiv = document.createElement("div");
    myDiv.className = "d-flex justify-content-center my-3 text-center";
    document.querySelector(this.parent).append(myDiv);
    document.querySelector(this.parent).className = "row row-cols-lg-3 row-cols-md-2 justify-content-around"
    myDiv.innerHTML += `
      <div class="card preBox h-100" data-aos="zoom-out-down" data-aos-duration="1000">
      <img src="${this.flags}" class="card-img-top shadow preImg" width="100%" alt="${this.name}">
      <div class="card-body">
      <p class="card-text m-0 p-3">${this.name} </p>
      </div>
      </div>
      `;
    myDiv.querySelector(".preBox").addEventListener("click", () => {
      document.querySelector("#id_parent").innerHTML = "";
      this.render();
    });

  }

  render() {
    let div = document.createElement("div");
    document.querySelector(this.parent).append(div);
    document.querySelector(this.parent).className ="container"
    div.innerHTML = `
        <div class="p-4 country col-md-8 mx-auto shadow overflow-hidden" data-aos="zoom-out-down" data-aos-duration="1000">
        <img src="${this.flags}" alt="${this.name}" class="w-50 float-end ms-4">
        <h2>${this.name}</h2>
        <p class="card-text">Population : ${this.pop}.</p>
        <p class="card-text">Region : ${this.region}. </p>
        <p class="card-text">Capital : ${this.capital}. </p>
  <p class="card-text">languages : ${this.languages}. </p>
        <div class="mt-3 "><strong>States with borders:</strong><br>
        <div class="borders_div"></div>
        </div>
        
        <iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
        </div>
        `

    let borders_div = div.querySelector(".borders_div");
    if (this.borders != "none") {
      this.borders.forEach(async (item) => {
        if (item != "PSE") {
          let a = document.createElement("a");
          a.innerHTML = await this.countryCodForName(item);
          a.style = "color: red; cursor: pointer; margin-left: 4px;"
          borders_div.append(a);
          a.addEventListener("click", () => {
            console.log(a.innerHTML)
            this.createAtlasAll(a.innerHTML.toLowerCase());
          })
        }
      })
    }
    else {
      let p = document.createElement("a");
      p.innerHTML = "There are no border countries!!!";
      p.style = "color: red;"
      borders_div.append(p);
    }
  }
}
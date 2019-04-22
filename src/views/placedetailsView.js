const PubSub = require("../helpers/pub_sub.js");

class PlaceDetailsView {
  constructor() {
    this.container = document.querySelector("#result");
    // console.dir(this.container);
  }

  bindEvents() {
    PubSub.subscribe("Data-selected", evt => {
      const placedetail = evt.detail;
      this.render(placedetail);
    });
  }

  render(placedata) {
    // this.container.innerHTML = "";
    const resultElement = document.querySelector("#result");

    this.container.innerHTML = "";

    const place = document.createElement("li");
    place.textContent = "Selected Place " + placedata.name;
    resultElement.appendChild(place);

    const elevation = document.createElement("li");
    elevation.textContent = "Elevation : " + placedata.elevation;
    resultElement.appendChild(elevation);

    const lat = document.createElement("li");
    lat.textContent = "Latitude :" + placedata.latitude;
    resultElement.appendChild(lat);

    const long = document.createElement("li");
    long.textContent = "Longitude :" + placedata.longitude;
    resultElement.appendChild(long);

    // let resultElement2 = this.createElement("h3", placedata.elevation);
    // this.container.appendChild(resultElement2);
    //
    // resultElement.textContent = placedata.name;
    // resultElement.textContent = placedata.elevation;
    // resultElement.textContent = placedata.name;
  }

  createElement(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  }
}

module.exports = PlaceDetailsView;

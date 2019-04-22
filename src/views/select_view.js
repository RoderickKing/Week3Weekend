const PubSub = require("../helpers/pub_sub.js");

class SelectView {
  constructor() {
    this.element = document.querySelector("select#place-list");
  }

  bindEvents() {
    PubSub.subscribe("Places:data-loaded", evt => {
      const locationData = evt.detail;
      this.populate(locationData);
    });

    this.element.addEventListener("change", evt => {
      const selectedIndex = evt.target.value;
      PubSub.publish("SelectView:change", selectedIndex);
    });
  }

  populate(locationData) {
    for (var i = 0; i < locationData.length; i++) {
      const option = document.createElement("option");
      option.textContent = locationData[i].name;
      //option.value = locationData.Locations.Location[i].id;
      option.value = i;

      this.element.appendChild(option);
    }
  }
}

module.exports = SelectView;

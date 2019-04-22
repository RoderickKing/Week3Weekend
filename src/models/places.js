const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

class Places {
  constructor() {
    this.data = [];
  }

  bindEvents() {
    PubSub.subscribe("SelectView:change", evt => {
      PubSub.publish("Data-selected", this.data[evt.detail]);
    });
  }

  getData() {
    // publish the data
    const url =
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=your-key";

    const requestHelper = new RequestHelper(url);

    requestHelper
      .get()
      .then(data => {
        this.data = data.Locations.Location;
        PubSub.publish("Places:data-loaded", this.data);
      })
      .catch(message => {
        console.error(message);
      });
  }
}

module.exports = Places;

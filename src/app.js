const Places = require("./models/places.js");
const SelectView = require("./views/select_view.js");
const PlacedetailsView = require("./views/placedetailsview.js");

document.addEventListener("DOMContentLoaded", () => {
  const placeDropdown = new SelectView();
  placeDropdown.bindEvents();

  const placeView = new PlacedetailsView();
  placeView.bindEvents();

  const placesModel = new Places();
  placesModel.bindEvents();
  placesModel.getData();
});

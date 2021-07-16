"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const inputButon = document.querySelector(".from__btn");
const toh = document.querySelector("#tohide");
const tos = document.querySelector("#toshow");
const map = document.querySelector("#map");
const saveData = function (locat) {
  console.log(`why dada why`);
};
const getData = function (location) {
  let ok1 = false,
    ok2 = false,
    ok3 = false,
    d = "",
    dur = "",
    how = "",
    typ = "";
  console.log(`${location} ${typeof location}`);
  inputType.addEventListener("change", function () {
    console.log(inputType.value);
    if (inputType.value === "cycling") {
      toh.style.display = "none";
      tos.style.display = "flex";
      typ = inputType.value;
    } else {
      toh.style.display = "flex";
      tos.style.display = "none";
      typ = inputType.value;
    }
  });
  inputDistance.addEventListener("change", function () {
    if (inputDistance.value !== null) {
      ok1 = true;
      d = inputDistance.value;
      if (ok1 === true && ok2 === true && ok3 === true) {
        saveData(location, d, dur, how, typ);
      }
    }
  });
  inputDuration.addEventListener("change", function () {
    if (inputDuration.value !== null) {
      ok2 = true;
      dur = inputDuration.value;
      if (ok1 === true && ok2 === true && ok3 === true) {
        saveData(location, d, dur, how, typ);
      }
    }
  });
  inputCadence.addEventListener("change", function () {
    if (inputCadence.value !== null) {
      ok3 = true;
      how = inputCadence.value;
      if (ok1 === true && ok2 === true && ok3 === true) {
        saveData(location, d, dur, how, typ);
      }
    }
  });
  inputElevation.addEventListener("change", function () {
    if (inputElevation.value !== null) {
      ok3 = true;
      how = inputElevation.value;
      if (ok1 === true && ok2 === true && ok3 === true) {
        saveData(location, d, dur, how, typ);
      }
    }
  });
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      const map = L.map("map").setView([latitude, longitude], 13);
      console.log(latitude, longitude);
      L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("This is the pin to pin the location")
        .openPopup();
      map.on("click", function (ev) {
        form.className = "form";
        getData(ev.latlng);
      });
    },
    function () {
      console.log(`Sorry Couldnot load your location`);
    }
  );
}

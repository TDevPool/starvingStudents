const home = { lat: 40.8010593, lng: -77.8617996 };

let markers = [
  {
    name: "BJC",
    foodType: "Pizza",
    when: "Not Today",
    lat: 40.8085727,
    lng: -77.8556662,
  },
  {
    name: "Old Main",
    foodType: "Doughnuts",
    when: "Not Today",
    lat: 40.796408,
    lng: -77.862795,
  },
  {
    name: "Westgate",
    foodType: "Bagels",
    when: "Not Today",
    lat: 40.793633,
    lng: -77.868322,
  },
  {
    name: "Engineering West",
    foodType: "Pizza",
    when: "Not Today",
    lat: 40.794634,
    lng: -77.864345,
  },
  {
    name: "Engineering East",
    foodType: "Pizza",
    when: "Not Today",
    lat: 40.795121,
    lng: -77.863927,
  },
  {
    name: "Business",
    foodType: "Pizza",
    when: "Not Today",
    lat: 40.803724,
    lng: -77.864732,
  },
  {
    name: "Thomas",
    foodType: "Cookies",
    when: "Not Today",
    lat: 40.8005337,
    lng: -77.8604241,
  },
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: home,
    zoom: 15,
    fullscreenControl: false,
    streetViewControl: false,
  });

  for (let i = 0; i < markers.length; i++) {
    const marker = new google.maps.Marker({
      position: markers[i],
      map,
      title: markers[i].name,
    });
    marker.addListener("click", () => {
      markerClicked();
    });
  }
}

function markerClicked() {
  alert("not supported yet");
}

function addMarker() {
  markers.push({ lat: 40.7971165, lng: -77.871483 });
}
function logOut() {
  console.log("logged out");
  window.location = "./index.html";
}

const columnDefs = [
  { headerName: "Place", field: "name" },
  { headerName: "Food Type", field: "foodType", width: 210 },
  { headerName: "When", field: "when", type: "dateColumn" },
];

// specify the data
const rowData = markers;

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  defaultColDef: {
    resizable: true,
    filter: "agTextColumnFilter",
    // floatingFilter: true,
  },
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
  gridOptions.api.sizeColumnsToFit();
});
//7f5d842396486cb2
//AIzaSyCzr586TXljCXIHM-d4APVVIijry9rL8yo

// src =
//   "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzr586TXljCXIHM-d4APVVIijry9rL8yo&map_ids=7f5d842396486cb2&callback=initMap";
// async;

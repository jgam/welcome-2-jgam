/* map.js */

let googleMap
let myPlaces = []

function init(){
  googleMap = new google.maps.Map(document.getElementById('map'), {
  center: {lat:0, lng:0},
  zoom: 3
  })
  
  googleMap.markerList = []
  googleMap.addListener('click', addPlace)
  
  const placesFromLocalstorage = JSON.parse(localStorage.getItem('myPlaces'))
  // localStorage에 뭔가 있으면 현재 장소 리스트로 설정한다
  if (Array.isArray(placesFromLocalstorage)){
    myPlaces = placesFromLocalstorage
    renderMarkers()
  }
}

function addPlace(event){
  myPlaces.push({
    position: event.latLng
  })
  
  localStorage.setItem('myPlaces', JSON.stringify(myPlaces))
  renderMarkers()
}

function renderMarkers(){
  googleMap.markerList.forEach(m => m.setMap(null))//모든 

}

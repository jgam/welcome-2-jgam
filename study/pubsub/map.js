/* map.js */

let googleMap
let myPlaces = []

function init(){//함수는 Google Maps API를 사용하여 지도를 활성화하고, 지도에 클릭액션을 설정한 뒤 localStorage에 있는 마커들을 불러오려합니다.
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

function addPlace(event){//지도를 클릭할때 리스트에 새로운 장소를 추가하고 마커랜더링을 실행합니다.
  myPlaces.push({
    position: event.latLng
  })
  
  localStorage.setItem('myPlaces', JSON.stringify(myPlaces))
  renderMarkers()
}

function renderMarkers(){//배열 안에있는 장소들을 순회하여 지도를 정리한 다음에 그 위에 마커를 그립니다.
  googleMap.markerList.forEach(m => m.setMap(null))//모든 마커제거
  googleMap.markerList = []
  
  //myPlaces 배열의 요소를 기반으로 마커를 추가한다
  myPlaces.forEach(places => {
    const marker = new google.maps.Marker({
      position: place.position,
      map: googleMap
    })
    
    googleMap.markerList.push(marker)
  })
}

init()//Google Maps API를 사용하여 지도를 활성화하고, 지도에 클릭 액션을 설정한 뒤 localStorage에 있는 마커들을 불러오려 합니다.

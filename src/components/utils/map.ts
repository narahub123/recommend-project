export const initMap = (
  state: { latitude: number; longitude: number },
  radius: number
) => {
  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(state.latitude, state.longitude),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container as HTMLElement, options);

  // 마커가 표시될 위치입니다
  var markerPosition = options.center;

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  var iwContent =
      '<div style="padding:5px; text-align:center; width: 150px">내 위치</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(state.latitude, state.longitude); //인포윈도우 표시 위치입니다

  // 인포윈도우를 생성합니다
  var infowindowUser = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
    zIndex: 1,
  });

  // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  infowindowUser.open(map, marker);

  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  var infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 장소 검색 객체 생성
  var places = new kakao.maps.services.Places(map);

  // 카테고리로 식당을 검색
  places.categorySearch("FD6", placesSearchCB, {
    // options
    radius, // 중심 좌표로부터의 거리(반경) 필터링 값
    location: options.center, // 중심 좌표
    useMapBounds: true,
    // 지정된 map 객체의 중심 좌표를 사용할지의 여부 참일 경우 location 속성 무시된다고
    // 되어 있는데 radius와 사용할 때는 location이 있어야 반경이 제대로 반영되는 듯
  });

  // 키워드 검색 완료시 호출되는 콜백 함수
  function placesSearchCB(data: any[], status: string, pagination: any) {
    if (status === kakao.maps.services.Status.OK) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);

        displayMarker(data[i]);
      }
    }
  }

  function displayMarker(place: any) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트 등록
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출
      infoWindow.setContent(
        `<div style="padding: 5px; font-size:12px; width: 150px; text-align:center">${place.place_name}</div>`
      );

      infoWindow.open(map, marker);
    });
  }
};

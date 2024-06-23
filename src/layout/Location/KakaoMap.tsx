import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

export default function KakaoMap() {
  const [_, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_APP_KAKAOMAPS_CLIENT_ID!, // 발급 받은 APPKEY
    // ...options,
  })
  console.log(error);
  if (error) return <div>Error</div>
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}
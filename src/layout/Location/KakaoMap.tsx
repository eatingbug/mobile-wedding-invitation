import { Map, MapMarker, CustomOverlayMap, useKakaoLoader } from "react-kakao-maps-sdk"
import weddingIcon from '@/assets/icons/wedding.png';

export default function KakaoMap() {
  const [_, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_APP_KAKAOMAPS_CLIENT_ID!, // 발급 받은 APPKEY
    // ...options,
  })
  if (error) return <div>Error</div>

  const position = { lat: 37.567126, lng: 126.82673 };

  const markerImage = {
    src: weddingIcon, // 마커 이미지 URL
    size: { width: 30, height: 30 },
    options: { offset: { x: 15, y: 32 } },
  };

  return (
    <Map
      center={position}
      style={{ width: '100%', height: '100%' }}
      level={4}
    >
      <MapMarker position={position} image={markerImage} />
      <CustomOverlayMap position={position} yAnchor={1.85}>
        <div style={{
          background: 'white',
          border: '1px solid #ccc',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          fontSize: '0.9rem',
          color: '#000'
        }}>
          {/* <div style={{ fontWeight: 'bold' }}>보타닉파크웨딩</div> */}
          <a href="https://map.kakao.com/link/map/1089036510" target="_blank" rel="noreferrer" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'none' }}>
            보타닉파크웨딩
          </a>
          {/* <a
            href="https://map.kakao.com/link/to/1089036510"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue', textDecoration: 'none' }}
          >
            길찾기
          </a> */}
        </div>
      </CustomOverlayMap>
    </Map>
  );
};
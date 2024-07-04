import { Map, MapMarker, CustomOverlayMap, useKakaoLoader } from "react-kakao-maps-sdk"
import styled from '@emotion/styled';
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
    size: { width: 34, height: 34 },
    options: { offset: { x: 17, y: 38 } },
  };

  return (
    <Map
      center={position}
      style={{ width: '100%', height: '360px' }}
      level={4}
    >
      <MapMarker position={position} image={markerImage} />
      <CustomOverlayMap position={{ lat: 37.567926, lng: 126.82673 }} yAnchor={1}>
        <OverlayContent>
          <a href="https://map.kakao.com/link/map/1089036510" target="_blank" rel="noreferrer">
            <span className="title">보타닉파크웨딩</span>
          </a>
        </OverlayContent>
      </CustomOverlayMap>
    </Map>
  );
};

const OverlayContent = styled.div`
  background: white;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  .title {
    font-weight: bold;
    color: #000;
  }
`;
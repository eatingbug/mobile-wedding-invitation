import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import weddingIcon from '@/assets/icons/wedding.png';

export default function KakaoMap() {
  const [_, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_APP_KAKAOMAPS_CLIENT_ID!, // 발급 받은 APPKEY
    // ...options,
  })
  if (error) return <div>Error</div>

  const mapRef = useRef<any>(null); // 지도 인스턴스를 참조하기 위한 ref
  const [center, setCenter] = useState({ lat: 37.567126, lng: 126.82673 });
  const position = { lat: 37.567126, lng: 126.82673 };

  const markerImage = {
    src: weddingIcon, // 마커 이미지 URL
    size: { width: 30, height: 30 },
    options: { offset: { x: 15, y: 32 } },
  };

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        const map = mapRef.current;
        const newCenter = map.getCenter();
        setCenter({
          lat: newCenter.getLat(),
          lng: newCenter.getLng(),
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  )
  return (
    <Map
      center={center}
      style={{ width: '100%', height: '100%' }}
      level={4}
      ref={mapRef}
        onCenterChanged={(map) => {
          const newCenter = map.getCenter();
          setCenter({
            lat: newCenter.getLat(),
            lng: newCenter.getLng(),
          });
        }}
    >
      <MapMarker position={position} image={markerImage}>
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        <div style={{ padding: "5px", color: "#000" }}>
          보타닉파크웨딩 <br />
          <a
            href="https://map.kakao.com/link/map/1089036510"
            style={{ color: "blue" }}
            target="_blank"
            rel="noreferrer"
          >
            지도보기
          </a>{" "}
          <a
            href="https://map.kakao.com/link/to/1089036510"
            style={{ color: "blue" }}
            target="_blank"
            rel="noreferrer"
          >
            길찾기
          </a>
        </div>
      </MapMarker>
    </Map>
  );
};


const MarkerText = styled.span`
  background: white;
  border: 1px solid #ccc;
  padding: 2px 5px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  color: #000;
  white-space: nowrap;
  position: absolute;
  // bottom: 100%; /* 마커의 상단에 위치하게 합니다 */
  left: 50%;
  transform: translateX(40%); /* 수평 중심 맞춤 */
  margin-bottom: 10px; /* 마커와의 간격 */
`;
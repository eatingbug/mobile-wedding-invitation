import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
// import mapImage from '@/assets/images/4.svg'
import KakaoMap from './KakaoMap.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      {/* <MainImg src={mapImage}/> */}
      <MapContainer>
        <KakaoMap />
      </MapContainer>
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 360px;

  @media (max-width: 768px) {
    height: 300px; // 모바일에서 지도의 높이를 더 작게 설정
  }

  @media (max-width: 480px) {
    height: 250px; // 더 작은 화면에서 지도의 높이를 더 작게 설정
  }
`;
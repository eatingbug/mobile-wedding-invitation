import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
import mapImage from '@/assets/images/4.svg'
// import KakaoMap from './KakaoMap.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <MainImg src={mapImage}/>
      {/* <KakaoMap /> */}
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

const MainImg = styled.img`
  max-width: 800px;
  padding-top: 20px;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;
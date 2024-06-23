import styled from '@emotion/styled';
import React from 'react';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import subImg1 from '@/assets/images/5.svg'
import subImg2 from '@/assets/images/6.svg'

const Invitation = () => {
  const { greeting } = data;
  const hightlight = "2024년 9월 29일"
  const parts = greeting.outro.split(hightlight);

  return (
    <InvitationWrapper>
      <MainImg src={subImg1} />
      <SubTitle>{greeting.intro}</SubTitle>
      <ImageContainer>
        <MainImg src={subImg2} />
        <OverlayText>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < parts.length -1 && <HighlightedText>{hightlight}</HighlightedText>}
            </React.Fragment>
          ))}
          </OverlayText>
      </ImageContainer>
        <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href=""
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;

const MainImg = styled.img`
  width: 100%;
  max-width: 600px;
  padding-top: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px; /* 원하는 너비로 설정 */
  overflow: hidden;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 80%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  line-height: 1.5rem;
  white-space: pre-line;
  border-radius: 10px;
`;

const HighlightedText = styled.span`
  color: navy; /* 특정 문자열에 대한 색상 변경 */
`;
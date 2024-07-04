import styled from '@emotion/styled';
import React from 'react';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
// import RoundButton from '@/components/RoundButton.tsx';
import { Paragraph } from '@/components/Text.tsx';
import subImg1 from '@/assets/images/sub1.jpg'
import subImg2 from '@/assets/images/sub2.jpg'

const Invitation = () => {
  const { greeting } = data;
  const hightlight = "2024년 9월 29일"
  const parts = greeting.outro.split(hightlight);

  return (
    <InvitationWrapper>
      <MainImg src={subImg1} />
      <Paragraph>{greeting.intro}</Paragraph>
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
      <br/>
      <Host />
      {/* <Caption textAlign={'center'}>{greeting.eventDetail}</Caption> */}
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      {/* <RoundButton
        target="_blank"
        href=""
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton> */}
    </InvitationWrapper>
  );
};

export default Invitation;
const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 5px;
`;

const MainImg = styled.img`
  width: 90%;
  max-width: 400px;
  height: auto;
  padding-top: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 90%;
    padding: 8px 16px;
  }
`;

const HighlightedText = styled.span`
  color: navy;
`;
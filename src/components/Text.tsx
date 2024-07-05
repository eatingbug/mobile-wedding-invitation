import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  line-height: 1;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem; /* 기본 글꼴 크기 */
  color: #2f2120;
  line-height: 1.5rem;
  white-space: pre-line;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 90%;
    padding: 8px 16px;
  }
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;

  @media (max-width: 768px) {
    /* 화면 폭이 768px 이하일 때의 스타일 */
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* 화면 폭이 769px 이상이고 1024px 이하일 때의 스타일 */
    font-size: 18px;
  }

  @media (min-width: 1025px) {
    /* 화면 폭이 1025px 이상일 때의 스타일 */
    font-size: 18px;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 312px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    min-width: 1020px;
  }
`;

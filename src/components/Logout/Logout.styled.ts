import styled from 'styled-components';

export const Container = styled.div`
  width: 312px;

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const Button = styled.button`
  padding: 7px 15px;
  border: none;
  border-radius: 15px;
  background-color: #00b0c8;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    background-color: #75ea64;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.li``;

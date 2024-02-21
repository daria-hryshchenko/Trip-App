import styled from 'styled-components';
import { ReactComponent as IClose } from '../../assets/icons8-close-10.svg';

export const ModalDiv = styled.div<{ block: string }>`
  display: ${(p) => p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  background: white;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px 0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  weight: 30px;
  height: 30px;
`;

export const IconClose = styled(IClose)`
  fill: #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // padding: 0 20px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  border-top: 2px solid #f2f2f2;
  padding: 20px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: right;
  border-top: 2px solid #f2f2f2;
  padding: 20px;
`;

export const Select = styled.select`
  padding: 10px 30px 10px 10px;
  font-size: 16px;
  opacity: 0.3;
`;

export const Input = styled.input`
  border: 1px solid grey;
  padding: 10px;
  font-size: 16px;
  opacity: 0.3;
  &[type='date']::-webkit-calendar-picker-indicator {
    margin: 0;
    margin-right: 20px !important;
    color: #e5e5e5;
    opacity: 0.3;
  }
`;

export const FormButton = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  background-color: transparent;
  color: #000;

  &[type='submit'] {
    background-color: blue;
    color: white;
    border: none;
  }
`;

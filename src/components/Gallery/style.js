import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Container = styled.div`
  margin-top: 2vh;
  width: 100%;

  ul {
    width: 95%;
    display: flex;
    flex-direction: column-reverse;
  }
  @media ${device.mobile} {
    width: 97%;
  }
  @media ${device.tablet} {
    width: 97%;
  }
  @media ${device.small_screen} {
    width: 97%;
  }
`;

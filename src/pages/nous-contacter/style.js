import styled from 'styled-components';
import { device } from '../../layout/Devices';
export const Container = styled.div`
  height: 220vh;
  background: url('/images/mix_nb.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.mobile} {
    height: 120vh;
    justify-content: flex-start;
    background-size: 100% 50%;
    background-repeat: repeat;
  }
  @media ${device.small_screen} {
    min-height: 130vh;
    max-height: 150vh;
    background-size: 100%;
  }
  @media ${device.tablet} {
    min-height: 100vh;
    max-height: 140vh;
    background-size: 100% 50%;
    background-repeat: repeat;
  }
  @media ${device.desktop} {
    min-height: 70vh;
    max-height: 120vh;
    background-size: 100% 100%;
  }
`;
export const ContactContainer = styled.div`
  height: 220vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${device.mobile} {
    height: 120vh;
    justify-content: flex-start;
  }
  @media ${device.small_screen} {
    min-height: 130vh;
    max-height: 150vh;
  }
  @media ${device.tablet} {
    min-height: 100vh;
    max-height: 140vh;
  }
  @media ${device.desktop} {
    min-height: 70vh;
    max-height: 120vh;
  }
`;
export const Tit = styled.div`
  padding: 5vh 0;
`;
export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 3vh auto 20vh auto;
    width: 25vw;
    min-height: 40vh;
    max-height: 60vh;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: #b3babdca;
    -moz-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    @media ${device.smallScreen} {
      width: 100%;
      min-height: 80vh;
      max-height: 110vh;
    }
    @media ${device.tablet} {
      margin: 2vh auto 10vh auto;
      width: 70vw;
      min-height: 65vh;
      max-height: 90vh;
    }
    @media ${device.mobile} {
      margin: 0 auto 2vh auto;
      width: 70vw;
      max-height: 35vh;
      max-height: 45vh;
    }
  }
  textarea {
    background: white no-repeat scroll 16px 16px;
    width: 25vw;
    height: 20vh;
    border: 1px solid rgba(255, 255, 255, 0.6);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: gray;
    padding: 1vh auto;
    margin: 2vh auto;
    margin-bottom: 3vh;
    overflow: hidden;
    @media ${device.smallScreen} {
      width: 55vw;
      margin-bottom: 1vh;
    }
    @media ${device.tablet} {
      width: 66vw;
      margin-bottom: 1vh;
    }
    @media ${device.mobile} {
      width: 70vw;
      margin-bottom: 1vh;
    }
    @media ${device.desktop} {
      width: 53vw;
    }
  }
  textarea::-webkit-input-placeholder {
    padding-top: 10px;
    padding-left: 40px;
  }
  textarea::-moz-input-placeholder {
    padding-top: 10px;
    padding-left: 40px;
  }
  textarea:-moz-input-placeholder {
    padding-top: 10px;
    padding-left: 40px;
  }
  textarea:-ms-input-placeholder {
    padding-top: 10px;
    padding-left: 40px;
  }

  input {
    width: 22vw;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: gray;
    padding: 5vh auto;
    margin: 2vh auto;
    @media ${device.smallScreen} {
      width: 50vw;
      margin: 1vh auto;
    }
    @media ${device.tablet} {
      width: 60vw;
      margin: 1vh auto;
    }
    @media ${device.mobile} {
      width: 58vw;
      margin: 1vh auto;
    }
  }
  input[type='submit'] {
    cursor: pointer;
  }
  input.name {
    background: white no-repeat scroll 16px 16px;
    padding-left: 45px;
  }

  input.email {
    background: white no-repeat scroll 16px 20px;
    padding-left: 45px;
  }

  input.message {
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 16px;
    padding-left: 45px;
  }

  ::-webkit-input-placeholder {
    color: gray;
  }

  :-moz-placeholder {
    color: gray;
  }

  :-ms-input-placeholder {
    color: gray;
  }

  select:focus {
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }

  select {
    width: 25vw;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: gray;
    padding: 5vh auto;
    margin: 2vh auto;
    background: white no-repeat scroll 16px 16px;
    padding-left: 45px;
    @media ${device.smallScreen} {
      width: 55.5vw;
    }
    @media ${device.tablet} {
      width: 66vw;
    }
    @media ${device.mobile} {
      width: 71vw;
    }
    @media ${device.desktop} {
      width: 53vw;
    }
  }

  .btn {
    width: 138px;
    height: 44px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    float: right;
    border: 1px solid #253737;
    background: #727373b5;
    background: -webkit-gradient(linear, left top, left bottom, from(#727373b5), to(#c5c7c7));
    background: -webkit-linear-gradient(top, #c5c7c7, #727373b5);
    background: -moz-linear-gradient(top, #c5c7c7, #727373b5);
    background: -ms-linear-gradient(top, #c5c7c7, #727373b5);
    background: -o-linear-gradient(top, #c5c7c7, #727373b5);
    background-image: -ms-linear-gradient(top, #c5c7c7 0%, #727373b5 100%);
    padding: 10.5px 21px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    color: #373838;
  }
  input.btn {
    @media ${device.tablet} {
      float: none;
    }
    @media ${device.mobile} {
      float: none;
    }
  }

  .btn:hover {
    border: 1px solid #253737;
    text-shadow: #333333 0 1px 0;
    background: #416b68;
    background: -webkit-gradient(linear, left top, left bottom, from(#77b2b0), to(#416b68));
    background: -webkit-linear-gradient(top, #77b2b0, #416b68);
    background: -moz-linear-gradient(top, #77b2b0, #416b68);
    background: -ms-linear-gradient(top, #77b2b0, #416b68);
    background: -o-linear-gradient(top, #77b2b0, #416b68);
    background-image: -ms-linear-gradient(top, #77b2b0 0%, #416b68 100%);
    color: #fff;
  }

  .btn:active {
    margin-top: 1px;
    text-shadow: #333333 0 -1px 0;
    border: 1px solid #253737;
    background: #6da5a3;
    background: -webkit-gradient(linear, left top, left bottom, from(#416b68), to(#416b68));
    background: -webkit-linear-gradient(top, #416b68, #609391);
    background: -moz-linear-gradient(top, #416b68, #6da5a3);
    background: -ms-linear-gradient(top, #416b68, #6da5a3);
    background: -o-linear-gradient(top, #416b68, #6da5a3);
    background-image: -ms-linear-gradient(top, #416b68 0%, #6da5a3 100%);
    color: #fff;
    -webkit-box-shadow: rgba(255, 255, 255, 0) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 0) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
  }
`;

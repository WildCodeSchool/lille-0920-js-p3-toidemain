import styled from "styled-components";
import { device } from "../../layout/Devices";

export const ContactContainer = styled.div`
  min-height: 80vh;
  max-height: 150vh;
  background-image: url("/images/meet.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${device.tablet} {
  }
`;
export const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 10vh;
  h1 {
    font-size: 50px;
    color: white;
    text-align: center;
    padding-top: 3vh;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 36px;
    }
  }
`;
export const FormContainer = styled.div`
  form {
    margin: 0 auto 7vh auto;
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
    background: #1c819e;
    -moz-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    @media ${device.tablet} {
      margin: 0 auto 10vh auto;
      width: 45vw;
      height: 45vh;
    }
  }
  textarea {
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 16px;
    width: 25vw;
    height: 10vh;
    border: 1px solid rgba(255, 255, 255, 0.6);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: white;
    padding: 1vh auto;
    margin: 2vh auto;
    margin-bottom: 3vh;
    overflow: hidden;
    @media ${device.tablet} {
      width: 45vw;
      margin-bottom: 1vh;
    }
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
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: white;
    padding: 5vh auto;
    margin: 2vh auto;
    @media ${device.tablet} {
      width: 38vw;
      margin: 1vh auto;
    }
  }
  input[type="submit"] {
    cursor: pointer;
  }
  input.name {
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 16px;
    padding-left: 45px;
    @media ${device.tablet} {
    }
  }

  input.email {
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 20px;
    padding-left: 45px;
    @media ${device.tablet} {
    }
  }

  input.message {
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 16px;
    padding-left: 45px;
    @media ${device.tablet} {
    }
  }

  ::-webkit-input-placeholder {
    color: whitesmoke;
  }

  :-moz-placeholder {
    color: whitesmoke;
  }

  :-ms-input-placeholder {
    color: whitesmoke;
  }

  input:focus,
  textarea:focus,
  select:focus {
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
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: white;
    padding: 5vh auto;
    margin: 2vh auto;
    background: rgba(255, 255, 255, 0.4) no-repeat scroll 16px 16px;
    padding-left: 45px;
    @media ${device.tablet} {
      width: 45vw;
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
    background: #416b68;
    background: -webkit-gradient(linear, left top, left bottom, from(#6da5a3), to(#416b68));
    background: -webkit-linear-gradient(top, #6da5a3, #416b68);
    background: -moz-linear-gradient(top, #6da5a3, #416b68);
    background: -ms-linear-gradient(top, #6da5a3, #416b68);
    background: -o-linear-gradient(top, #6da5a3, #416b68);
    background-image: -ms-linear-gradient(top, #6da5a3 0%, #416b68 100%);
    padding: 10.5px 21px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
    text-shadow: #333333 0 1px 0;
    color: #e1e1e1;
  }
  input.btn {
    @media ${device.tablet} {
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
    @media ${device.tablet} {
    }
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
  @media ${device.tablet} {
  }
`;

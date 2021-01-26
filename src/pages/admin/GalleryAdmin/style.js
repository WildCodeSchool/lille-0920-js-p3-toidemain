import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// Gallery Edit

export const ContainerEditGallery = styled.div`
  width: 50%;
  h2 {
    text-align: center;
    font-size: 24px;
  }
`;
export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  input {
    margin: 7px auto;
    width: 280px;
    height: 30px;
  }
  button {
    margin: 7px auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  i {
    margin-left: 20px;
  }
`;

// Galery Item

export const ContainerGalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100px;
  }
`;

import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 2px solid;
  width: 90%;
  h3 {
    font-size: 1.5rem;
    color: #005542;
    padding: 4px;
  }
  .date {
    font-weight: bold;
    color: #1c819e;
    font-size: 1.2rem;
  }
`;

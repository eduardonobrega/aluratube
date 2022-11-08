import styled from 'styled-components';

export const Container = styled.div`
  & > img {
    width: 100%;    
    height: 23rem;
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    padding: 1.6rem;
  }

  .user-info img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
`;

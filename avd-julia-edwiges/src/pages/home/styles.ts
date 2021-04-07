import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  color: #800000;
  line-height: 100px;
  max-width: 550px;
  margin: 10px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  max-width: 560px;
  margin: 0 auto;

  .form-input {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Usuarios = styled.ul`
  display: flex;
  list-style: none;
`;

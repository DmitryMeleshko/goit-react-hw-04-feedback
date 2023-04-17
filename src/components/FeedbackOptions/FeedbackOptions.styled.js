import styled from '@emotion/styled';

export const Box = styled.div`
display: flex;
justify-content: center;
gap: 18px;
`;

export const Button = styled.button`
padding: 7px 24px;
text-transform: uppercase;
cursor: pointer;
border: none;
border-radius: 4px;
background-color: #2196f3;
&:hover {
    background-color: #188ce8;
}
`;
import styled from 'styled-components';

export const Nav = styled.div`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: lightgrey;
display: flex;
justify-content: space-around;
${media.mobile`
    background-color: white
    display: flex;
    justify-content: space-around;
`}
`;


export const StyledLink = styled(Link)`

    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    text-decoration-color: ;
    ${media.mobile`
      background-color: black;
      flex-wrap: wrap;
    `}
  
`;

export default NavbarStyle;
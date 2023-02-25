import React from 'react';
import styled from 'styled-components';
export default function StyledComponent() {
  // Use Title and Wrapper like any other React component – except they're styled!

  return <Button>This my button component.</Button>;
}

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => (props.primary ? 'palevioletred' : 'white')};
//   color: ${props => (props.primary ? 'white' : 'palevioletred')};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

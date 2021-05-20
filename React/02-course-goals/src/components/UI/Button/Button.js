import React from 'react';

// CSS MODULES WAY
import styles from './Button.module.css'; // styles is a chosen name, can be everything else
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


// STYLED COMPONENTS WAY
// import styled from 'styled-components';
// Tag function, use template literal as parameters
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   margin-top: 1rem;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//
//   @media (min-width: 768px) {
//     width: auto;
//   }
//
//   &:focus {
//     outline: none;
//   }
//
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// CLASSIC WAY WITH CSS FILE AND GLOBAL SCOPE CSS
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;

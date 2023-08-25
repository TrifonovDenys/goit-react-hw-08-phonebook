import styled from 'styled-components';
import FilteredPropsInputField from './FilteredPropsInputField';

// import { Field } from 'formik';

export const Label = styled.label`
  position: absolute;
  top: ${({ focused }) => (focused ? '0' : '50%')};
  left: 3%;
  transform: translate(0, ${({ focused }) => (focused ? '-100%' : '-50%')});
  color: ${({ focused }) =>
    focused ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.8)'};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  pointer-events: none;
`;

export const Input = styled(FilteredPropsInputField)`
  &:focus + ${Label} {
    top: 0;
    transform: translate(0, -100%);
  }
`;

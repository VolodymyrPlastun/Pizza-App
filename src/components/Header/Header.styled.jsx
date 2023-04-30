import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  margin-right: 16px;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;

  &.${props => props.activeclassname} {
    color: darkblue;
    text-decoration: underline;
  }
`;

export const AmountBox = styled(Box)`
  position: relative;
`;

export const AmountLg = styled.div`
  position: absolute;
  top: -0.8rem;
  right: -0.6rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalLg = styled.p`
  position: absolute;
  top: -1.1rem;
  color: white;
  margin-bottom: 0;
  font-size: 1.25rem;
`;

export const AmountSm = styled.div`
  position: absolute;
  top: -1rem;
  right: -0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalSm = styled.p`
  position: absolute;
  top: -1rem;
  color: white;
  margin-bottom: 0;
  font-size: 1rem;
`;

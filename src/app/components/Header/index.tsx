/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Header(props: Props) {
  return (
    <Div>
      <Logo />
      <Title>Nord Software</Title>
    </Div>
  );
}

const Div = styled.div`
  padding: 32px;
  width: 912px;
  background-color: #adb5bd;
  width: 976px;
`;
const Logo = styled.img.attrs(props => ({
  src: 'https://fakeimg.pl/32/',
}))`
  display: inline;
  vertical-align: middle;
`;
const Title = styled.h1`
  display: inline;
  margin-left: 16px;
  vertical-align: middle;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
`;

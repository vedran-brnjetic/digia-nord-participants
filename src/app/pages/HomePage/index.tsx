import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Participants | Digia</title>
        <meta name="description" content="Participants page for Digia" />
      </Helmet>
      <Header></Header>
      <span>HomePage container</span>
    </>
  );
}

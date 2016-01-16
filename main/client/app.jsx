import React from 'react';

export const Layout = ({content}) => (
  <div>
    <header>
      This is header
    </header>
    <main>
      {content()}
    </main>
  </div>
);

export const WelcomeComponent = ({name}) => (
  <div>
    Hello, {name}
  </div>
);

import React from 'react';
import Clock from './2-4/Clock';
import Composition from './2-5/Composition';
import Extraction from './2-5/Extraction';
import ClassClock from './2-6/ClassClock';
import Event from './2-7/Event';
import Greeting from './2-8/Greeting';

function Basepage() {

  return (
    <>
      <div>
        Hello React
      </div>
      <Greeting />
    </>
  );
}

export default Basepage;

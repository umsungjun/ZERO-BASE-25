import React from 'react';
import Controlled from './2-10/Controlled';
import UnControlled from './2-10/UnControlled';
import Clock from './2-4/Clock';
import Composition from './2-5/Composition';
import Extraction from './2-5/Extraction';
import ClassClock from './2-6/ClassClock';
import Event from './2-7/Event';
import Greeting from './2-8/Greeting';
import List from './2-9/List';


function Basepage() {

  return (
    <>
      <div>
        Hello React
      </div>
      <Controlled />
      <UnControlled />
    </>
  );
}

export default Basepage;

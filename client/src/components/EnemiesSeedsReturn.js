import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import EnemiesSeed1Canvas from './EnemiesSeed1Canvas';
import EnemiesSeed2Canvas from './EnemiesSeed2Canvas';
import EnemiesSeed3Canvas from './EnemiesSeed3Canvas';


function EnemiesSeedsReturn({enemySeed1Ref,enemySeed2Ref,enemySeed3Ref  }) {

  
  return (
    <>
    {/* level 2 */}
    <EnemiesSeed1Canvas enemySeed1Ref = {enemySeed1Ref}/>
    <EnemiesSeed2Canvas enemySeed2Ref = {enemySeed2Ref}/>
    <EnemiesSeed3Canvas enemySeed3Ref = {enemySeed3Ref}/>
    </>
  );
}

export default EnemiesSeedsReturn;

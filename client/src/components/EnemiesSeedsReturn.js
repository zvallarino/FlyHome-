import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import EnemiesSeed1Canvas from './EnemiesSeed1Canvas';
import EnemiesSeed2Canvas from './EnemiesSeed2Canvas';
import EnemiesSeed3Canvas from './EnemiesSeed3Canvas';


function EnemiesSeedsReturn({enemySeed1Ref,enemySeed2Ref,enemySeed3Ref}) {

   
    function getRandomInt(max) {
         return Math.floor(Math.random() * max);
    }

    let randomNumber = getRandomInt(3);
    
    const seedsStack = () => {
        if(randomNumber === 2){
        return <>
    <EnemiesSeed1Canvas enemySeed1Ref = {enemySeed1Ref}/>
    <EnemiesSeed2Canvas enemySeed2Ref = {enemySeed2Ref}/>
    <EnemiesSeed3Canvas enemySeed3Ref = {enemySeed3Ref}/>
    </>
    }
    else if (randomNumber === 1){
    return <>
        <EnemiesSeed1Canvas enemySeed1Ref = {enemySeed1Ref}/>
        <EnemiesSeed2Canvas enemySeed2Ref = {enemySeed2Ref}/>
        </>
    } else {
        return <><EnemiesSeed1Canvas enemySeed1Ref = {enemySeed1Ref}/></>
    }}

  
  return (
    <>
    {/* level 2 */}
    {seedsStack(randomNumber)}
    </>
    );
}

export default EnemiesSeedsReturn;

import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import EnemyPlane1Canvas from './EnemyPlane1Canvas';
import EnemyPlane2Canvas from './EnemyPlane2Canvas';
import EnemyPlane3Canvas from './EnemyPlane3Canvas';



function EnemiesPlanesReturn({enemyPlane1Ref,enemyPlane2Ref,enemyPlane3Ref}) {

   
    function getRandomInt(max) {
         return Math.floor(Math.random() * max);
    }

    let randomNumber = getRandomInt(3);
    
    const planesStack = () => {
        if(randomNumber === 2){
        return <>
    <EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/>
    <EnemyPlane2Canvas enemyPlane2Ref = {enemyPlane2Ref}/>
    <EnemyPlane3Canvas enemyPlane3Ref = {enemyPlane3Ref}/>
    </>
    }
    else if (randomNumber === 1){
    return <>
        <EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/>
        <EnemyPlane2Canvas enemyPlane2Ref = {enemyPlane2Ref}/>
        </>
    } else {
        return <><EnemyPlane1Canvas enemyPlane1Ref = {enemyPlane1Ref}/></>
    }}

  
  return (
    <>
    {/* level 2 */}
    {planesStack(randomNumber)}
    </>
    );
}

export default EnemiesPlanesReturn;

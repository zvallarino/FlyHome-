import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import { useState,useEffect } from "react"
import GameCard from './GameCard';


function GameCardContainer({user}) {


  const [games,setGames] = useState([])

  // useEffect(()=>{
  //   fetch
  // },[])

  useEffect(()=>{
    fetch(`/users/${user.id}`)
    .then((r)=> r.json())
    .then((user)=> setGames(user.games))
},[])

let gameCardz = games.map((game)=><GameCard game={game} user = {user} key = {game.id}/>)



  return (
    <>
  {gameCardz}
    </>
  );
}

export default GameCardContainer;
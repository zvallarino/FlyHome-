import './App.css';

function GameTitleScreen() {

  const shootToLink = () => {
    window.location.href = "/flyhome"
  }
  
    return (
      <div onClick = {shootToLink} className='GameTitle'>
      <img src = "https://i.imgur.com/OF9NPa5.png"></img>
      </div>
    );
}

export default GameTitleScreen;
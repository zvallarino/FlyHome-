import './App.css';

function FlyHomeTitleScreen({setDisappearFlyHome}) {
  setDisappearFlyHome(true)

  const shootToLink = () => {
    setDisappearFlyHome(true)
    window.location.href = "/flyhomemainmenu"
  }
  
    return (
      <div onClick = {shootToLink} className='GameTitle'>
     
      <img src = "https://i.imgur.com/OF9NPa5.png"></img>
      </div>
    );
}

export default FlyHomeTitleScreen;
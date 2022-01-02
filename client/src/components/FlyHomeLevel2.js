import './App.css';
import CloudsMoving from './CloudsMoving';
import CloudsStatic from './CloudsStatic';
import SeaCanvas from './SeaCanvas';
import BackgroundCanvas from './BackgroundCanvas';
import CommanderSketchPlane from './CommanderSketchPlane';
import EnemiesALevel2 from './EnemiesALevel2';
import CommanderSketchLevel2 from './CommanderSketchLevel2';



function FlyHomeLevel2() {

  return (
    <>
    <EnemiesALevel2 />
    <CommanderSketchLevel2 />
    <CommanderSketchPlane />
    <CloudsMoving />
    <CloudsStatic />
    <SeaCanvas />
    <BackgroundCanvas />
    </>
  );
}

export default FlyHomeLevel2;
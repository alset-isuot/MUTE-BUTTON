//import logo from './logo.svg';    -- not needed here
import { useState } from 'react'
import './App.css';
import MuteButton from './components/buttons/MuteButton';

function App() {
  const [isMuted, setIsMuted] = useState(false) //hook

  // Toggle Mute Function --function for that toggles true or false, (on or off), yes no, for 'mute' button, responsible for changing the stae of the app component but we're passing that toggleMute function down to its child's component, inside the MuteButton component
  // we're also going to be passing in toggleMute as a prop
  const toggleMute = () => {
    // literally going to set isMuted
    setIsMuted(!isMuted)
  }

  //console.log('IS MUTED? ', isMuted) --testing
  /* 
  return (
    <div className="App">
      <button onClick = {() => console.log('clicked')}>Is this muted?</button>
    </div>
  );
  */

 /* 
   return (
    <div className="App">
      <button onClick={toggleMute}>Is this muted?</button>
    </div>
  );
 */

  //will be invoking the mute button <MuteButton>, passing in props: isMuted and toggleMute
  return (
    <div className="App">
      <MuteButton isMuted={isMuted} toggleMute={toggleMute} />
    </div>
  );
}

export default App;
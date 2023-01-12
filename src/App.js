import logo from './logo.svg';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import { authentication } from './firebase-config';

function App() {
  const signInWithTwitter = ()=>{

    const provider = new TwitterAuthProvider()
    signInWithPopup(authentication, provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signInWithTwitter}>
          sign in with twitter
        </button>
      </header>
    </div>
  );
}

export default App;

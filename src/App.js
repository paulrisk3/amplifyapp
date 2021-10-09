import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2 - Now With Auth!</h1>
        <p>I think this is gonna be expensive.</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

// main imports yjs valtio valtio-yjs y-webrtc
import * as Y from "yjs";
import {bindProxyAndYMap} from "valtio-yjs";
import {WebrtcProvider} from "y-webrtc";
import {proxy, subscribe, useSnapshot} from "valtio";


// use all our imports for config.
const ydoc = new Y.Doc();
const ymap = ydoc.getMap("map");
const provider = new WebrtcProvider("test2",ydoc);

const store = proxy({});
bindProxyAndYMap(store, ymap);

function App() {
  const [button, setButton] = useState("");

  const snap = useSnapshot(store);

  useEffect(()=> {console.log(snap)}, [snap]);
  return (
    <div className="App">
      <input type="text" value={button} onChange={(e)=>{setButton(e.target.value)}}/>
      <button onClick={()=>{
        store[button] = "Value saved🥳";
      }}>Submit</button>
    </div>
  );
}

export default App;

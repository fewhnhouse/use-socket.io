import React from 'react'
import logo from './logo.svg'
import { SocketProvider, useSocket } from 'use-socket-io'
import './App.css'

const SocketUser = () => {
  const [data, emit] = useSocket('test')
  const handleClick = () => {
    emit('test')
  }
  return (
    <div>
      <button onClick={handleClick}>Test Event</button>
    </div>
  )
}

const App = () => {
  return (
    <SocketProvider uri="ws://localhost:4000">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <SocketUser />
        </header>
      </div>
    </SocketProvider>
  )
}

export default App

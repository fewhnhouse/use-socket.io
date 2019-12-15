import React from 'react'
import { SocketProvider, useSocket } from 'use-socket-io'

const SocketUser = () => {
  const [data, emit] = useSocket<string, string>('eventName')
  const handleClick = () => {
    emit('message')
  }
  return (
    <div>
      <h1>Data: {data}</h1>
      <button onClick={handleClick}>Test Event</button>
    </div>
  )
}

const App = () => {
  return (
    <SocketProvider uri="ws://localhost:4000">
      <SocketUser />
    </SocketProvider>
  )
}

export default App

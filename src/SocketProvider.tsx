import React from 'react'
import { Context } from './SocketContext'
import * as io from 'socket.io-client'

export interface ISocketProviderProps {
  uri: string
  options?: {
    [key: string]: any
  }
  children: React.ReactNode
}

const Provider = ({ uri, options, children }: ISocketProviderProps) => {
  const socket = io(uri, options)

  return <Context.Provider value={socket}>{children}</Context.Provider>
}

export default Provider

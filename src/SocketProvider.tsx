import React from 'react'
import { Context } from './SocketContext'
import * as io from 'socket.io-client'

export interface ISocketProviderProps {
  url: string
  options?: {
    [key: string]: any
  }
  children: React.ReactNode
}

const Provider = ({ url, options, children }: ISocketProviderProps) => {
  const socket = io(url, options)

  return <Context.Provider value={socket}>{children}</Context.Provider>
}

export default Provider

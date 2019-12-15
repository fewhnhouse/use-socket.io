import { createContext } from 'react'

export const Context = createContext<SocketIOClient.Socket | undefined>(undefined)

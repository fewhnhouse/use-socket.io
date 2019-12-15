import { useContext } from 'react'
import { Context } from './SocketContext'

export function useClient() {
    const socket = useContext(Context)
    return socket
}

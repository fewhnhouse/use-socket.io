import Provider from './provider'
import { useSocket as useSocketLib } from './useSocket'
import { useState, useEffect } from 'react'

export const SocketProvider = Provider
export const useSocket = useSocketLib

export const useCustomHook = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    })
    return time
}


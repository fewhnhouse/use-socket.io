import { useContext, useEffect, useState } from 'react'
import { Context } from './SocketContext'

export function useSocket<ReceivingData, SendingData>(eventKey: string) {
  const socket = useContext(Context)
  const [data, setData] = useState<ReceivingData[]>([])

  const emit = (data: SendingData) => {
    socket?.emit(eventKey, data)
  }

  useEffect(() => {
    socket?.on(eventKey, (...args: ReceivingData[]) => {
      setData(args)
    })
    return () => {
      socket?.removeListener(eventKey)
    }
  }, [eventKey, socket])


  return [data, emit]
}

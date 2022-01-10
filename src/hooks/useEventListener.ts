import { SetStateAction, useEffect, useRef } from 'react'

export default function useEventListener(
  eventType: string,
  callback: {
    (e: { matches: boolean | ((prevState: boolean) => boolean) }): void
    (e: { key: SetStateAction<string> }): void
  },
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return

    const handler = (e: any) => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    // eslint-disable-next-line
    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

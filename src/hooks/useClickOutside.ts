import useEventListener from '../hooks/useEventListener'

export default function useClickOutside(ref: any, cb: any) {
  useEventListener(
    'click',
    (e: any) => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document as any
  )
}

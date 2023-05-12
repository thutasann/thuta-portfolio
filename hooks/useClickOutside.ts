import { RefObject, useEffect } from 'react'

const useOnClickOutside = (ref: RefObject<HTMLDivElement | HTMLUListElement>, handler: Function) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendaent elements
      if (!ref.current || ref.current.contains(event.targe)) {
        return
      }
      handler()
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside

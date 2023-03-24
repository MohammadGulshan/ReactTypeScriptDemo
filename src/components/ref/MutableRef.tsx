import { useState, useRef, useEffect, useCallback } from 'react'

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number | null>(null)

  const stopTimer = useCallback(() => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current)
	  console.log('Inside Stop Fun', timer)
    }
  }, [timer])
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
	  console.log('Inside set ', timer)
    }, 1000)
    return () => {
		console.log('Inside Stop ', timer)
		stopTimer()
    }
  }, [stopTimer, timer])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
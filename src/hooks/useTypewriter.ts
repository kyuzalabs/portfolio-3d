import { useEffect, useState } from 'react'

// Teks ketik bergantian (typewriter). Hormati prefers-reduced-motion.
export function useTypewriter(
  words: string[],
  typeSpeed = 70,
  deleteSpeed = 38,
  pause = 1600,
): string {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0] ?? '')
      return
    }
    const word = words[index % words.length]
    let timeout: number
    if (!deleting) {
      if (text.length < word.length) {
        timeout = window.setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed)
      } else {
        timeout = window.setTimeout(() => setDeleting(true), pause)
      }
    } else if (text.length > 0) {
      timeout = window.setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed)
    } else {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    }
    return () => window.clearTimeout(timeout)
  }, [text, deleting, index, words, reduceMotion, typeSpeed, deleteSpeed, pause])

  return text
}
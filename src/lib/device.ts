// Deteksi kemampuan perangkat — WebGL, layar sentuh, ukuran.
export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(pointer: coarse)').matches
}

export function isMobileWidth(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}
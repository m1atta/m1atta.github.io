import { useEffect, useRef } from 'react'

// ---------------------------------------------------------------------------
// GRID BACKGROUND — a fixed, full-viewport canvas rendered behind all page
// content. Draws a static blue schematic grid (fixed positions, no warping)
// and brightens the lines near the cursor, plus a soft blue glow that
// follows the mouse. Nothing here is interactive/clickable — pointer-events
// are disabled so it never blocks real page content.
//
// Respects prefers-reduced-motion: if the user has that OS setting on, the
// mouse-follow highlight/glow is skipped and only the flat base grid draws.
// ---------------------------------------------------------------------------

const SPACING = 46 // px between grid lines
const MAX_DPR = 1.5 // cap device-pixel-ratio so 4K/retina screens don't tank perf
const GLOW_RADIUS = 420
const HIGHLIGHT_RADIUS = 260

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let animationId = 0

    // Mouse position in CSS pixels. Starts off-screen so nothing glows
    // until the user actually moves the mouse.
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      canvas!.width = Math.floor(width * dpr)
      canvas!.height = Math.floor(height * dpr)
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (reduceMotion) draw()
    }

    function handleMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
      if (reduceMotion) draw()
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      // Soft blue glow that follows the cursor.
      if (mouse.x > -1000) {
        const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, GLOW_RADIUS)
        glow.addColorStop(0, 'rgba(59, 130, 246, 0.14)')
        glow.addColorStop(1, 'rgba(59, 130, 246, 0)')
        ctx!.fillStyle = glow
        ctx!.fillRect(0, 0, width, height)
      }

      // Fixed grid — positions never move. Only the line opacity brightens
      // near the cursor, so the grid itself doesn't warp or wave.
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1

      ctx!.lineWidth = 1

      for (let i = 0; i < cols; i++) {
        const x = i * SPACING
        for (let j = 0; j < rows - 1; j++) {
          const y = j * SPACING
          const dist = Math.hypot(x - mouse.x, y - mouse.y)
          const proximity = Math.max(0, 1 - dist / HIGHLIGHT_RADIUS)
          const alpha = 0.045 + proximity * 0.3
          ctx!.strokeStyle = `rgba(96, 165, 250, ${alpha})`
          ctx!.beginPath()
          ctx!.moveTo(x, y)
          ctx!.lineTo(x, y + SPACING)
          ctx!.stroke()
        }
      }

      for (let j = 0; j < rows; j++) {
        const y = j * SPACING
        for (let i = 0; i < cols - 1; i++) {
          const x = i * SPACING
          const dist = Math.hypot(x - mouse.x, y - mouse.y)
          const proximity = Math.max(0, 1 - dist / HIGHLIGHT_RADIUS)
          const alpha = 0.045 + proximity * 0.3
          ctx!.strokeStyle = `rgba(96, 165, 250, ${alpha})`
          ctx!.beginPath()
          ctx!.moveTo(x, y)
          ctx!.lineTo(x + SPACING, y)
          ctx!.stroke()
        }
      }
    }

    function loop() {
      draw()
      animationId = requestAnimationFrame(loop)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Reduced motion: redraw only on mouse move/resize (handled above),
    // no continuous animation loop needed since nothing moves on its own.
    if (!reduceMotion) {
      loop()
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}

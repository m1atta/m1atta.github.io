import { useEffect, useRef } from 'react'

// ---------------------------------------------------------------------------
// GRID BACKGROUND — a fixed, full-viewport canvas rendered behind all page
// content. Draws a faint blue schematic grid that warps toward the cursor
// (a "wave" of displaced grid points) plus a soft blue glow that follows the
// mouse. Nothing here is interactive/clickable — pointer-events are
// disabled so it never blocks real page content.
//
// Respects prefers-reduced-motion: if the user has that OS setting on, the
// grid is drawn once, flat and still, with no animation loop.
// ---------------------------------------------------------------------------

const SPACING = 46 // px between grid points
const MAX_DPR = 1.5 // cap device-pixel-ratio so 4K/retina screens don't tank perf
const GLOW_RADIUS = 420
const WAVE_RADIUS = 260
const WAVE_STRENGTH = 16

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
    let time = 0

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
    }

    function handleMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
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

      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1

      // Precompute displaced grid points: each point nudges away from the
      // cursor (falls off with distance) plus a gentle idle sine drift so
      // the grid never looks perfectly static even without the mouse.
      const points: { x: number; y: number }[][] = []
      for (let i = 0; i < cols; i++) {
        const col: { x: number; y: number }[] = []
        for (let j = 0; j < rows; j++) {
          const baseX = i * SPACING
          const baseY = j * SPACING
          const dx = baseX - mouse.x
          const dy = baseY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const pull = Math.max(0, 1 - dist / WAVE_RADIUS)
          const angle = Math.atan2(dy, dx)
          const idle = reduceMotion ? 0 : Math.sin(time * 0.6 + (baseX + baseY) * 0.012) * 1.5

          col.push({
            x: baseX - Math.cos(angle) * pull * WAVE_STRENGTH + idle,
            y: baseY - Math.sin(angle) * pull * WAVE_STRENGTH + idle,
          })
        }
        points.push(col)
      }

      ctx!.lineWidth = 1
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j]
          const baseX = i * SPACING
          const baseY = j * SPACING
          const dx = baseX - mouse.x
          const dy = baseY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const proximity = Math.max(0, 1 - dist / (WAVE_RADIUS * 1.4))
          const alpha = 0.045 + proximity * 0.3
          ctx!.strokeStyle = `rgba(96, 165, 250, ${alpha})`

          if (i < cols - 1) {
            const right = points[i + 1][j]
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(right.x, right.y)
            ctx!.stroke()
          }
          if (j < rows - 1) {
            const down = points[i][j + 1]
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(down.x, down.y)
            ctx!.stroke()
          }
        }
      }
    }

    function loop() {
      time += 0.016
      draw()
      animationId = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    if (reduceMotion) {
      draw()
    } else {
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

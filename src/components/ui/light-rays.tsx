import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Animated light-rays backdrop (light mode) — soft, slowly drifting diagonal
 * beams of cyan / blue / mint on a near-white base, via a WebGL shader. Our own
 * take on the airy fintech "light rays" look. Renders a static frame under
 * prefers-reduced-motion; the phase term wraps at 2π for a seamless loop.
 */
export function LightRays({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const vertexShader = 'void main(){ gl_Position = vec4(position, 1.0); }'
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float diag = uv.x * 0.85 + uv.y * 0.55;
        float b1 = 0.5 + 0.5 * sin(diag * 9.0  + time);
        float b2 = 0.5 + 0.5 * sin(diag * 15.0 - time);
        float b3 = 0.5 + 0.5 * sin(diag * 5.0  + time);
        vec3 base = vec3(0.93, 0.97, 1.00);
        vec3 cyan = vec3(0.40, 0.79, 0.98);
        vec3 blue = vec3(0.55, 0.68, 0.99);
        vec3 mint = vec3(0.60, 0.94, 0.77);
        vec3 col = base;
        col = mix(col, cyan, b1 * 0.30);
        col = mix(col, mint, b2 * 0.18);
        col = mix(col, blue, b3 * 0.26);
        col += (1.0 - uv.y) * 0.05;
        gl_FragColor = vec4(col, 1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = { time: { value: 0.0 }, resolution: { value: new THREE.Vector2() } }
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height)
    }
    onResize()
    window.addEventListener('resize', onResize)

    let raf = 0
    const TWO_PI = Math.PI * 2
    const animate = () => {
      uniforms.time.value += 0.012
      if (uniforms.time.value > TWO_PI) uniforms.time.value -= TWO_PI
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    if (reduce) {
      uniforms.time.value = 1.6
      renderer.render(scene, camera)
    } else {
      animate()
    }

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [reduce])

  return (
    <div aria-hidden className={cn('absolute inset-0 overflow-hidden', className)}>
      <div ref={ref} className="absolute inset-0" style={{ background: '#eef6ff' }} />
      {/* soft top light + right fade so it melts into the form panel */}
      <div className="absolute inset-x-0 top-0 h-1/3" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-28" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5))' }} />
    </div>
  )
}

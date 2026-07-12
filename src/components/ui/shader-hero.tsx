import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * WebGL shader backdrop — a slow spiral flow re-tinted to the xTrac brand
 * (deep navy base + blues/cyan/indigo). Softened for an enterprise hero.
 * Renders a single static frame under prefers-reduced-motion; time wraps at the
 * pattern period (250) for a seamless loop with no float drift.
 */
export function ShaderHero({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const vertexShader = `
      void main() { gl_Position = vec4(position, 1.0); }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      // Professional brand palette: navy -> blue -> sky -> cyan -> indigo
      vec3 getColor(float t) {
        vec3 c1 = vec3(0.043, 0.118, 0.278); // deep navy
        vec3 c2 = vec3(0.118, 0.251, 0.686); // blue-800
        vec3 c3 = vec3(0.145, 0.388, 0.922); // blue-600
        vec3 c4 = vec3(0.020, 0.647, 0.914); // sky-500
        vec3 c5 = vec3(0.216, 0.741, 0.973); // sky-400
        vec3 c6 = vec3(0.490, 0.827, 0.988); // sky-300
        vec3 c7 = vec3(0.506, 0.549, 0.972); // indigo-400
        vec3 col = c1;
        col = mix(col, c2, smoothstep(0.00, 0.17, t));
        col = mix(col, c3, smoothstep(0.17, 0.34, t));
        col = mix(col, c4, smoothstep(0.34, 0.51, t));
        col = mix(col, c5, smoothstep(0.51, 0.68, t));
        col = mix(col, c6, smoothstep(0.68, 0.85, t));
        col = mix(col, c7, smoothstep(0.85, 1.00, t));
        return col;
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.04;
        float lineWidth = 0.0022;
        float radius = length(uv);
        float angle = atan(uv.y, uv.x);
        float intensity = 0.0;
        for (int i = 0; i < 5; i++) {
          float spiral = radius * 2.0 + angle * 0.5;
          intensity += lineWidth * float(i * i) /
            abs(fract(t + float(i) * 0.02) * 5.0 - spiral + mod(uv.x + uv.y, 0.2));
        }
        vec3 col = getColor(fract(intensity * 0.25 + t * 0.1));
        vec3 base = vec3(0.016, 0.035, 0.078); // #04090f deep navy base
        gl_FragColor = vec4(base + col * intensity * 0.72, 1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = { time: { value: 1.0 }, resolution: { value: new THREE.Vector2() } }
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
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
    const PERIOD = 250
    const animate = () => {
      uniforms.time.value += 0.03
      if (uniforms.time.value > PERIOD) uniforms.time.value -= PERIOD
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    if (reduce) {
      uniforms.time.value = 14
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
    <div
      ref={containerRef}
      aria-hidden
      className={cn('absolute inset-0 overflow-hidden', className)}
      style={{ background: '#04090f' }}
    />
  )
}

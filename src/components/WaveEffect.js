import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WaveEffect = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const materialRef = useRef(null);
  const transitionFrameId = useRef(null);
  const isDarkModeRef = useRef(isDarkMode);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_colorInvert: { value: isDarkMode ? 0 : 1 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_colorInvert;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }

        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          vec2 shift = vec2(100.0);
          vec2 offset = vec2(0.0);
          for (int i = 0; i < 5; i++) {
            value += amplitude * noise(st);
            st = st * 2.0 + shift;
            amplitude *= 0.5;
          }
          return value;
        }

         void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          st.x *= u_resolution.x / u_resolution.y;

          // Base noise flow
          vec2 q = vec2(0.0);
          q.x = fbm(st + u_time * 0.009);
          q.y = fbm(st + u_time * 0.007);

          // Displacement
          vec2 r = vec2(0.0);
          r.x = fbm(st + q + u_time * 0.1);
          r.y = fbm(st + q + u_time * 0.1);

          // Final noise
          float f = fbm(st + r);

          // Contemporary gradient-based color palette
    vec3 colorA = vec3(0.0, 0.65, 0.65); // Teal
  vec3 colorB = vec3(1.0, 0.95, 0.85); // Cream
  vec3 colorC = vec3(0.05, 0.05, 0.2); // Deep Navy Blue
  vec3 colorD = vec3(0.93, 0.49, 0.47); // Soft Coral

          // Interpolate colors based on noise
          vec3 color = mix(colorA, colorB, smoothstep(0.0, 0.5, f));
          color = mix(color, colorC, smoothstep(0.3, 0.7, f));
          color = mix(color, colorD, smoothstep(0.5, 1.0, f));

          // Glossy effect for vibrancy
          float gloss = pow(1.0 - abs(f - 0.5), 3.0);
          color += vec3(1.0, 1.0, 1.0) * gloss * 0.2;

          gl_FragColor = vec4(color, 1.0);
        }

      `,
      transparent: true,
    });

    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = (time) => {
      uniforms.u_time.value = time * 0.001;
      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
      cancelAnimationFrame(transitionFrameId.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
};

export default WaveEffect;

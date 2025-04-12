import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../ThemeProvider';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple transparent 3D objects with larger sizes
    const objects: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(2, 0),
      new THREE.TorusGeometry(1.6, 0.6, 16, 32),
      new THREE.OctahedronGeometry(2, 0),
      new THREE.DodecahedronGeometry(2, 0),
    ];

    const positions = [
      { x: -6, y: 3, z: -8 },
      { x: 5, y: -2, z: -10 },
      { x: 3, y: 4, z: -12 },
      { x: -4, y: -3, z: -9 },
    ];

    // Enhanced contrast for dark/light modes
    const colors = isDarkMode
      ? [0xffffff, 0xf0f0f0, 0xe0e0e0, 0xd0d0d0]
      : [0x000000, 0x222222, 0x444444, 0x666666];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: colors[index],
        transparent: true,
        opacity: isDarkMode ? 0.15 : 0.1,
        wireframe: true,
        shininess: 100,
        specular: isDarkMode ? 0xffffff : 0x111111,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(positions[index].x, positions[index].y, positions[index].z);

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.userData = {
        floatX: (Math.random() - 0.5) * 0.002,
        floatY: (Math.random() - 0.5) * 0.002,
        floatZ: (Math.random() - 0.5) * 0.002,
        originalPosition: { ...positions[index] },
      };

      scene.add(mesh);
      objects.push(mesh);
    });

    const ambientLight = new THREE.AmbientLight(isDarkMode ? 0xffffff : 0xffffff, isDarkMode ? 0.7 : 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(isDarkMode ? 0xffffff : 0xffffff, isDarkMode ? 1 : 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 8;

    // Mouse position
    const mouse = {
      x: 0,
      y: 0,
    };

    // Handle mouse move
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    function animate() {
      const animationId = requestAnimationFrame(animate);

      objects.forEach((object, index) => {
        const distanceThreshold = 3;
        const distanceX = mouse.x * 4 - object.position.x / 2;
        const distanceY = mouse.y * 3 - object.position.y / 2;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < distanceThreshold) {
          const force = (distanceThreshold - distance) * 0.08;
          object.position.x -= (distanceX / distance) * force;
          object.position.y -= (distanceY / distance) * force;
        } else {
          const returnSpeed = 0.01;
          const originalPos = object.userData.originalPosition;
          object.position.x += (originalPos.x - object.position.x) * returnSpeed;
          object.position.y += (originalPos.y - object.position.y) * returnSpeed;

          object.position.x += Math.sin(Date.now() * 0.0005 + index) * 0.008;
          object.position.y += Math.cos(Date.now() * 0.0005 + index) * 0.008;
        }

        object.rotation.x += object.userData.floatX;
        object.rotation.y += object.userData.floatY;
        object.rotation.z += object.userData.floatZ;
      });

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      objects.forEach(object => {
        object.geometry.dispose();
        (object.material as THREE.Material).dispose();
      });
    };
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.7,
      }}
    />
  );
};

export default Background;
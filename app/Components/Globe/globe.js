'use client'
import  { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";



import "./globe.css"

const Globe = () => {
const canvasRef = useRef(null);

useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
  
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 40;
    scene.add(camera);
    renderer.render(scene, camera);
    const geometry = new THREE.SphereGeometry(15, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x219bf8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,

    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    const atmosphereGeometry = new THREE.SphereGeometry(15.5, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: "#219bf8ff",
        transparent: true,
        opacity: 0.1,
      });
    
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);  

      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(15, 64, 64),
        new THREE.MeshStandardMaterial({

          color: 0x000000,
        })
      );
      scene.add(moon);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(80, 60, 60);
    scene.add(pointLight);
    const backgroundColor = new THREE.Color(0x0f172a);
    
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(-200, 500, 200);
    camera.add(light1);

    const light2 = new THREE.DirectionalLight(0x7982f6, 1);
    light2.position.set(-200, 500, 200);
    camera.add(light2);

    const light3 = new THREE.DirectionalLight(0x8566cc, 0.5);
    light3.position.set(-200, 500, 200);
    camera.add(light3);

    scene.background = backgroundColor;
    const controls = camera.controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1; 
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.1, 15, 15);
      const material = new THREE.MeshStandardMaterial({ color: 0x4d4cf8ff });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
      
    }
    
    Array(600).fill().forEach(() => addStar());

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      if (sphere) {
        sphere.rotation.y += 0.005;
      }
    }
    animate();

  function animateStars() {
      requestAnimationFrame(animate);
      scene.children.forEach(star => {
          star.rotation.y += 0.01;
          star.position.x -= 0.1;
          star.position.y -= 1;
      });


      renderer.render(scene, camera);
  }
  animateStars();
    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}


  }, []);
  

return    (
            <canvas id="globe" ref={canvasRef} >
            </canvas>
         
         )};


export default Globe;



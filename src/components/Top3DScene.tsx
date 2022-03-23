import React, { useEffect } from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Top3DScene.scss";
import { runOnceOnOrientaitonChange } from "../util/utils";

const Top3DScene = () => {

  // const askForSensorPermission = ;

    useEffect(() => {
        
        const parent = document.getElementById("ThreeD-model-wrapper");
        if (!parent) return;
        
        let camera = new THREE.PerspectiveCamera(
          1,
          parent.clientWidth / parent.clientHeight,
          1,
          1000
        );

        setup3DScene(camera, parent);
    },[]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log("Clicked");
      if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        (DeviceOrientationEvent as any).requestPermission();
      }
    };

    return (
        <div onClick={handleClick} id="ThreeD-model-wrapper">
        </div>
    );
};

const setup3DScene = (
    camera: THREE.PerspectiveCamera,
    parent: HTMLElement,
    canChangeOrientation: boolean = false
) => {

    const scene = new THREE.Scene();
    camera.position.z = 100;
    camera.position.x = -50;
    camera.position.y = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(parent.clientWidth, parent.clientHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    renderer.domElement.classList.add("disable-touch");
    parent.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(require("../assets/3d_scene.glb"), function (gltf) {

      // Add all of the elements into the scene.
      gltf.scene.children.forEach((mesh: any) => {
              const wireframe = new THREE.WireframeGeometry(mesh.geometry);
              const line = new THREE.LineSegments(wireframe) as any;
              line.position.x = 0; // left, right
              line.position.y = -0.7; // up, down
              line.material.depthTest = false;
              line.material.opacity = 0.2;
              line.material.transparent = true;
              line.material.color = new THREE.Color("white");
        
              scene.add(line);
      });
      animate();
      window.addEventListener("resize", onWindowResize, false);


      const mouseMoveHandler = (e: MouseEvent) => {
        camera.position.y = ((e.clientY / window.innerHeight) * 5) + 20;

        const halfwayPointX = window.innerWidth / 2;
        let speed = halfwayPointX - e.clientX;
        speed = speed / halfwayPointX * 0.2;
        controls.autoRotateSpeed = speed;
      };
      // Use the mouse to change the camera.
      window.addEventListener("mousemove", mouseMoveHandler);

      // Use the device orientation to control the camera.
      // Beta = up down, gamma = left right
      window.addEventListener(
        "deviceorientation",
        (event: DeviceOrientationEvent) => {

          if (event.beta && event.gamma) {

            console.log("Removing orientation");
            window.removeEventListener("mousemove", mouseMoveHandler);
            let position = (90 - Math.min(Math.max(event.beta, 0), 90)) / 90;
            position = 25 + 10 * position;
            camera.position.y = position;

            let speed = event.gamma / 30;
            speed = speed * 1;
            controls.autoRotateSpeed = speed;
          }
        }
      );
    });

    function animate() {
      requestAnimationFrame(animate);

      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = parent.clientWidth / parent.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(parent.clientWidth, parent.clientHeight);
    }

  }

export default Top3DScene;

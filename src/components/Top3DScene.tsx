import React, { useEffect } from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Top3DScene.scss";

const Top3DScene = () => {

    useEffect(() => {
        
        const parent = document.getElementById("ThreeD-model-wrapper");
        if (!parent) return;
        
        let camera = new THREE.PerspectiveCamera(
          1,
          parent.clientWidth / parent.clientHeight,
          1,
          1000
        );

        setup3DComputer(camera, parent);
    },[]);

    return (
        <div id="ThreeD-model-wrapper" className="w-100 h-100">
            <div id="3d-model"></div>
        </div>
    );
};

const setup3DComputer = (
    camera: THREE.PerspectiveCamera,
    parent: HTMLElement
) => {

    const scene = new THREE.Scene();
    camera.position.z = 125;
    camera.position.x = 110;
    camera.position.y = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(parent.clientWidth, parent.clientHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    parent.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(require("../assets/z89pc.glb"), function (gltf) {
      const mesh = gltf.scene.children[0] as any;
      const wireframe = new THREE.WireframeGeometry(mesh.geometry);
      const line = new THREE.LineSegments(wireframe) as any;
      line.position.y = -0.2;
      line.position.x = 0;
      line.material.depthTest = false;
      line.material.opacity = 0.2;
      line.material.transparent = true;
      line.material.color = new THREE.Color("white");

      scene.add(line);
      animate();
      window.addEventListener("resize", onWindowResize, false);
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

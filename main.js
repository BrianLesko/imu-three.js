import * as THREE from "three";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true }); //{alpha: true} is for transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.shadowMap.enabled = true;         // Enable shadows
//renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: Use a softer shadow type
document.body.appendChild(renderer.domElement);

// Add a cube
//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

// add a file
let stl;
const loader = new STLLoader();
loader.load(
  "mystl.stl",
  function (geometry) {
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    //const material = new THREE.MeshDepthMaterial();

    stl = new THREE.Mesh(geometry, material);
    //stl.castShadow = true;
    scene.add(stl);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//Add a light
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

//Add a camera
const fov = 45;
const aspect = 2; // the canvas default
const near = 0.3;
const far = 25;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//camera.position.set(0, 10, 1);
camera.position.z = 15;

//Add a ground plane
//const planeSize = 400;
//const gloader = new THREE.TextureLoader();
//const texture = gloader.load('tile2.png');
//texture.wrapS = THREE.RepeatWrapping;
//texture.wrapT = THREE.RepeatWrapping;
//texture.magFilter = THREE.NearestFilter;
//texture.colorSpace = THREE.SRGBColorSpace;
//const repeats = planeSize / 2;
//texture.repeat.set(repeats, repeats);
//const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
//const planeMat = new THREE.MeshPhongMaterial({
//  map: texture,
//  side: THREE.DoubleSide,
//});
//const mesh = new THREE.Mesh(planeGeo, planeMat);
//mesh.rotation.x = Math.PI * -.5;
//scene.add(mesh);

//Camera Orbit
//const controls = new OrbitControls(camera);
//controls.target.set(0, 5, 0);
//controls.update();

// Load the rotations.json file
let rotations = { roll: 0, pitch: 0, yaw: 0 };
function fetchRotations() {
  return fetch("rotation.json")
    .then((response) => response.json())
    .then((data) => {
      rotations = data;
    })
    .catch((err) => console.error("Failed to load rotations.json:", err));
}

fetchRotations();
setInterval(fetchRotations, 10);

// Animation loop
function animate() {
  if (stl && rotations) {
    stl.rotation.x = THREE.MathUtils.degToRad(rotations.roll);
    stl.rotation.y = THREE.MathUtils.degToRad(rotations.pitch);
    stl.rotation.z = THREE.MathUtils.degToRad(rotations.yaw);
  }

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
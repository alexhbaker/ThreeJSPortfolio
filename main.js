import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const gltfLoader = new GLTFLoader();
gltfLoader.load('C:/Users/alexh/OneDrive/Desktop/3JS_Models/scene.gltf', (gltfScene) => {
    scene.add(gltfScene.scene);
})
// loader.load( 'C:/Users/alexh/OneDrive/Desktop/3JS_Models/scene.gltf', function( gltf ) {
//     scene.add( gltf.scene );
// }, undefined, function(error) {
//     console.error( error );
// });

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 });
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
const geometry1 = new THREE.BoxGeometry(5,5,-1);
const material1 = new THREE.MeshBasicMaterial( { color: 0xFF0000 });
const cube1 = new THREE.Mesh( geometry1, material1 );
//scene.add( cube1 );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //cube1.rotation.x += 0.01;

    renderer.render( scene, camera );
}
animate();


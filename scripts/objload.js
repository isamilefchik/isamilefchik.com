var THREE = window.THREE = require('three');
require('three/examples/js/loaders/GLTFLoader');
var loader = new THREE.GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

    scene.add( gltf.scene );

}, undefined, function ( error ) {

    console.error( error );

} );
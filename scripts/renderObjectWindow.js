var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
document.getElementById('objectWindow').appendChild( renderer.domElement );

renderer.domElement.style = "width: 50vw; display: block; margin: auto; @media screen and (max-width: 600px) {width: 80vw; display: block; margin: auto; }";

if (window.innerWidth > 600) {
    renderer.setSize( window.innerWidth * .5, window.innerHeight * .5);
    camera.aspect = ( window.innerWidth * .5 ) / ( window.innerHeight * .5 );
    camera.updateProjectionMatrix();
} else {
    renderer.setSize( window.innerWidth * .8, window.innerHeight * .5);
    camera.aspect = ( window.innerWidth * .8 ) / ( window.innerHeight * .5 );
    camera.updateProjectionMatrix();
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    if (window.innerWidth > 600) {
        renderer.setSize( window.innerWidth * .5, window.innerHeight * .5);
        camera.aspect = ( window.innerWidth * .5 ) / ( window.innerHeight * .5 );
        camera.updateProjectionMatrix();
    } else {
        renderer.setSize( window.innerWidth * .8, window.innerHeight * .5);
        camera.aspect = ( window.innerWidth * .8 ) / ( window.innerHeight * .5 );
        camera.updateProjectionMatrix();
    }

}

controls = new THREE.OrbitControls( camera, renderer.domElement );

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.75);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var loader = new THREE.OBJLoader2();

var callbackOnLoad = function ( event ) {
    scene.add( event.detail.loaderRootNode );
    event.detail.loaderRootNode.rotation.z = 3.14;
};

loader.load( 'assets/surface.obj', callbackOnLoad, null, null, null, false );

camera.position.set(14.649166036555204, 1.191537935682266, 51.377783681043155);
camera.rotation.set(-3.120522213880699, 0.44892174296909637, 3.132447102906221);
controls.target.set(-12.594553777629457, 1.6845315092829309e-16, 107.91963158843991);
controls.update();

function animate() {
   requestAnimationFrame( animate );
   renderer.render( scene, camera );
}
animate();
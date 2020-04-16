import {camera, renderer, scene} from "./game/game"
import {WEBGL} from "three/examples/jsm/WebGL";

document.body.appendChild((() => {
    let htmlDivElement = document.createElement("div");
    htmlDivElement.innerText = "hello world"
    return htmlDivElement
})());
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

if ( WEBGL.isWebGLAvailable() ) {

    // Initiate function or other initializations here
    animate();

} else {

    const warning = WEBGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );

}

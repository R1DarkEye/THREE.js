import * as THREE from 'three'
import App from '../App'


export default class World{
    constructor(){
        this.App= new App()
        this.scene= this.App.scene

        this.setCube()
    }
    setCube(){
        this.cubeMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({color:'red'})
        )  
        this.scene.add(this.cubeMesh)
    }
    loop(){
    }
}
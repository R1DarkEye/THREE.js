import Camera from "./Camera.js"
import * as THREE from 'three'
import Renderer from "./Renderer.js"
import Loop from "./Utils/Loop.js"
import World from "./World/World.js"
import Resize from "./Utils/Resize.js"

let instance=null
export default class App{
    constructor(){
        if(instance) return instance
        instance = this
        this.canvas=document.querySelector('canvas.three')
        this.scene= new THREE.Scene()
        this.Camera=new Camera()
        this.Renderer=new Renderer()
        this.World=new World()
        this.Loop=new Loop()
        this.resize=new Resize()
    }
}

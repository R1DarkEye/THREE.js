import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
import App from './App'
import {sizesStore} from './Utils/Store.js'


export default class Camera{
    constructor(){
        this.App=new App()
        this.canvas=this.App.canvas
        this.sizesStore=sizesStore
        this.sizes= sizesStore.getState()
        this.setInstance()
        this.setControls()
        this.setResizeListener()
    }
    setInstance(){
        this.instance= new THREE.PerspectiveCamera(
            35,
            this.sizes.width/this.sizes.height,
            0.1,
            200
        )
        this.instance.position.z=5;
    }
    setControls(){
        this.controls=new OrbitControls(this.instance,this.canvas)
        this.controls.enableDamping=true
    }
    loop(){
        console.log("Camera loop")
        this.controls.update()
    }
    setResizeListener(){
        this.sizesStore.subscribe((sizes)=>{
            console.log('changed')
            this.instance.aspect=sizes.width/sizes.height
            this.instance.updateProjectionMatrix()
        })
    }
}
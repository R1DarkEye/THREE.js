import * as THREE from 'three'
import App from "./App.js"
import { sizesStore } from './Utils/Store.js'

export default class Renderer{
    constructor(){
        this.app= new App()
        this.canvas=this.app.canvas
        this.scene=this.app.scene
        this.Camera=this.app.Camera
        this.sizesStore=sizesStore
        this.sizes=sizesStore.getState()
        this.setInstance()
        this.setResizeListener()
        this.loop()
}
    setInstance(){
        this.instance = new THREE.WebGLRenderer(
            {
                canvas: this.canvas,
                antialias: true,
            }
        )
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    
    }
    loop(){
        this.instance.render(this.scene,this.Camera.instance)
    }
    setResizeListener(){
        this.sizesStore.subscribe((sizes)=>{
            this.instance.setSize(sizes.width, sizes.height)
            this.instance.setPixelRatio(sizes.pixelRatio)
        })
    }
}
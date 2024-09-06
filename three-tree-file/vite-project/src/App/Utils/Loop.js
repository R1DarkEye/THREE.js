import App from "../App"


export default class Loop {
    constructor() {
        this.App = new App()
        this.camera = this.App.Camera
        this.renderer = this.App.Renderer
        this.world= this.App.World
        this.loop()
    }
    loop() {
        this.world.loop()
        this.camera.loop()
        this.renderer.loop()
        // this.renderer.instance.setSize(window.innerWidth, window.innerHeight)
        // this.camera.instance.aspect=window.innerWidth/window.innerHeight
        // this.camera.instance.updateProjectionMatrix() 
        window.requestAnimationFrame(()=>this.loop())
        
    }
}
import cameraController from "../app/cameraController/cameraController.js"


class App {
  constructor() {
    this.controllers = {
      cameraController: new cameraController()
    }
  }
}

window['app'] = new App()
import Camera from "../models/camera.js"

let _state = {
  cameras: [new Camera({
    type: "SLR",
    brand: "Canon",
    model: "5D MarkIII",
    price: "$3,000",
    imgUrl: "https://d1rzxhvrtciqq1.cloudfront.net/images/listing_images/images/6589/big/canon-5d-mk3.jpg?1440174996"
  })]
}


export default class cameraService {
  deleteCamera(id) {
    _state.cameras.forEach((Camera, i) => {
      if (Camera._id === id) {
        _state.cameras.splice(i, 1)
      }
    })
  }

}

addCamera(new Camera) {
  _state.cameras.push(new Camera(new Camera))
  console.log(_state.cameras)
}

getCamera() {
  return _state.cameras.map(Camera => new Camera(Camera))
}

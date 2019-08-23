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
  constructor() {

  }
}
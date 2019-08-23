
export default class Camera {
  constructor(data) {
    this._id = data.id
    this.type = data.type
    this.brand = data.brand
    this.model = data.model
    this.price = data.price
    this.imgUrl = data.imgUrl
  }



  getTemplate(index) {
    let template =
      <div clas="row">
        <div class="col-4">
          <h1>${this.type}</h1>
          <h3>${this.brand}</h3>
          <h3>${this.model}</h3>
          <h3>${this.price}</h3>
          <img src="${this.imgUrl}" alt=""></img>
          <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${this._id})">Delete Car</button>
        </div>
      </div>
  }
}
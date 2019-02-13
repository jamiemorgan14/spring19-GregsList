let id = 1;

export default class Home {
  constructor(data) {
    this.id = id
    this.price = data.price
    this.location = data.location
    this.title = data.title
    this.img = data.img
    id++
  }

  getTemplate() {
    return `<div class="card col-12 col-md-4 my-1">
            <img class="card-img-top img-fluid" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.location} -- ${this.price}</p>
                <button onclick="app.controllers.jobController.deleteHome(${this.id})">Remove</button>
            </div>
        </div>`
  }
}
import HomeService from "./homeService.js";



let _hs = new HomeService();

function draw() {
  let homes = _hs.Homes;
  let template = '';
  homes.forEach(home => {
    template += home.getTemplate()
  });
  document.getElementById('available-homes').innerHTML = template;
}

export default class HomeController {
  constructor() {
    _hs.addSubscriber('homes', draw);
    draw();
  }

  addHome(event) {
    event.preventDefault();
    let form = event.target;
    let newHome = {
      title: form.title.value,
      price: form.price.value,
      location: form.location.value,
      img: form.img.value
    }
    _hs.addHome(newHome);
    form.reset();
  }
  deleteHome(id) {
    _hs.deleteHome(id)
  }
}
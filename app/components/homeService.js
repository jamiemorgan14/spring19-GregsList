import Home from "../models/home.js";



let _state = {
  homes: [
    new Home({ price: 1000000, location: 'San Jose', title: 'Beautiful Home', img: 'https://s.hdnux.com/photos/77/45/10/16667159/3/920x920.jpg' }),
    new Home({ price: 2000000, location: 'Boston', title: 'Really beautiful home', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeUDDg_tGN4GiqFMdFq9xO6I6fKnNH3cbmAMSIgWeDEVthWrd' }),
    new Home({ price: 10000000, location: 'New York City', title: 'Spacious(ish)', img: 'https://cdn-02.independent.ie/incoming/article29047074.ece/35dd9/AUTOCROP/w620/rundown-house-ts.jpg' })
  ]
}

let _subscribers = {
  homes: []
}

function setState(dataName, value) {
  _state[dataName] = value;
  _subscribers[dataName].forEach(fn => fn());
}

export default class HomeService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Homes() {
    return _state.homes
  }
  addHome(rawHome) {
    let newHome = new Home(rawHome);
    _state.homes.push(newHome);
    setState('Homes', _state.homes)
  }
  deleteHome(id) {
    for (let i = 0; i < _state.homes.length; i++) {
      let home = _state.homes[i];
      if (home.id == id) {
        _state.homes.splice(i, 1);
        break;
      }
    }
    setState('homes', _state.homes)
  }
}
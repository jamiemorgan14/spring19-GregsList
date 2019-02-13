import CarController from "./components/carController.js";
import JobController from "./components/jobController.js";
import HomeController from "./components/homeController.js";




class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            jobController: new JobController(),
            homeController: new HomeController()
        }
    }
}



window.app = new App()
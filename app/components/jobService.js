import Job from "../models/job.js";


let _state = {
  jobs: [
    new Job({ title: 'sales-person', wage: 20, img: 'https://uproxx.files.wordpress.com/2015/09/wolf-of-wall-street.jpg?quality=100&w=650', description: 'Sell bad stuff to good people.' }),
    new Job({ title: 'programmer', wage: 50, img: 'https://www.careermatch.com/job-prep/wp-content/uploads/sites/29/2017/11/computer_programmer_profile_image.jpg', description: 'Make cool stuff for lame people.' }),
    new Job({ title: 'hitman', wage: 4000, img: 'https://cdn.gamerant.com/wp-content/uploads/Hitman-in-black-and-white.jpg.optimal.jpg', description: 'Eliminate new salesmen and programmers.' })
  ]
}

let _subscribers = {
  cars: []
}

function setState(dataName, value) {
  _state[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS INVOKE THE FUNCTION
  _subscribers[dataName].forEach(fn => fn());
}


export default class JobService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Jobs() {
    return _state.jobs
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob);
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs)
  }
  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i];
      if (job.id == id) {
        _state.jobs.splice(i, 1)
        break;
      }
    }
    setState('jobs', _state.jobs)
  }
}
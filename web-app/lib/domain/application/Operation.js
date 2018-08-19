import {EventEmitter} from 'events'
export class Operation extends EventEmitter {
  constructor() {
    super()
    this.events = {
      SUCCESS: 'SUCCESS',
      ERROR: 'ERROR'
    }
  }

  on(event, handler) {
    if (this.events[event]) {
      return this.addListener(event, handler)
    }
  }
}

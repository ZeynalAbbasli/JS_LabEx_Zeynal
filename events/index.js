// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        // Store the event handlers in an object where keys are event names
        this.events = {};
    }

    // Register an event handler for the given event name
    on(eventName, callback) {
        if (!this.events[eventName]) {
            // If the event doesn't exist, initialize it with an empty array
            this.events[eventName] = [];
        }
        // Add the callback to the list of handlers for this event
        this.events[eventName].push(callback);
    }

    // Trigger all callbacks associated with the given event name
    trigger(eventName) {
        if (this.events[eventName]) {
            // Loop through the array of callbacks and invoke each one
            for (let callback of this.events[eventName]) {
                callback();
            }
        }
    }

    // Remove all event handlers associated with the given event name
    off(eventName) {
        // Delete the array of handlers for the given event
        delete this.events[eventName];
    }
}

module.exports = Events;

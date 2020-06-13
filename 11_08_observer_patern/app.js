class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name} `);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  }
  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

// EventObserver.prototype = {
//   subscribe: function (fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name} `);
//   },
//   unsubscribe: function (fn) {
//     this.observers = this.observers.filter((item) => {
//       if (item !== fn) {
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribed to ${fn.name}`);
//   },
//   fire: function () {
//     this.observers.forEach((item) => {
//       item.call();
//     });
//   },
// };

const click = new EventObserver();

document.querySelector(".sub-ms").addEventListener("click", () => {
  click.subscribe(getCurMIlliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurMIlliseconds);
});

document.querySelector(".sub-s").addEventListener("click", () => {
  click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", () => {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", () => {
  click.fire();
  console.log(click.observers);
});

const getCurMIlliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

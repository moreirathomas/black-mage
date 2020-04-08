(() => {
  // Globals
  const SPRITE_SIZE = 26;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  class Animation {
    constructor(frame_set, delay) {
      this.count = 0;
      this.delay = delay;
      this.frame = 0;
      this.frame_index = 0;
      this.frame_set = frame_set;
    }
    change(frame_set, delay = 15) {
      if (this.frame_set != frame_set) {
        this.count = 0; // Reset the count
        this.delay = delay; // Set the delay
        this.frame_index = 0; // Start at the first frame in the new frame set
        this.frame_set = frame_set; // Set the new frame set
        this.frame = this.frame_set[this.frame_index]; // Set the new frame value
      }
    }
    update() {
      this.count++;
      // Updated everytime the delay is reached and reset the waiting timer
      if (this.count >= this.delay) {
        this.count = 0;
        this.frame_index = // Index is increased by 1 if it is not the last element of the array, otherwise it is changed to 0
          this.frame_index == this.frame_set.length - 1
            ? 0
            : this.frame_index + 1;
        this.frame = this.frame_set[this.frame_index]; // The current frame to render is the one with the matching index
      }
    }
  }

  let buffer, controller, display, loop, mage, render, resize, sprite_sheet;

  //   buffer = document.createElement('canvas').getContext('2d');
  //   display = document.querySelector('canvas').getContext('2d');

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  controller = {
    down: { active: false },
    up: { active: false },

    keyDownUp: function (event) {
      controller.down.active =
        event.type == 'keydown' && event.keyCode == 81 ? true : false;
      controller.up.active =
        event.type == 'keyup' && event.keyCode == 81 ? true : false;
      //   console.log(
      //     `keydown: ${controller.down.active} \nkeyup: ${controller.up.active}`
      //   );
    },
  };

  mage = {
    animation: new Animation(),
    height: 26,
    width: 26,
    x: 0,
    y: 40,
  };

  fireball = {
    animation: new Animation(),
    height: 26,
    width: 26,
    x: SPRITE_SIZE,
    y: 40,
  };

  sprite_sheet = {
    frame_sets: [[0], [1, 2], [3], [4]],
    image: new Image(),
  };

  loop = function (time_stamp) {
    // buffer.clearRect(0, 0, buffer.canvas.width, buffer.canvas.height);
    // display.clearRect(0, 0, display.canvas.width, display.canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);

    // idle
    if (!controller.down.active && !controller.up.active) {
      mage.animation.change(sprite_sheet.frame_sets[0], 20);
    }
    // charge spell
    if (controller.down.active && !controller.up.active) {
      mage.animation.change(sprite_sheet.frame_sets[1], 15);
    }
    // cast then sleep for .5sec and idle + FIREBALL !
    if (!controller.down.active && controller.up.active) {
      mage.animation.change(sprite_sheet.frame_sets[2], 15);
      (async function revertIdle() {
        await sleep(500);
        controller.up.active = false;
      })();
    }
    mage.animation.update();
    render();
    window.requestAnimationFrame(loop);
  };

  render = function () {
    // buffer.drawImage(
    //   sprite_sheet.image,
    //   mage.animation.frame * SPRITE_SIZE,
    //   0,
    //   SPRITE_SIZE,
    //   SPRITE_SIZE,
    //   Math.floor(mage.x),
    //   Math.floor(mage.y),
    //   //   mage.x,
    //   //   mage.y,
    //   SPRITE_SIZE,
    //   SPRITE_SIZE
    // );
    // display.drawImage(
    //   buffer.canvas,
    //   0,
    //   0,
    //   buffer.canvas.width,
    //   buffer.canvas.height,
    //   0,
    //   0,
    //   display.canvas.width,
    //   display.canvas.height
    // );

    context.drawImage(
      sprite_sheet.image,
      mage.animation.frame * SPRITE_SIZE,
      0,
      SPRITE_SIZE,
      SPRITE_SIZE,
      Math.floor(mage.x),
      Math.floor(mage.y),
      SPRITE_SIZE,
      SPRITE_SIZE
    );
  };

  resize = function () {
    // display.canvas.width = document.documentElement.clientWidth - 32;

    // if (display.canvas.width > document.documentElement.clientHeight) {
    //   display.canvas.width = document.documentElement.clientHeight;
    // }

    // display.canvas.height = display.canvas.width * 0.5;

    // display.imageSmoothingEnabled = false;

    //
    canvas.width = document.documentElement.clientWidth - 32;
    if (canvas.width > document.documentElement.clientHeight) {
      canvas.width = document.documentElement.clientHeight;
    }
    canvas.height = canvas.width * 0.5;
    context.imageSmoothingEnabled = false;
  };

  // INITIALIZATION

  //   buffer.canvas.width = 160;
  //   buffer.canvas.height = 80;
  canvas.width = 160;
  canvas.height = 80;

  window.addEventListener('resize', resize);

  window.addEventListener('keydown', controller.keyDownUp);
  window.addEventListener('keyup', controller.keyDownUp);

  resize();

  // Start the game loop on the load of the sprite sheet
  sprite_sheet.image.addEventListener('load', function (event) {
    window.requestAnimationFrame(loop);
  });

  sprite_sheet.image.src = '../src/sprites.png';
})();

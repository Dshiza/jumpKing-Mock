const keys = {
  ArrowLeft: {
    get pressed() {
      return character.movingLeft;
    },
    set pressed(state) {
      character.movingLeft = state;
    },
  },
  ArrowRight: {
    get pressed() {
      return character.movingRight;
    },
    set pressed(state) {
      character.movingRight = state;
    },
  },
  Space: {
    get pressed() {
      return character.jumpHeld;
    },
    set pressed(state) {
      character.jumpHeld = state;
    },
    get released() {
      return character.jumping;
    },
    set released(state) {
      character.jumping = state;
    },
  },
};

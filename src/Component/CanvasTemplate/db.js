// import { DesignCanvas, Mockup } from "./models";

export class Mockup {
    constructor(imgUrl, side, id) {
      this.id = id;
      this.imgUrl = imgUrl;
      this.side = side;
    }
  }
  
  export class DesignCanvas {
    constructor(imgUrl, side, mockupId) {
      this.imgUrl = imgUrl;
      this.side = side;
      this.mockupId = mockupId;
    }
  }
  

const m1 = new Mockup("/white-realistic-a5-notebook-closed-600nw-1556581460.webp", "front", 1);
// const m2 = new Mockup("/back.jpeg", "back", 2);

const canvases = [
  new DesignCanvas("/white-realistic-a5-notebook-closed-600nw-1556581460.webp", "front", m1.id),
//   new DesignCanvas("/back.jpeg", "back", m2.id)
];

const mockups = [m1];

const db = {
  mockups,
  canvases
};

export default db;

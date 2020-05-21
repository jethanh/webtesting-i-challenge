const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("restore durability to 100", () => {
      let item = {
        name: "paperclip",
        durability: 50,
        enhancement: 20,
      };
      expect(enhancer.repair(item)).toMatchObject({
        durability: 100,
      });
    });
  });

  describe("succeed", () => {
    it("enhancement +1, Durability =", () => {
      let item = {
        name: "lobster pincher",
        durability: 50,
        enhancement: 16,
      };

      expect(enhancer.succeed(item)).toBe(17);
    });

    it("if 20, no change", () => {
      let item = {
        name: "ags",
        durability: 50,
        enhancement: 20,
      };
      expect(enhancer.succeed(item)).toBe(20);
    });
  });

  describe("fail", () => {
    it("durability -5 if enh <15", () => {
      let item = {
        name: "rock",
        durability: 40,
        enhancement: 9,
      };
      expect(enhancer.fail(item)).toBe(35);
    });
  });
});

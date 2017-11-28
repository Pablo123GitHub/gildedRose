"use strict";

describe("Gilded Rose", function() {
  var shop;
  var items = [];
  var oneItem;

  beforeEach(function() {

    oneItem = {
      _name: "test",
      _quality: 5,
      _sellIn: 3

    };

    items = [oneItem];
    shop = new Shop(items);
  });
  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });
  describe("#updateQuality", function() {

    it("should create new shop instance", function() {
      expect(shop instanceof Shop).toBe(true);
    });

    it("should lower quality of the item", function() {
      console.log("hein", shop);
      expect(shop.lowerQuality(0)).toEqual(4);
    });



  });
});

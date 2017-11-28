"use strict";

describe("Gilded Rose", function() {
  var shop;
  var items = [];
  var oneItem;

  beforeEach(function() {

    oneItem = {
      _name: "Sulfuras, Hand of Ragnaros",
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
      expect(shop.lowerQuality(0)).toEqual(4);
    });

    it("should have a quality above 0", function() {
      expect(shop.isQualityPositive(0)).toBe(true);
    });

    it("name should not be Aged Brie", function() {
      expect(shop.isNameNotBrie(0)).toBe(true);
    });

    it("name should not be BackStage passes....", function() {
      expect(shop.isNameNotBackStg(0)).toBe(true);
    });

    it("Quality should be below 50", function() {
      expect(shop.isQualityLessTh50(0)).toBe(true);
    });

    it("should raise quality by 1", function() {
      expect(shop.raiseQuality(0)).toEqual(6);
    });

    it("checks item sellIn", function() {

      expect(shop.checkItemSellIn(0)).toEqual(3);
    });

    it("quality is >0 and this is the Sulfuras item, quality should lower", function() {
      expect(shop.isQualPositiveLowerIfSulfura(0)).toEqual(4);
    });

    it("raise quality if quality less than 50 ", function() {
      expect(shop.raiseQualityIfLssthn50(0)).toEqual(6);
    });

    // it("raise quality by TWO if quality less than 50 and sellIn days < 6", function() {
    //   var oneItem2;
    //   var item2;
    //   var items2;
    //   var shop2;
    //   oneItem2 = {
    //     _name: "Sulfuras, Hand of Ragnaros",
    //     _quality: 5,
    //     _sellIn: 0
    //
    //   };
    //
    //   items2 = [oneItem2];
    //   shop2 = new Shop(items2);
    //
    //
    //   expect(shop2.raiseQualityIfDaysUp(0, 8)).toEqual(7);
    // });

    it("raise quality by ONE if quality less than 50 and sellIn days < 11", function() {
      var oneItem3;
      var item3;
      var items3;
      var shop3;
      oneItem3 = {
        _name: "Sulfuras, Hand of Ragnaros",
        _quality: 5,
        _sellIn: 8

      };

      items3 = [oneItem3];
      shop3 = new Shop(items3);


      expect(shop3.raiseQualityIfDaysUp(0, 8)).toEqual(6);
    });







  });
});

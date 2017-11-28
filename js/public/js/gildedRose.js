"use strict";

(function(exports) {
  function Item(name, sellIn, quality) {
    this._name = name;
    this._sellIn = sellIn;
    this._quality = quality;
  };

  function Shop(items = new Item()) {
    this._items = items;
  };

  Shop.prototype = {
    updateQuality: function() {
      for (var i = 0; i < this._items.length; i++) {
        if (this.isNameNotBrie(i) && this.isNameNotBackStg(i)) {
          this.isQualPositiveLowerIfSulfura(i);
        } else {
          if (this.isQualityLessTh50(i)) {
            this.raiseQuality(i);
            if (!this.isNameNotBackStg(i)) {
              this.raiseQualityIfSellInClose(i, 6)
              this.raiseQualityIfSellInClose(i, 11)
            }
          }
        }
        if (this.isNotSulfuras(i)) {
          this.checkItemSellIn(i) = this.checkItemSellIn(i) - 1;
        }
      };
    },

    lowerQuality: function(i) {
      if (this._items[i]._name != "Conjured") {
          return this._items[i]._quality = this._items[i]._quality - 1;
      } else {
          return this._items[i]._quality = this._items[i]._quality - 2;
      }
    },

    isNotSulfuras: function(i) {
      return (this._items[i].name != 'Sulfuras, Hand of Ragnaros');
    },

    isQualityPositive: function(i) {
      return (this._items[i]._quality > 0);
    },

    isNameNotBrie: function(i) {
      return (this._items[i].name != 'Aged Brie');
    },

    isNameNotBackStg: function(i) {
      return this._items[i].name != 'Backstage passes to a TAFKAL80ETC concert';
    },

    isQualityLessTh50: function(i) {
      return this._items[i]._quality < 50;
    },

    raiseQualityIfSellInClose: function(i) {
      let sellIn = this.checkItemSellIn(i)
      if (sellIn < 6) {
        return this.raiseQualityIfLssthn50ByThree(i);
      }
      if (sellIn < 11 && sellIn > 6) {
        return this.raiseQualityIfLssthn50ByTwo(i);
      }
      return this.raiseQualityIfLssthn50(i);
    },

    raiseQualityIfLssthn50: function(i) {
      if (this.isQualityLessTh50(i)) {
        return this.raiseQuality(i);
      }
    },

    raiseQualityIfLssthn50ByTwo: function(i) {
      if (this.isQualityLessTh50(i)) {
        return this.raiseQualityByTwo(i);
      }
    },

    raiseQualityIfLssthn50ByThree: function(i) {
      if (this.isQualityLessTh50(i)) {
        return this.raiseQualityByThree(i);
      }
    },

    raiseQuality: function(i) {
      return this._items[i]._quality = this._items[i]._quality + 1

    },

    raiseQualityByTwo: function(i) {
      return this._items[i]._quality = this._items[i]._quality + 2
    },

    raiseQualityByThree: function(i) {
      return this._items[i]._quality = this._items[i]._quality + 3

    },

    checkItemSellIn: function(i) {
      return this._items[i]._sellIn
    },

    isQualPositiveLowerIfSulfura: function(i) {
      if (this.isQualityPositive(i)) {
        if (this.isNotSulfuras(i)) {
          return this.lowerQuality(i);
        }
      }
    }

  };
  exports.Shop = Shop;
})(this);

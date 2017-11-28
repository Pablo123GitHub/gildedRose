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
              this.raiseQualityIfLssThn(i, 6)
              this.raiseQualityIfLssThn(i, 11)
            }
          }
        }

        if (this.isSulfuras(i)) {
          this.checkItemSellIn(i) = this.checkItemSellIn(i) - 1;
        }

      };
    },
    lowerQuality: function(i) {
      return this._items[i]._quality = this._items[i]._quality - 1;
    },
    isSulfuras: function(i) {
      (this._items[i].name != 'Sulfuras, Hand of Ragnaros');
    },
    isQualityPositive: function(i) {
      (this._items[i]._quality > 0);
    },
    isNameNotBrie: function(i) {
      (this._items[i].name != 'Aged Brie');
    },
    isNameNotBackStg: function(i) {
      this._items[i].name != 'Backstage passes to a TAFKAL80ETC concert';
    },
    isQualityLessTh50: function(i) {
      this._items[i]._quality < 50;
    },
    raiseQuality: function(i) {
      this._items[i]._quality = this._items[i]._quality + 1
    },
    checkItemSellIn: function(i) {
      this._items[i].sellIn
    },
    isQualPositiveLowerIfSulfura: function(i) {
      if (this.isQualityPositive(i)) {
        if (this.isSulfuras(i)) {
          this.lowerQuality(i);
        }
      }
    },
    raiseQualityifMoreTh50: function(i) {
      if (this.isQualityLessTh50(i)) {
        this.raiseQuality(i);
      }
    },
    raiseQualityIfLssThn: function(i, days) {
      if (this.checkItemSellIn(i) < days) {
        this.raiseQualityifMoreTh50(i);
      }
    }

  };
  exports.Shop = Shop;
})(this);

// Understands how to display a count.

// "use strict";
//
// (function(exports) {
//   function CountView(countElement) {
//     this._countElement = countElement;
//   };
//
//   CountView.prototype = {
//     display: function(count) {
//       this._countElement.innerHTML = count;
//     }
//   };
//
//   exports.CountView = CountView;
// })(this);
//


// if (this.checkItemSellIn(i) < 0) {
//   if (this.isNameNotBrie(i)) {
//     if (this.isNameNotBackStg(i)) {
//       this.isQualPositiveLowerIfSulfura(i);
//     } else {
//       this._items[i]._quality = 0;
//     }
//   } else {
//     this.raiseQualityifMoreTh50(i);
//   }
// }
//   return this._items;
// }


// }
//

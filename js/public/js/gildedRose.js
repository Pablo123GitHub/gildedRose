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
              this.raiseQualityIfDaysUp(i, 6)
              this.raiseQualityIfDaysUp(i, 11)
            }
          }
        }

        if (this.isNotSulfuras(i)) {
          this.checkItemSellIn(i) = this.checkItemSellIn(i) - 1;
        }

      };
    },

    lowerQuality: function(i) {
      return this._items[i]._quality = this._items[i]._quality - 1;
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

    raiseQuality: function(i) {    
      return this._items[i]._quality = this._items[i]._quality + 1

    },

    checkItemSellIn: function(i) {
      console.log("checkItemSellIng", this._items[i]._sellIn );
      return this._items[i]._sellIn
    },

    isQualPositiveLowerIfSulfura: function(i) {
      if (this.isQualityPositive(i)) {
        if (this.isNotSulfuras(i)) {
        return  this.lowerQuality(i);
        }
      }
    },

    raiseQualityIfLssthn50: function(i) {
      if (this.isQualityLessTh50(i)) {
      return this.raiseQuality(i);
      }
    },

    raiseQualityIfDaysUp: function(i, days) {
      if (this.checkItemSellIn(i) < days) {
        return this.raiseQualityIfLssthn50(i);
      }
      return this.raiseQualityIfLssthn50(i);
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
//     this.raiseQualityIfLssthn50(i);
//   }
// }
//   return this._items;
// }


// }
//

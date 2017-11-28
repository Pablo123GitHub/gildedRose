class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.isNameNotBrie(i) && this.isNameNotBackStg(i)) {
        this.isQualPositiveLowerIfSulfura();
      } else {
        if (this.isQualityLessTh50(i)) {
          this.raiseQuality(i);
          if (!this.isNameNotBackStg(i)) {
            this.raiseQualityIfLssThn(i, 6)
            this.raiseQualityIfLssThn(i, 11)
          }
        }
      }
      if this.isSulfuras(i) {
        this.checkItemSellIn() = this.checkItemSellIn() - 1;
      }
      if (this.checkItemSellIn() < 0) {
        if (this.isNameNotBrie(i)) {
          if (this.isNameNotBackStg(i)) {
            this.isQualPositiveLowerIfSulfura(i);
          } else {
            this.items[i].quality = 0;
          }
        } else {
          this.raiseQualityifMoreTh50(i);
        }
      }
    }

    return this.items;
  }
}

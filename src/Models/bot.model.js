export default class Bot {
    constructor() {
      this.id = 0;
      this.name = null;
      this.description = null;
      this.market = 0;
      this.orderType = 0;
      this.positionType = 0;
      this.trendStrategy = 0;
      this.priceVolume = 0;
      this.assetIds = [];
      this.strategyIds = [];
      this.formationIds = [];
      this.priceVolume = 0;
    }
  
    initModel(data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.market = data.market;
      this.orderType = data.orderType
      this.positionType = data.positionType;
      this.trendStrategy = data.trendStrategy;
      this.priceVolume = data.priceVolume;
      this.assetIds = data.assetIds;
      this.strategyIds = data.strategyIds;
      this.formationIds = data.formationIds;
      this.priceVolume = data.priceVolume;
    }
  }  
const baseUrl = "https://api.hypance.com/";
const getSymbolUrl = baseUrl+"Symbol/GetAll";
const getMarketUrl = baseUrl+"Enums/GetMarkets";
const getOrderTypeUrl = baseUrl+"Enums/GetOrderTypes";
const getPositionTypeUrl = baseUrl+"Enums/GetPositionTypes";
const getStrategiesUrl = baseUrl+"Strategy/GetAll";
const getTrendStrategies = baseUrl+"Enums/GetTrendStrategies";
const createStrategyUrl = baseUrl+"Symbol/GetAll";
const createBotUrl = baseUrl+"Bot/Post";
module.exports={
    getSymbolUrl,
    getMarketUrl,
    getOrderTypeUrl,
    getPositionTypeUrl,
    getStrategiesUrl,
    getTrendStrategies,
    createStrategyUrl,
    createBotUrl
}
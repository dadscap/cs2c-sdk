# cs2cap-sdk@1.0.0

A TypeScript SDK client for the api.cs2c.app API.

## Usage

First, install the SDK from npm.

```bash
npm install cs2cap-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  BidsApi,
} from 'cs2cap-sdk';
import type { ListBidsV1BidsGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BidsApi(config);

  const body = {
    // number | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. (optional)
    itemId: 56,
    // string | Optional market_hash_name to filter for specific item. Ignored when item_id is provided. (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Optional phase to filter (global or combined with market_hash_name). Ignored when item_id is provided. (optional)
    phase: ...,
    // Array<BuyOrderProvider> | Providers to include (provider-key enum values that support buy orders). Repeat `providers` to pass multiple values. (optional)
    providers: ...,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of results to return. (optional)
    limit: 56,
    // number | Number of results to skip for pagination. (optional)
    offset: 56,
  } satisfies ListBidsV1BidsGetRequest;

  try {
    const data = await api.listBidsV1BidsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.cs2c.app*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BidsApi* | [**listBidsV1BidsGet**](docs/BidsApi.md#listbidsv1bidsget) | **GET** /v1/bids | List Bids
*ForeignExchangeApi* | [**getFxRatesV1FxGet**](docs/ForeignExchangeApi.md#getfxratesv1fxget) | **GET** /v1/fx | Get Fx Rates
*ItemsApi* | [**getMarketIdsV1ItemsMarketIdsGet**](docs/ItemsApi.md#getmarketidsv1itemsmarketidsget) | **GET** /v1/items/market-ids | Get Market Ids
*ItemsApi* | [**listItemsV1ItemsGet**](docs/ItemsApi.md#listitemsv1itemsget) | **GET** /v1/items | List Items
*MarketIntelligenceApi* | [**getArbitrageOpportunitiesV1MarketArbitrageGet**](docs/MarketIntelligenceApi.md#getarbitrageopportunitiesv1marketarbitrageget) | **GET** /v1/market/arbitrage | Get Arbitrage Opportunities
*MarketIntelligenceApi* | [**getIndicatorsV1MarketIndicatorsGet**](docs/MarketIntelligenceApi.md#getindicatorsv1marketindicatorsget) | **GET** /v1/market/indicators | Get Indicators
*MarketIntelligenceApi* | [**getItemAnalyticsV1MarketItemsItemIdGet**](docs/MarketIntelligenceApi.md#getitemanalyticsv1marketitemsitemidget) | **GET** /v1/market/items/{item_id} | Get Item Analytics
*MarketIntelligenceApi* | [**getMarketMoversV1MarketMoversGet**](docs/MarketIntelligenceApi.md#getmarketmoversv1marketmoversget) | **GET** /v1/market/movers | Get Market Movers
*MarketIntelligenceApi* | [**getMarketRankingsV1MarketRankingsMetricGet**](docs/MarketIntelligenceApi.md#getmarketrankingsv1marketrankingsmetricget) | **GET** /v1/market/rankings/{metric} | Get Market Rankings
*PricesApi* | [**listPricesV1PricesGet**](docs/PricesApi.md#listpricesv1pricesget) | **GET** /v1/prices | List Prices
*PricesApi* | [**priceCandlesV1PricesCandlesGet**](docs/PricesApi.md#pricecandlesv1pricescandlesget) | **GET** /v1/prices/candles | Price Candles
*PricesApi* | [**priceHistoryV1PricesHistoryGet**](docs/PricesApi.md#pricehistoryv1priceshistoryget) | **GET** /v1/prices/history | Price History
*ProvidersApi* | [**listProvidersV1ProvidersGet**](docs/ProvidersApi.md#listprovidersv1providersget) | **GET** /v1/providers | List Providers
*SalesApi* | [**listSalesV1SalesGet**](docs/SalesApi.md#listsalesv1salesget) | **GET** /v1/sales | List Recent Sales


### Models

- [AllProviders](docs/AllProviders.md)
- [BidsFilterMeta](docs/BidsFilterMeta.md)
- [BidsMeta](docs/BidsMeta.md)
- [BidsResponse](docs/BidsResponse.md)
- [BuyOrderItem](docs/BuyOrderItem.md)
- [BuyOrderProvider](docs/BuyOrderProvider.md)
- [CharmInfo](docs/CharmInfo.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [FXRatesResponse](docs/FXRatesResponse.md)
- [IndicatorDataCoverage](docs/IndicatorDataCoverage.md)
- [IndicatorMomentum](docs/IndicatorMomentum.md)
- [IndicatorSignals](docs/IndicatorSignals.md)
- [IndicatorVolatility](docs/IndicatorVolatility.md)
- [IndicatorVolume](docs/IndicatorVolume.md)
- [InspectInfo](docs/InspectInfo.md)
- [ItemOut](docs/ItemOut.md)
- [ItemsInner](docs/ItemsInner.md)
- [LocInner](docs/LocInner.md)
- [MarketArbitrageData](docs/MarketArbitrageData.md)
- [MarketArbitrageItem](docs/MarketArbitrageItem.md)
- [MarketArbitrageMeta](docs/MarketArbitrageMeta.md)
- [MarketArbitrageResponse](docs/MarketArbitrageResponse.md)
- [MarketIdsResponse](docs/MarketIdsResponse.md)
- [MarketIndicatorsItemData](docs/MarketIndicatorsItemData.md)
- [MarketIndicatorsItemResponse](docs/MarketIndicatorsItemResponse.md)
- [MarketIndicatorsMeta](docs/MarketIndicatorsMeta.md)
- [MarketIndicatorsScreenerItem](docs/MarketIndicatorsScreenerItem.md)
- [MarketIndicatorsScreenerResponse](docs/MarketIndicatorsScreenerResponse.md)
- [MarketItem](docs/MarketItem.md)
- [MarketItemAnalyticsCoverage](docs/MarketItemAnalyticsCoverage.md)
- [MarketItemAnalyticsData](docs/MarketItemAnalyticsData.md)
- [MarketItemAnalyticsProvider](docs/MarketItemAnalyticsProvider.md)
- [MarketItemAnalyticsResponse](docs/MarketItemAnalyticsResponse.md)
- [MarketItemAnalyticsSummary](docs/MarketItemAnalyticsSummary.md)
- [MarketMeta](docs/MarketMeta.md)
- [MarketMoverItem](docs/MarketMoverItem.md)
- [MarketMoversData](docs/MarketMoversData.md)
- [MarketMoversResponse](docs/MarketMoversResponse.md)
- [MarketRankingData](docs/MarketRankingData.md)
- [MarketRankingLiquidityItem](docs/MarketRankingLiquidityItem.md)
- [MarketRankingListResponse](docs/MarketRankingListResponse.md)
- [MarketRankingMeta](docs/MarketRankingMeta.md)
- [MarketRankingVolatilityItem](docs/MarketRankingVolatilityItem.md)
- [MarketRankingVolumeItem](docs/MarketRankingVolumeItem.md)
- [MarketTimeWindowMeta](docs/MarketTimeWindowMeta.md)
- [MaxPriceUsd](docs/MaxPriceUsd.md)
- [MinPriceUsd](docs/MinPriceUsd.md)
- [MinVolumeUsd](docs/MinVolumeUsd.md)
- [PaginatedResponseItemOut](docs/PaginatedResponseItemOut.md)
- [PaginationMeta](docs/PaginationMeta.md)
- [PhaseName](docs/PhaseName.md)
- [PriceCandleItem](docs/PriceCandleItem.md)
- [PriceCandlesMeta](docs/PriceCandlesMeta.md)
- [PriceCandlesPage](docs/PriceCandlesPage.md)
- [PriceHistoryFiltersMeta](docs/PriceHistoryFiltersMeta.md)
- [PriceHistoryMeta](docs/PriceHistoryMeta.md)
- [PriceSnapshot](docs/PriceSnapshot.md)
- [PriceSnapshotPage](docs/PriceSnapshotPage.md)
- [PricesFilterMeta](docs/PricesFilterMeta.md)
- [PricesMeta](docs/PricesMeta.md)
- [PricesPaginatedResponseMarketItem](docs/PricesPaginatedResponseMarketItem.md)
- [ProviderFeatures](docs/ProviderFeatures.md)
- [ProviderFees](docs/ProviderFees.md)
- [ProviderHealth](docs/ProviderHealth.md)
- [ProviderInfo](docs/ProviderInfo.md)
- [RecentSalesProvider](docs/RecentSalesProvider.md)
- [ResponseGetIndicatorsV1MarketIndicatorsGet](docs/ResponseGetIndicatorsV1MarketIndicatorsGet.md)
- [SaleRecordDetail](docs/SaleRecordDetail.md)
- [SalesFiltersMeta](docs/SalesFiltersMeta.md)
- [SalesHistoryResponse](docs/SalesHistoryResponse.md)
- [SalesMeta](docs/SalesMeta.md)
- [StickerInfo](docs/StickerInfo.md)
- [ValidationErrorItem](docs/ValidationErrorItem.md)
- [ValidationErrorResponse](docs/ValidationErrorResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()

function returndata(){
var data = [{
  "currency": "EUR",
  "rootTarget": {
    "target": "portfolio", "weightInPortfolio": 1, "weightInClass": 1, "marketValue": 200000000,
    "views": [
      {
        "view": "currency",
        "targets": [
          {"target": "EUR", "weightInPortfolio": 0.3, "weightInClass": 0.3, "marketValue": 60000000},
          {"target": "USD", "weightInPortfolio": 0.2, "weightInClass": 0.2, "marketValue": 40000000},
          {"target": "CNY", "weightInPortfolio": 0.2, "weightInClass": 0.2, "marketValue": 40000000},
          {"target": "JPY", "weightInPortfolio": 0.1, "weightInClass": 0.1, "marketValue": 20000000},
          {"target": "GBP", "weightInPortfolio": 0.1, "weightInClass": 0.1, "marketValue": 20000000},
          {"target": "minor", "weightInPortfolio": 0.1, "weightInClass": 0.1, "marketValue": 20000000},
          {"target": "unknown", "weightInPortfolio": 0, "weightInClass": 0, "marketValue": 0}
        ]
      },
      {
        "view": "liquidity",
        "targets": [
          {"target": "liquid", "weightInPortfolio": 0.3, "weightInClass": 0.3, "marketValue": 60000000},
          {"target": "nonLiquid", "weightInPortfolio": 0.7, "weightInClass": 0.7, "marketValue": 140000000},
          {"target": "unknown", "weightInPortfolio": 0, "weightInClass": 0, "marketValue": 0}
        ]
      },
      {
        "view": "assetClass",
        "targets": [
          {
            "target": "equity", "weightInPortfolio": 0.3, "weightInClass": 0.3, "marketValue": 60000000,
            "views": [
              {
                "view": "equityClass",
                "targets": [
                  {"target": "nordicEquity", "weightInPortfolio": 0.12, "weightInClass": 0.4, "marketValue": 24000000},
                  {"target": "europeanEquity", "weightInPortfolio": 0.06, "weightInClass": 0.2, "marketValue": 12000000},
                  {"target": "ukEquity", "weightInPortfolio": 0.03, "weightInClass": 0.1, "marketValue": 6000000},
                  {"target": "japaneseEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000},
                  {"target": "asianDevelopedEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000},
                  {"target": "emergingMarketsEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000},
                  {"target": "frontierEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000},
                  {"target": "reitEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000},
                  {"target": "globalEquity", "weightInPortfolio": 0.015, "weightInClass": 0.05, "marketValue": 3000000}
                ]  
              }
            ]
          },
          {
            "target": "bond", "weightInPortfolio": 0.5, "weightInClass": 0.5, "marketValue": 100000000,
            "views": [
              {
                "view": "bondClass",
                "targets": [
                  {"target": "europeanGovernment", "weightInPortfolio": 0.2, "weightInClass": 0.4, "marketValue": 40000000},
                  {"target": "europeanIG", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "europeanHY", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "europeanCovered", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "europeanConvertible", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "europeanLoans", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "foreignOECDGovernment", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "foreignOECDIG", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "foreignOECDHY", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "foreignOECDLoans", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "emergingMarketsGovernmentLocal", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "emergingMarketsGovernmentHard", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000},
                  {"target": "emergingMarketsCorporate", "weightInPortfolio": 0.025, "weightInClass": 0.05, "marketValue": 5000000}
                ]  
              }
            ]
          },
          {
            "target": "property", "weightInPortfolio": 0.1, "weightInClass": 0.1, "marketValue": 20000000,
            "views": [
              {
                "view": "propertyClass",
                "targets": [
                  {"target": "CommercialProperty", "weightInPortfolio": 0.03, "weightInClass": 0.3, "marketValue": 6000000},
                  {"target": "ResidentalProperty", "weightInPortfolio": 0.03, "weightInClass": 0.3, "marketValue": 6000000},
                  {"target": "Offices", "weightInPortfolio": 0.02, "weightInClass": 0.2, "marketValue": 4000000},
                  {"target": "LandOrForest", "weightInPortfolio": 0.02, "weightInClass": 0.2, "marketValue": 4000000}
                ]  
              }
            ]
          },
          {
            "target": "cash", "weightInPortfolio": 0.05, "weightInClass": 0.05, "marketValue": 10000000,
            "views": [
              {
                "view": "cashClass",
                "targets": [
                  {"target": "cashAccount", "weightInPortfolio": 0.025, "weightInClass": 0.5, "marketValue": 5000000},
                  {"target": "euMoneyMarkets", "weightInPortfolio": 0.025, "weightInClass": 0.5, "marketValue": 5000000}
                ]  
              }
            ]
          },
          {
            "target": "alternative", "weightInPortfolio": 0.05, "weightInClass": 0.05, "marketValue": 10000000,
            "views": [
              {
                "view": "Tyyppi",
                "targets": [
                  {"target": "privateEquity", "weightInPortfolio": 0.0125, "weightInClass": 0.25, "marketValue": 2500000},
                  {"target": "strux", "weightInPortfolio": 0.0375, "weightInClass": 0.75, "marketValue": 7500000}
                ]  
              }
            ]
          },
          {"target": "unknown", "weightInPortfolio": 0, "weightInClass": 0, "marketValue": 0}
        ]
      }
    ]
  }
}];
return data;
}
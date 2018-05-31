const Decimal = require("decimal.js").Decimal;

import { CURRENCY } from "../actions/currency";

const DROPS_PER_TRX = new Decimal(1000000);

export function dropsToTrx(drops) {
  return new Decimal(drops)
    .div(DROPS_PER_TRX)
    .toFixed(8)
    .toString();
}

export function trxToDrops(trx) {
  return new Decimal(trx)
    .mul(DROPS_PER_TRX)
    .toFixed(8)
    .toString();
}

export function dropsToFiat(currencyState, trx, currency = CURRENCY.USD) {
  return new Decimal(dropsToTrx(trx))
    .mul(new Decimal(currencyState[currency]))
    .toFixed(2)
    .toString();
}

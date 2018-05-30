let Decimal = require('decimal.js');

import {CURRENCY} from "../actions/currency";

const DROPS_PER_TRX = new Decimal(1000000);

export function dropsToTrx(drops){
    return new Decimal(drops).div(DROPS_PER_TRX).toString();
}

export function trxToDrops(trx){
    return new Decimal(drops).mul(DROPS_PER_TRX).toString();
}

export function dropsToFiat(currencyState, trx, currency=CURRENCY.USD){
    return dropsToTrx(trx).mul(new Decimal(currency[currency]));
}

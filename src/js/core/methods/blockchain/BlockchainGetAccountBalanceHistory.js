/* @flow */

import { getCoinInfo } from '@trezor/connect-common';
import AbstractMethod from '../AbstractMethod';
import { validateParams } from '../helpers/paramsValidator';
import { ERRORS } from '../../../constants';

import { isBackendSupported, initBlockchain } from '../../../backend/BlockchainLink';
import type { CoinInfo } from '../../../types';

type Params = {
    coinInfo: CoinInfo,
    request: {
        descriptor: string,
        from?: number,
        to?: number,
        groupBy?: number,
    },
};

export default class BlockchainGetAccountBalanceHistory extends AbstractMethod<'blockchainGetAccountBalanceHistory'> {
    params: Params;

    init() {
        this.useDevice = false;
        this.useUi = false;

        const { payload } = this;

        // validate incoming parameters
        validateParams(payload, [
            { name: 'coin', type: 'string', required: true },
            { name: 'descriptor', type: 'string', required: true },
            { name: 'from', type: 'number', required: false },
            { name: 'to', type: 'number', required: false },
            { name: 'groupBy', type: 'number', required: false },
        ]);

        const coinInfo = getCoinInfo(payload.coin);
        if (!coinInfo) {
            throw ERRORS.TypedError('Method_UnknownCoin');
        }
        // validate backend
        isBackendSupported(coinInfo);

        this.params = {
            coinInfo,
            request: {
                descriptor: payload.descriptor,
                from: payload.from,
                to: payload.to,
                groupBy: payload.groupBy,
            },
        };
    }

    async run() {
        const backend = await initBlockchain(this.params.coinInfo, this.postMessage);
        return backend.getAccountBalanceHistory(this.params.request);
    }
}

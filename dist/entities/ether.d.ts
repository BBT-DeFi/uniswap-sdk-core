<<<<<<< HEAD
import { Currency } from './currency';
import { NativeCurrency } from './nativeCurrency';
import { Token } from './token';
/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export declare class Ether extends NativeCurrency {
    private _wrappedEtherAddress;
    private _wrappedEther;
    protected constructor(chainId: number, address: string);
    get wrapped(): Token;
    static onChain(chainId: number, address: string): Ether;
    equals(other: Currency): boolean;
}
=======
import { Currency } from './currency';
import { NativeCurrency } from './nativeCurrency';
import { Token } from './token';
/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export declare class Ether extends NativeCurrency {
    private _wrappedEtherAddress;
    private _wrappedEther;
    protected constructor(chainId: number, address: string);
    get wrapped(): Token;
    static onChain(chainId: number, address: string): Ether;
    equals(other: Currency): boolean;
}
>>>>>>> eadf607709132c7b982cedef45f16a1b57833f3d

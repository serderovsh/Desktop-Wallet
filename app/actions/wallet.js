const TronHttpClient = require('tron-http-client');
const TronHttpTools = require('tron-http-tools');

export const SET_TOKEN_BALANCES = 'SET_TOKEN_BALANCES';
export const INIT = 'INIT';
export const FINISH_INITIALIZATION = 'FINISH_INITIALIZATION';

const LOCALSTORAGE_KEY = "TRON_WATCH";

export const WALLET_TYPE = {
    HOT : 0,
    COLD : 1
};
export const WALLET_STATE = {
    NEEDS_LOADING : 0,
    NO_WALLET : 1,
    NEEDS_USER_UNLOCK : 2,
    READY : 3
};
export const PERSISTENT_SECURITY_METHOD = {
    NONE : 0,
    USER_ENCRYPTED : 1
};

export const setTokenBalances = (tokens = [], frozen = {}) => ({
  type: SET_TOKEN_BALANCES,
  tokens,
  frozen,
});

export const loadTokenBalances = (password) => async (dispatch) => {
  let { balances, frozen } = await Client.getAccountBalances(password);
  dispatch(setTokenBalances(balances, frozen));
};


/*makes sure a persistent object has all required properties*/
function verifyPersistent(persistent){
    if(!('priv' in persistent)){
        console.log("persistent.priv missing");
        return false;
    }
    if(!('accounts' in persistent)){
        console.log("persistent.accounts missing");
        return false;
    }
    if(!Array.isArray(persistent.accounts)){
        console.log("persistent.accounts is not an array");
        return false;
    }
    if(!('walletType' in persistent)){
        console.log("persistent.walletType missing");
        return false;
    }
    if(!('securityMethod' in persistent)){
        console.log("persistent.securityMethod missing");
        return false;
    }

    return true;
}

function decryptPersistent(persistent){

}

function savePersistent(persistent){
    if(verifyPersistent(persistent)){
        try{
            window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistent));
            return true;
        }catch (e) {
            return false;
        }
    }else{
        throw "savePersistent verification failed";
    }
}

function addAccount(persistent, accountName : "New Wallet"){
    let index = persistent.accounts.length;
    let newAccount = TronHttpTools.accounts.getAccountAtIndex(persistent.priv , index);

    persistent.accounts.push({
        index : index,
        trx : 0,
        name : walletName,
        publicKey : index0Account.pub,
        privateKey: index0Account.priv,

        tokens : [],
        transactions : [],
        votes : [],

        lastSync : 0, //timestamp with last sync
    });

}

export const createWallet = (props, accountName="Unnamed Wallet") => {
    let newAccount = TronHttpTools.accounts.generateRandomBip39();
    let index0Account = TronHttpTools.accounts.getAccountAtIndex(newAccount.privateKey, 0);
    let newPersistent = {
        priv : newAccount.privateKey,
        accounts: [],
        walletType : WALLET_TYPE.HOT,
        securityMethod : PERSISTENT_SECURITY_METHOD.NONE,
    };

    newPersistent = addAccount(newPersistent, accountName);

    if(savePersistent(newPersistent)){
        return {
            type : FINISH_INITIALIZATION,
            wallet_state : WALLET_STATE.READY,
            persistent : newPersistent
        };
    }else{
        throw 'create wallet failed on step: savePersistent';
    }
};

export const createAccount = (props) => {

};


export const updateAllAccounts = (props) =>{

};

export const initFromStorage = (props) =>{
    let persistent = window.localStorage.getItem(LOCALSTORAGE_KEY);

    if(persistent){
        persistent = JSON.parse(persistent);

        if(persistent.securityMethod === PERSISTENT_SECURITY_METHOD.NONE){
            return {
                type : FINISH_INITIALIZATION,
                wallet_state : WALLET_STATE.READY,
                persistent : persistent
            };
            props.history.push("/wallets/create");
        }else if(persistent.securityMethod === PERSISTENT_SECURITY_METHOD.USER_ENCRYPTED){
            throw 'USER_ENCRYPTED not implemented';
        }else{
            window.localStorage.removeItem(LOCALSTORAGE_KEY);
            throw "initFromStorage failed. deleting persistent " + persistent;
        }
    }else{
        props.history.push("/wallets/create");
        return {
            type : INIT,
            whatthefuck : "abc",
            reactisretarded : true
        };
    }


};

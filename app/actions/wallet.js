const TronHttpClient = require('tron-http-client');
const TronHttpTools = require('tron-http-tools');
const crypto = require('crypto');
const client = new TronHttpClient();
const Decimal = require('decimal.js').Decimal;

export const SET_TOKEN_BALANCES = 'SET_TOKEN_BALANCES';
export const INIT = 'INIT';
export const INITIALIZATION_NEED_DECRYPTION = 'AWAITING_DECRYPTION';
export const FINISH_INITIALIZATION = 'FINISH_INITIALIZATION';
export const UPDATE_ALL_ACCOUNTS = 'UPDATE_ALL_ACCOUNTS';
export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS';

const LOCALSTORAGE_KEY = "TRON_WATCH";
const algorithm = 'aes-256-ctr';

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
    if(!('accounts' in persistent)){
        console.log("persistent.accounts missing");
        return false;
    }
    /*
    if(!('walletType' in persistent)){
        console.log("persistent.walletType missing");
        return false;
    }
    */

    return true;
}


function encrypt(text, password){
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text, password){
    let decipher = crypto.createDecipher(algorithm,password)
    let dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

function savePersistent(persistent, password=""){
    if(verifyPersistent(persistent)){
        let persistentString = JSON.stringify(persistent);
        let encryptedString = encrypt(persistentString, password);
        window.localStorage.setItem(LOCALSTORAGE_KEY, encryptedString);
        return true;
    }else{
        console.log(persistent);
        throw "savePersistent verification failed";
    }
}

function addAccount(persistent, accountName = "Unnamed Wallet", newAccount = null){
    if(newAccount === null)
        newAccount = TronHttpTools.accounts.generateRandomBip39();

    persistent.accounts[newAccount.address] ={
        trx : 0,
        name : accountName,
        publicKey : newAccount.address,
        privateKey: newAccount.privateKey,
        words : (newAccount.words ? newAccount.words : false),

        tokens : [],
        transactions : [],
        votes : [],

        lastSync : 0, //timestamp with last sync

        frozenBalance : 0,
        frozenExpireTime : 0,
        bandwidth : 0
    };

    return persistent;
}

export const createWallet = (props, accountName="Unnamed Wallet") => {
    let newPersistent = {
        accounts: {},
        walletType : WALLET_TYPE.HOT
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

async function getAccountsInfo(persistent){
    console.log(persistent);
    return await client.getAccounts(Object.keys(persistent.accounts));
}

export const updateAllAccounts = (persistent) =>{
    return {
        type : UPDATE_ALL_ACCOUNTS,
        persistent : persistent
    }
};

export const createAccount = (props, accountName, newAccount = null) => {
    let persistent = addAccount(props.wallet.persistent, accountName, newAccount);
    savePersistent(persistent);
    return {
        type : UPDATE_ALL_ACCOUNTS,
        persistent: persistent
    }
};

export const updateTransferTransactions = async (address, dispatch) => {
    let transactions = await client.getTransactionsRelatedToThis(address);

    let cleanedTransactions = [];
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];

        let newTransaction = {
            ...transaction,
            amount: transaction.amount,
            date: transaction.timestamp,
            type: (transaction.owner_address === address) ? 1 : 0,
            asset: (transaction.asset_name) ? transaction.asset_name : 'TRX',
        };

        if (transactions[i].contract_desc === 'TransferContract' ||
            transactions[i].contract_desc === 'ParticipateAssetIssueContract' ||
            transactions[i].contract_desc === 'TransferAssetContract') {
            cleanedTransactions.push(newTransaction);
        }
    }

    dispatch(updateTransactions(address, cleanedTransactions));
}

export const updateTransactions = (accountId, transactions)=>{
    return {
        type : UPDATE_TRANSACTIONS,
        accountId : accountId,
        transactions : transactions
    }
};

function startUpdateAccountsAsync(persistent, dispatch){
    setTimeout(async ()=>{
        let accountsInfo = await getAccountsInfo(persistent);
        let accountIds = Object.keys(persistent.accounts);
        for(let j = 0;j<accountIds.length;j++){
            let i = accountIds[j];
            let info = accountsInfo[persistent.accounts[i].publicKey];
            if(info){
                persistent.accounts[i].trx = info.trx;
                persistent.accounts[i].tokens = info.tokens;
                persistent.accounts[i].frozenBalance = parseInt(info.frozen_balance/1000000);
                persistent.accounts[i].frozenExpireTime = info.frozen_expire_time;
                if(info.net){
                    persistent.accounts[i].bandwidth = new Decimal(info.net.netlimit).sub(new Decimal(info.net.netused)).toString();
                }else{
                    persistent.accounts[i].bandwidth = 0;
                }
            }
        }
        dispatch(updateAllAccounts(persistent));
    }, 0);
}

export const populateDecryptedPersistent = (persistent)=>{
    return {
        type : FINISH_INITIALIZATION,
        wallet_state : WALLET_STATE.READY,
        persistent : persistent
    };
};

function decryptPersistent(persistent, password="", dispatch){
    console.log("attempting decryption");
    let decrypted = null;
    try{
        decrypted = JSON.parse(decrypt(persistent, password));
        dispatch(populateDecryptedPersistent(decrypted));
        startUpdateAccountsAsync(decrypted, dispatch);
        return true;
    }catch (e) {
        console.log(e);
        return false;
    }
}

export const initFromStorage = (props, dispatch) =>{
    let persistent = window.localStorage.getItem(LOCALSTORAGE_KEY);

    if(persistent){
        try{
            console.log("loaded encrypted persistent:");
            console.log(persistent);

            //testing
            setTimeout(()=>{
                decryptPersistent(persistent, "", dispatch);
            },0);
            return {
                type : INITIALIZATION_NEED_DECRYPTION,
                wallet_state : WALLET_STATE.NEEDS_USER_UNLOCK,
                persistent_encrypted : persistent
            };

        }catch (e) {
            window.localStorage.removeItem(LOCALSTORAGE_KEY);
            console.log(e);
            console.log("initFromStorage failed. deleting persistent " + persistent);

            props.history.push("/wallets/create");
            return {
                type : INIT
            };
        }
    }else{
        props.history.push("/wallets/create");
        return {
            type : INIT
        };
    }
};

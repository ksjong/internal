const bankAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_interestRate","type":"uint256"},{"name":"_owner","type":"address"}],"outputs":[]},{"name":"deployAccountForUser","inputs":[{"name":"_initBalance","type":"uint128"},{"name":"_freezer","type":"bool"}],"outputs":[]},{"name":"getAddress","inputs":[{"name":"_accountAddress","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"loan","inputs":[{"name":"_loanNum","type":"uint256"},{"name":"_accountAddress","type":"address"}],"outputs":[]},{"name":"calculating","inputs":[],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"repaying","inputs":[{"name":"_repayAmount","type":"uint128"},{"name":"_accountAddress","type":"address"}],"outputs":[]},{"name":"freezeUserAccount","inputs":[{"name":"_userAddress","type":"address"},{"name":"_freezer","type":"bool"}],"outputs":[]},{"name":"mintAccount","inputs":[{"name":"_accountAddress","type":"address"},{"name":"_money","type":"uint256"}],"outputs":[]},{"name":"getInterestRate","inputs":[],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"getProfit","inputs":[],"outputs":[{"name":"_profit","type":"uint256"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"interestRate","inputs":[],"outputs":[{"name":"interestRate","type":"uint256"}]},{"name":"bankProfit","inputs":[],"outputs":[{"name":"bankProfit","type":"uint256"}]},{"name":"loanNum","inputs":[],"outputs":[{"name":"loanNum","type":"uint256"}]},{"name":"isLoanAvailable","inputs":[],"outputs":[{"name":"isLoanAvailable","type":"bool"}]},{"name":"bankAddress","inputs":[],"outputs":[{"name":"bankAddress","type":"address"}]}],"data":[{"key":1,"name":"userContractCode","type":"cell"}],"events":[{"name":"AccountDeployed","inputs":[{"name":"accountAddress","type":"address"},{"name":"sender","type":"address"}],"outputs":[]},{"name":"LoanTaken","inputs":[{"name":"user","type":"address"},{"name":"loanNum","type":"uint256"}],"outputs":[]},{"name":"RepayfromUserSuccess","inputs":[{"name":"user","type":"address"},{"name":"TotalRepay","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"userContractCode","type":"cell"},{"name":"interestRate","type":"uint256"},{"name":"bankProfit","type":"uint256"},{"name":"loanNum","type":"uint256"},{"name":"isLoanAvailable","type":"bool"},{"name":"bankAddress","type":"address"}]} as const
const bankAccountAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_initialBalance","type":"uint128"},{"name":"_freezer","type":"bool"},{"name":"_userContractCode","type":"cell"}],"outputs":[]},{"name":"borrowMoney","inputs":[{"name":"_amount","type":"uint256"}],"outputs":[]},{"name":"loanReceived","inputs":[{"name":"_loanNum","type":"uint256"}],"outputs":[]},{"name":"repayLoan","inputs":[{"name":"_repayAmount","type":"uint128"}],"outputs":[]},{"name":"repayAccepted","inputs":[{"name":"_totalRepayAmount","type":"uint256"}],"outputs":[]},{"name":"repayRejected","inputs":[],"outputs":[]},{"name":"getAddress","inputs":[{"name":"_accountAddress","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"sendMoneyToUser","inputs":[{"name":"_money","type":"uint256"},{"name":"_destAddress","type":"address"}],"outputs":[]},{"name":"receivedMoneyFromUser","inputs":[{"name":"_money","type":"uint256"},{"name":"_ownerAddress","type":"address"}],"outputs":[]},{"name":"mintedMoney","inputs":[{"name":"_money","type":"uint256"},{"name":"_initialSender","type":"address"}],"outputs":[]},{"name":"freezerSet","inputs":[{"name":"_freezer","type":"bool"},{"name":"_initialSender","type":"address"}],"outputs":[]},{"name":"getMoney","inputs":[],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"money","inputs":[],"outputs":[{"name":"money","type":"uint256"}]},{"name":"userContractCode","inputs":[],"outputs":[{"name":"userContractCode","type":"cell"}]},{"name":"freezer","inputs":[],"outputs":[{"name":"freezer","type":"bool"}]}],"data":[{"key":1,"name":"bankAddress","type":"address"},{"key":2,"name":"owner","type":"address"}],"events":[{"name":"BorrowedMoney","inputs":[{"name":"user","type":"address"},{"name":"_amount","type":"uint256"}],"outputs":[]},{"name":"LoanRepay","inputs":[{"name":"user","type":"address"},{"name":"repayAmount","type":"uint256"}],"outputs":[]},{"name":"receivedSuccess","inputs":[{"name":"_loanNum","type":"uint256"}],"outputs":[]},{"name":"repaySuccess","inputs":[{"name":"_totalRepayAmount","type":"uint256"}],"outputs":[]},{"name":"RepayRejected","inputs":[{"name":"message","type":"string"}],"outputs":[]},{"name":"SendMoney","inputs":[{"name":"money","type":"uint256"},{"name":"sender","type":"address"}],"outputs":[]},{"name":"ReceivedMoney","inputs":[{"name":"money","type":"uint256"},{"name":"sender","type":"address"}],"outputs":[]},{"name":"SetFreezer","inputs":[{"name":"sender","type":"address"},{"name":"freezer","type":"bool"}],"outputs":[]},{"name":"MintedMoney","inputs":[{"name":"_money","type":"uint256"},{"name":"sender","type":"address"}],"outputs":[]},{"name":"CatchBounceSendMoney","inputs":[{"name":"money","type":"uint256"}],"outputs":[]},{"name":"CatchBounceReceiveMoney","inputs":[{"name":"money","type":"uint256"}],"outputs":[]},{"name":"CatchBounceTest","inputs":[{"name":"test","type":"string"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"money","type":"uint256"},{"name":"bankAddress","type":"address"},{"name":"owner","type":"address"},{"name":"userContractCode","type":"cell"},{"name":"freezer","type":"bool"}]} as const
const companyAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"deployAccountForWorker","inputs":[],"outputs":[]},{"name":"doWork","inputs":[{"name":"_workerOwner","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_salary","type":"uint128"},{"name":"_totalSalaryPayed","type":"uint128"}]}],"data":[{"key":1,"name":"owner","type":"address"},{"key":2,"name":"workerCode","type":"cell"}],"events":[{"name":"AccountDeployed","inputs":[{"name":"workerAddress","type":"address"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"NewWorkerRegistered","inputs":[{"name":"worker","type":"address"},{"name":"workerOwner","type":"address"}],"outputs":[]},{"name":"SalaryPayed","inputs":[{"name":"worker","type":"address"},{"name":"salary","type":"uint128"},{"name":"totalSalaryPayed","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"MIN_BALANCE","type":"uint128"},{"name":"owner","type":"address"},{"name":"workerCode","type":"cell"},{"name":"salary","type":"uint128"},{"name":"totalSalaryPayed","type":"uint128"}]} as const
const factoryAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"deployAccountForUser","inputs":[],"outputs":[]}],"data":[{"key":1,"name":"accountCode","type":"cell"}],"events":[{"name":"AccountDeployed","inputs":[{"name":"accountAddress","type":"address"},{"name":"owner","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"MIN_BALANCE","type":"uint128"},{"name":"accountCode","type":"cell"}]} as const
const factoryAccountAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"value0","type":"address"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"factory","inputs":[],"outputs":[{"name":"factory","type":"address"}]}],"data":[{"key":1,"name":"owner","type":"address"},{"key":2,"name":"factory","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"factory","type":"address"}]} as const
const fibonacciAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"setNumber","inputs":[{"name":"_newNumber","type":"uint256"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_firstNumber","type":"uint256"},{"name":"_secondNumber","type":"uint256"}]},{"name":"calculateNextNumber","inputs":[],"outputs":[{"name":"_nextNumber","type":"uint256"}]}],"data":[{"key":1,"name":"_nonce","type":"uint32"}],"events":[{"name":"StateChange","inputs":[{"name":"firstNumber","type":"uint256"},{"name":"secondNumber","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint32"},{"name":"firstNumber","type":"uint256"},{"name":"secondNumber","type":"uint256"}]} as const
const simpleWalletAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_pubKey","type":"uint256"}],"outputs":[]},{"name":"sendToMyFriend","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"}],"outputs":[]},{"name":"pubKey","inputs":[],"outputs":[{"name":"pubKey","type":"uint256"}]},{"name":"balance","inputs":[],"outputs":[{"name":"balance","type":"uint128"}]}],"data":[],"events":[{"name":"BalanceChanged","inputs":[{"name":"oldBalance","type":"uint128"},{"name":"newBalance","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"pubKey","type":"uint256"},{"name":"balance","type":"uint128"}]} as const
const workerAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"startWork","inputs":[],"outputs":[]},{"name":"receiveSalary","inputs":[{"name":"_salary","type":"uint128"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_owner","type":"address"},{"name":"_company","type":"address"},{"name":"_isRegistered","type":"bool"},{"name":"_totalSalaryReceived","type":"uint128"}]}],"data":[{"key":1,"name":"owner","type":"address"},{"key":2,"name":"company","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"company","type":"address"},{"name":"isRegistered","type":"bool"},{"name":"totalSalaryReceived","type":"uint128"}]} as const

export const factorySource = {
    Bank: bankAbi,
    BankAccount: bankAccountAbi,
    Company: companyAbi,
    Factory: factoryAbi,
    FactoryAccount: factoryAccountAbi,
    Fibonacci: fibonacciAbi,
    SimpleWallet: simpleWalletAbi,
    Worker: workerAbi
} as const

export type FactorySource = typeof factorySource
export type BankAbi = typeof bankAbi
export type BankAccountAbi = typeof bankAccountAbi
export type CompanyAbi = typeof companyAbi
export type FactoryAbi = typeof factoryAbi
export type FactoryAccountAbi = typeof factoryAccountAbi
export type FibonacciAbi = typeof fibonacciAbi
export type SimpleWalletAbi = typeof simpleWalletAbi
export type WorkerAbi = typeof workerAbi

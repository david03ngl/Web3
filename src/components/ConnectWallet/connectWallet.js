import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

// * This is the INFURA Project ID
const INFURA_ID = "1ab9372ed24a4e65b940e6aab8624f55";

const providerOptions = {
  // * Binance Wallet Calls
  binancechainwallet: {
    package: true,
  },
  walletconnect: {
    package: WalletConnectProvider, // ! required
    options: {
      infuraId: INFURA_ID, // ! required
    },
  },
  coinbasewallet: {
    package: WalletLink, // Required
    options: {
      appName: "My Awesome App", // Required
      infuraId: INFURA_ID, // ! Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 3, // Optional. It defaults to 1 if not provided
      darkMode: true, // Optional. Use dark theme, defaults to false
      appLogoUrl: null,
    },
  },
};

let account = null;

const web3Modal = new Web3Modal({
  network: "rinkeby", // optional
  theme: "dark", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

async function connectWallet() {
  web3Modal.clearCachedProvider();
  let provider = await web3Modal.connect();
  let web3 = new Web3(provider);
  await window.ethereum.send("eth_requestAccounts");

  let accounts = await web3.eth.getAccounts();
  account = accounts[0];

  console.log(account);
}

export default connectWallet;

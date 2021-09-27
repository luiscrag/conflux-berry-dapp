import abi from "../contracts/abi/abi";
const { Conflux } = require("js-conflux-sdk");

const conflux = new Conflux({
  url: "https://test.confluxrpc.com",
  networkId: 1,
});

export function isConfluxInstalled() {
  if (typeof window.conflux !== "undefined" && window.conflux.isConfluxPortal)
    return true;
  alert("You need to install Conflux Portal.");
  return false;
}

export async function getAccount() {
  const accounts = await window.conflux.send("cfx_requestAccounts");
  return accounts[0];
}

export async function getCfxBalance(address) {
  const balance = await conflux.getBalance(address);
  return balance.toString();
}


export async function getBalances(address) {
  // initialize BFLUX contract with abi and address
  const bfluxContract = conflux.Contract({ abi: abi[0], address: "cfxtest:ach5j135bpc8zvae6wd16pz9patmk5j1u2921uz2dt" });

  // Intialize Staking contract

  // Get CFX Balance
  const cfxBalance = await getCfxBalance(address);
  
  // Get BFLUX Balance
  const balance = await bfluxContract.balanceOf(address); 

  // Get BFLUX Staked Balance

  // Get CFX Staked Balance
  
  return { cfx: parseInt(cfxBalance), bflux: parseInt(balance.toString()), bfluxStaked: 0, cfxStaked: 0 }

}
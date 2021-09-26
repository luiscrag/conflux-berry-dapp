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

export async function getCfxBalance(params) {
  const balance = await window.conflux.send("cfx_getBalance", params);
  return balance;
}

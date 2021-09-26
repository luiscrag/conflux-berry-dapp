export function isConflux() {
  if (typeof window.conflux == 'undefined') {
    alert('You need to install Conflux Portal.');
    return false;
  }
  return true;
}

export async function getAccounts() {
  const accounts = await window.conflux.send("cfx_requestAccounts");
  return accounts;
}

export async function getCfxBalance(params) {
  const balance = await window.conflux.send("cfx_getBalance", params);
  return balance;
}
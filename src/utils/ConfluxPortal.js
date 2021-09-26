export async function getAccounts() {
  const accounts = await window.conflux.send("cfx_requestAccounts");
  return accounts;
}

export function isConflux() {
  if (typeof window.conflux == 'undefined') {
    alert('You need to install Conflux Portal.');
    return false;
  }
  return true;
}
export async function getAccounts() {
  const accounts = await window.conflux.send("cfx_requestAccounts");
  return accounts;
}

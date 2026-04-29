// Detect native SegWit Bech32 addresses
function isBech32(address) {
  return /^(bc1|tb1)[ac-hj-np-z02-9]{6,87}$/.test(address);
}
module.exports = { isBech32 };

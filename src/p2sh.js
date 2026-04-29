// P2SH address validation (version byte 0x05)
function isP2SH(address) {
  const BASE58_CHARS = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  if (!address.startsWith('3')) return false;
  return address.split('').every(c => BASE58_CHARS.includes(c));
}
module.exports = { isP2SH };

const config = require("./config");
const { sumTokensExport } = require('../helper/unwrapLPs');

module.exports = {
  methodology: 'Counts the amount of tokens locked in LayerSwap protocol contracts',
};

config.chains.forEach(chainInfo => {
  const {name: chain, tokens, holders} = chainInfo
  module.exports[chain] = {
    tvl: sumTokensExport({ chain, tokens, owners: holders })
  }
});

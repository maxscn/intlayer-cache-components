const _EFV7RfydwiPyF8ytHPVh = require('../dictionary/page.json');
const _t6hjcBtJs24TPbydeWVg = require('../dictionary/static.json');
const _ohfFwKChEx9Vy238MuXA = require('../dictionary/staticid.json');

const dictionaries = {
  "page": _EFV7RfydwiPyF8ytHPVh,
  "static": _t6hjcBtJs24TPbydeWVg,
  "staticid": _ohfFwKChEx9Vy238MuXA
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;

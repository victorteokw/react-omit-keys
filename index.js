const omitKeys = (obj, ...keys) => {
  for (const key of keys) {
    delete obj[key];
  }
  return obj;
};

omitKeys.default = omitKeys;
module.exports = omitKeys;

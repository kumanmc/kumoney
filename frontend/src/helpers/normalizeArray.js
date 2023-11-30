export function normalizeArray(array, key) {
  return array.reduce((rtn, obj) => {
    rtn[obj[key]] = obj;
    return rtn;
  }, {});
}

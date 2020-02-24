/* 获取URL的参数 */
export const queryString = () => {
  let _queryString = {};
  const _query = window.location.search.substr();
  const _vars = _query.split('&');
  _vars.forEach((v, i) => {
    const _pair = v.split('=');
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
    } else if (typeof _queryString[_pair[0]] === 'string') {
      _queryString[_pair[0]] = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
    }
  });
  return _queryString;
};

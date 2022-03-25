const createQuery = (list) => {
  const query = list.reduce((ac, item, idx) => {
    if (!item.trim().length) return ac;
    return !idx ? ac + "?q[]=" + item : ac + "&q[]=" + item;
  }, "");
  return query;
};
export default createQuery;
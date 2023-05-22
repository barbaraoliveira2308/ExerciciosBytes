function contarNsNoArray(n, array) {
    const filteredArray = array.filter((ele) => ele.length < n);
    return filteredArray.length;
  }
  
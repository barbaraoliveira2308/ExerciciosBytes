function subtraiDias(data, dias) {
    let novaData = new Date(data);
    let subtraiData = new Date(novaData.getTime() - (dias * 24 * 60 * 60 * 1000));
    return subtraiData.toISOString().split('T')[0];
  }
  
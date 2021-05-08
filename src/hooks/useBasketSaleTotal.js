const useBasketSaleTotal = (basket) => {
  const itemTotals = [];

  basket.forEach((sale) => {
    itemTotals.push(sale.price * sale.quantity);
  });

  const totalSaleAmount = itemTotals.reduce((a, b) => a + b, 0);

  return [totalSaleAmount];
};

export default useBasketSaleTotal;

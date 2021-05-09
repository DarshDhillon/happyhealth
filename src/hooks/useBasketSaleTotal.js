const useBasketSaleTotal = (basket) => {
  const eachItemTotal = [];

  basket.forEach((item) => {
    eachItemTotal.push(item.price * item.quantity);
  });

  const totalSaleAmount = eachItemTotal.reduce((a, b) => a + b, 0);

  return [totalSaleAmount];
};

export default useBasketSaleTotal;

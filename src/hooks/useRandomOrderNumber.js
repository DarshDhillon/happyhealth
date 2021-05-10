const useRandomOrderNumber = () => {
  return [
    `${Math.floor(Math.random() * 10000)} - ${Math.floor(
      Math.random() * 1000
    )}`,
  ];
};

export default useRandomOrderNumber;

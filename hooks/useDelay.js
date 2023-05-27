// await useDelay(5000);

const useDelay = (ms = 1500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default useDelay;

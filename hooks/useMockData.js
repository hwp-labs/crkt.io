export default function useMockData(file) {
  const files = {
    news: 0,
    article: 1
  };

  return files[file] || 0;
}

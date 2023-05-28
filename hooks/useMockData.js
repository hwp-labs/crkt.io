export default function useMockData(file) {
  const files = {
    news: 1,
    article: 1
  };

  return files[file] || 0;
}
 
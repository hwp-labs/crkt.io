import { useMemo, useState, useEffect } from "react";
//
import { default as OdaraTvPost } from "../../lib/odara-tv/models/Post";
import { useDelay, useFedora, useMockData, useMemoizer as $ } from "../../hooks";
import NewsService from "./News.service";

import mockApiGetOdaraTvBlog from "../../data/get-odaratv-blog";

export default function useNews(N, R) {
  const [news, setNews] = useState(null);

  const viewArticle = (uuid) => N.navigate("Article", { uuid });
  //
  async function mockOnMount(refetch = false) {
    await useDelay();
    refetch && setNews(null);

    setNews(mockApiGetOdaraTvBlog);
  }

  async function onMount(refetch = false) {
    await useDelay();
    refetch && setNews(null);

    const response = await useFedora(OdaraTvPost.resource_url);
    response.data
      ? setNews(response.data)
      : console.log("Woman with the issues of blood!");
  }

  useEffect(() => {
    useMockData("news") ? mockOnMount() : onMount();
  }, []);

  return {
    news: $(NewsService.adaptPost(news), [news]),
    viewArticle,
  };
}

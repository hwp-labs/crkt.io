import { shuffleArray } from "../../utils";
import { default as OdaraTvPost } from "../../lib/odara-tv/models/Post";

export default class NewsService {
  //
  static adaptPost(post) {
    return post
      ? shuffleArray(
          post.root
            .map((p) => {
              const { thumbnail, title, summary, posted, status } = p;
              return {
                thumbnail,
                thumbnail_f: OdaraTvPost.getThumbnail(thumbnail),
                title: OdaraTvPost.parseHtml(title),
                summary,
                posted,
                posted_f: OdaraTvPost.getCreatedAt(posted),
                status,
                status_f: OdaraTvPost.getStatus(status),
                uuid: OdaraTvPost.getUuid(p),
              };
            })
            .slice(0, 10)
        )
      : [];
  }
}

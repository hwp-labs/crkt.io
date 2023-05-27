import Model from "./index";

export default class Post extends Model {
  //
  static resource_url =
    "https://raw.githubusercontent.com/2gbeh/odara-tv/main/json/Blog.json";

  static media_base_url =
    "https://raw.githubusercontent.com/2gbeh/odara-tv/main/img/";

  static categories = ["", "News", "Movie", "TV Show", "Youtube"];

  static getThumbnail = (thumbnail) => this.media_base_url + thumbnail;

  static getStatus(status) {
    return typeof status === "number"
      ? this.categories[status]
      : this.categories.indexOf(status);
  }

  static getUpdatedAt = (date) => this.formatDate(date);

  static getCreatedAt = (posted) => this.formatDate(posted);

  static getUuid = (post) => super.getUuid(post.thumbnail);
}

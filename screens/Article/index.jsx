import * as React from "react";
import { ActivityIndicator, View, Text } from "react-native";
//
import useArticle from "./useArticle";
import styles from "./Article.module";
//
function ArticleScreen({ navigation: N, route: R }) {
  console.log("ArticleScreen");

  const { handleStash, handleShare } = useArticle(N, R);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>{R.params.uuid}</Text>
      <Text style={{ color: "#fff" }}>#post-uuid</Text>
    </View>
  );
}

export default React.memo(ArticleScreen);

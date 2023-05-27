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
      <Text style={{ color: "#fff" }}>Post UUID: {R.params.uuid}</Text>
    </View>
  );
}

export default React.memo(ArticleScreen);

import * as React from "react";
import { ActivityIndicator, View } from "react-native";
//
import Card from "../../components/Card";
//
import { useMemoizer as $ } from "../../hooks";
//
import useNews from "./useNews";
import styles from "./News.module";
import { COLOR } from "../../utils/constants";
//
function NewsScreen({ navigation: N, route: R }) {
  console.log("NewsScreen");

  const { news, viewArticle } = useNews(N, R);

  return (
    <View style={styles.container}>
      {news ? (
        <Card data={news} action={viewArticle} />
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLOR.yellow} />
        </View>
      )}
    </View>
  );
}

export default React.memo(NewsScreen);

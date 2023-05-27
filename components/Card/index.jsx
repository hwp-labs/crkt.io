import * as React from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "@react-native-material/core";

import styles from "./Card.module";
//
const Card = ({ data, action }) => {
  console.log("Card");

  return (
    data && (
      <FlatList
        data={data}
        keyExtractor={(item) => item.thumbnail}
        renderItem={({ item: i }) => (
          <View style={styles.container}>
            <View style={styles.card}>
              {/*  */}
              <View style={styles.card.top}>
                <ImageBackground
                  source={{ uri: i.thumbnail_f }}
                  style={styles.thumbnail}
                >
                  <View style={styles.headline.overlay}></View>
                  <TouchableWithoutFeedback onPress={() => action(i.uuid)}>
                    <Text style={styles.headline}>{i.title}</Text>
                  </TouchableWithoutFeedback>
                </ImageBackground>
              </View>
              {/*  */}
              <View style={styles.card.bottom}>
                <Text style={styles.meta}>{i.posted_f}</Text>
                <Text style={styles.meta}>
                  <View style={styles.icon.wrapper}>
                    <Icon name="youtube" size={22} color="#888" />
                    <Text style={styles.icon.text}>{i.status_f}</Text>
                  </View>
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    )
  );
};

export default React.memo(Card);

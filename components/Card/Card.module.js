import { StyleSheet } from "react-native";

import { COLOR } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  card: {
    backgroundColor: COLOR.accent,
    marginTop: 15,
  },
  cardTop: {
    height: 340,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  thumbnail: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#000",
    opacity: 0.3,
    minHeight: 60,
  },
  headline: {
    position: "absolute",
    zIndex: 2,
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  meta: {
    color: "#888",
    fontSize: 13,
  },
  iconWrapper: {
    flexDirection: "row",
  },
  iconText: {
    color: "#888",
    marginTop: 2,
    marginLeft: 8,
  },
});

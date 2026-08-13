import { StyleSheet } from "react-native";

export const colors = {
  primary: "#0f62fe",
  secondary: "#262626",
  background: "#161616",
  white: "#ffffff",
  border: "#393939",
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingInline: 16,
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  header: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 16,
    color: colors.white,
  },

  userCardContainer: {
    flex: 1,
    width: "100%",
  },

  userCard: {
    backgroundColor: colors.secondary,
    marginVertical: 8,
    padding: 16,
    borderColor: colors.border,
    borderWidth: 1,
    borderBottomWidth: 3,
  },

  userCardNormalText: {
    color: colors.white,
    fontSize: 16,
  },
  userCardBoldText: {
    color: colors.white,
    fontWeight: 500,
    fontSize: 20,
    marginBottom: 8,
    marginTop: 8,
  },

  loadMoreButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 16,
    paddingBlock: 14,
    alignSelf: "center",
    flexShrink: 1,
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: 16,
    marginTop: 16,
  },

  loadMoreText: {
    color: colors.white,
  },

  textInput: {
    width: "100%",
    color: colors.white,
    paddingInline: 12,
    borderColor: colors.border,
    borderWidth: 1,
    borderBottomWidth: 3,
    height: 50,
  },
});

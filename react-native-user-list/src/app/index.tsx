import UserCard from "@/components/UserCard";
import { AppDispatch, RootState } from "@/redux/store";
import { getUsers, loadCachedUsers } from "@/redux/users/usersSlice";
import { colors, globalStyles } from "@/styles/global";
import { User } from "@/types/user";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const userState = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const filteredUsers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return userState.users;
    return userState.users.filter((user) =>
      user.name.trim().toLowerCase().includes(query),
    );
  }, [userState.users, searchQuery]);

  useEffect(() => {
    async function initUsers() {
      const action = await dispatch(loadCachedUsers());
      const cachedUsers = action.payload as User[] | undefined;

      if (!cachedUsers || cachedUsers.length === 0) {
        dispatch(getUsers(1));
      }
    }

    initUsers();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: User }) => <UserCard user={item} />,
    [],
  );

  const keyExtractor = useCallback((item: User) => item.id.toString(), []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>User List</Text>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        style={globalStyles.textInput}
        placeholderTextColor={colors.white}
        onChangeText={setSearchQuery}
      />
      <View style={globalStyles.userCardContainer}>
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={5}
          removeClippedSubviews={true}
        />
      </View>
      {userState.hasMore &&
        (userState.loading ? (
          <ActivityIndicator
            size="large"
            color={colors.white}
            style={{ marginBottom: 16, marginTop: 16, alignSelf: "center" }}
          />
        ) : (
          <Pressable
            style={globalStyles.loadMoreButton}
            onPress={() => {
              setSearchQuery("");
              dispatch(getUsers(userState.LastUserId));
            }}
          >
            <Text style={globalStyles.loadMoreText}>Load More</Text>
          </Pressable>
        ))}
    </View>
  );
}

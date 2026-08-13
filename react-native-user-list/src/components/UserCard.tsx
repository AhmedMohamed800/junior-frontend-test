import type { User } from "@/types/user";
import { memo } from "react";

import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <View style={globalStyles.userCard}>
      <Text style={globalStyles.userCardBoldText}>{user.name}</Text>
      <Text style={globalStyles.userCardNormalText}>{user.email}</Text>
      <Text style={globalStyles.userCardNormalText}>
        {user?.address
          ? `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`
          : "No address"}
      </Text>
    </View>
  );
}

export default memo(UserCard);

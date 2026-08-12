import type { User } from "@/types/user";
import { Text, View } from "react-native";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const address = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{address}</Text>
    </View>
  );
}

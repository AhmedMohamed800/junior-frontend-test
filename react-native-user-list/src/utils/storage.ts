import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCache<T>(key: string, value: T): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error saving cache for key "${key}":`, error);
  }
}

export async function getCache<T>(key: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue) as T;
    }
    throw new Error("No cache found");
  } catch {
    return null;
  }
}

export async function removeCache(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing cache for key "${key}":`, error);
  }
}

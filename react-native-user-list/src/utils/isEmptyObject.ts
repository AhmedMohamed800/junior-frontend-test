export function isEmptyObject(obj: unknown) {
  if (obj === null || typeof obj !== "object") {
    return false; // Not an object
  }
  return Object.keys(obj).length === 0;
}

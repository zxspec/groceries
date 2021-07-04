export function getStatusCode(routeName: string) {
  if (routeName === "404") {
    return 404;
  }
  return 200;
}

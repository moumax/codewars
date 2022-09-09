function sameCase(a, b) {
  if (typeof a != "string" || typeof b != "string") return -1;
  if (!a.match(/^([a-zA-Z ]+)$/) || !b.match(/^([a-zA-Z ]+)$/)) return -1;
  if (
    (a == a.toUpperCase() && b == b.toUpperCase()) ||
    (a == a.toLowerCase() && b == b.toLowerCase())
  )
    return 1;
  if (
    (a == a.toUpperCase() && b == b.toLowerCase()) ||
    (a == a.toLowerCase() && b == b.toUpperCase())
  )
    return 0;
}

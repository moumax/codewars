function removeUrlAnchor(url) {
  url = url.replace(/#[\s\S]*$/, "");
  return url;
}

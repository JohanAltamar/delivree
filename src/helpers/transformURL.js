export function encodeURL(url) {
  let encodedURL = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === " ") {
      encodedURL += "-";
    } else {
      encodedURL += url[i];
    }
  }
  return encodedURL;
}

export function decodeURL(url) {
  let decodedURL = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "-") {
      decodedURL += " ";
    } else {
      decodedURL += url[i];
    }
  }
  return decodedURL;
}

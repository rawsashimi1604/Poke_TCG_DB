export function clientBuildSearchURL(queryObj) {
  let queryString = "/search/cards?";

  const keys = Object.keys(queryObj);
  for (let i = 0; i < keys.length; i++) {
    // Join query string
    queryString += `${keys[i]}=${queryObj[keys[i]]}`;

    // If it is not the last element add & to join query string
    if (i != keys.length - 1) {
      queryString += "&";
    }
  }

  return queryString;
}

export function serverBuildSearchURL(queryObj) {
  let queryString = "http://localhost:3000/api/cards/search?";

  const keys = Object.keys(queryObj);
  for (let i = 0; i < keys.length; i++) {
    // Join query string
    queryString += `${keys[i]}=${queryObj[keys[i]]}`;

    // If it is not the last element add & to join query string
    if (i != keys.length - 1) {
      queryString += "&";
    }
  }

  return queryString;
}

export default clientBuildSearchURL;

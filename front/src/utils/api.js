export default function getData (url) {

  return fetch(url)
    .then(resp => {

      if (!resp.ok) {
        throw Error("Fetching failed :(");
      }

      return resp.json();
    });
}

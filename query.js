function query(url, options) {
  fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Server error");
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("json")) {
      return response.json();
    } else {
      return response.text();
    }
  });
}
export default query;

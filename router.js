function router() {
  const routes = {};

  function get(path, callback) {
    routes[path] = callback;
  }

  function navigate(url) {
    const parsedUrl = new URL(url);
    const callback = routes[parsedUrl.pathname] || routes.default;
    callback({ url: parsedUrl, redirect });
    // console.log(url);
    console.log(parsedUrl);
    console.log(callback);
    //http://127.0.0.1:5501/signup
  }

  function redirect(path) {
    const url = window.location.origin + path;
    window.history.pushState(null, null, url);
    navigate(url);
  }

  function clickHandler(event) {
    if (
      //fix bug in clickhandler
      event.target.tagName !== "A" ||
      event.button !== 0 ||
      event.target.altKey ||
      event.target.shiftKey ||
      event.target.ctrlKey ||
      event.target.metaKey
    )
      return;
    if (event.target.tagName === "A") {
      event.preventDefault();
      window.history.pushState(null, null, event.target.href);
      navigate(event.target.href);
    }
  }

  function popHandler() {
    navigate(window.location);
  }

  function listen() {
    window.addEventListener("click", clickHandler);
    window.addEventListener("popstate", popHandler);
    navigate(window.location);
  }

  function close() {
    window.removeEventListener("click", clickHandler);
    window.removeEventListener("popstate", popHandler);
  }

  return { get, listen, close };
}

export default router;

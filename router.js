function router() {
  function clickHandler(event) {
    if (
      event.target.tagName === "A" &&
      event.button === 0 &&
      event.target.altKey === false &&
      event.target.shiftKey === false &&
      event.target.ctrlKey === false &&
      event.target.metaKey === false
    ) {
      event.preventDefault();
      window.history.pushState(null, null, event.target.href);
      navigate(event.target.href);
    }
  }

  const routes = {};

  function get(path, callback) {
    routes[path] = callback;
  }

  function navigate(url) {
    const parsedUrl = new URL(url);
    const callback = routes[parsedUrl.pathname];
    callback({ url: parsedUrl, redirect: redirect });
  }

  function redirect(path) {
    const url = window.location.origin + path;
    window.history.pushState(null, null, url);
    navigate(url);
  }

  function popHandler() {
    navigate(window.location);
  }

  function listen() {
    window.addEventListener("click", clickHandler);
    window.addEventListener("popstate", popHandler);
  }

  function close() {
    window.removeEventListener("click", clickHandler);
    window.removeEventListener("popstate", popHandler);
  }

  return { get, listen, close };
}

export default router;

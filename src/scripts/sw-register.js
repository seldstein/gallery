if ("serviceWorker" in navigator) {
  try {
    const registration = await navigator.serviceWorker.register("service-worker.js", {
      scope: "./",
    });
    console.log("Service worker registration");
    console.log(registration);
    if (registration.installing) {
      console.log("Service worker installing");
    } else if (registration.waiting) {
      console.log("Service worker installed");
    } else if (registration.active) {
      console.log("Service worker active");
    }
  } catch (error) {
    console.error(`Registration failed with ${error}`);
  }
}

if ("serviceWorker" in navigator) {
    //tu me mets en place un service Worker
    navigator.serviceWorker.register("/serviceWorker.js").then(()
        => console.log("sw registered")).catch((err) => console.log(err));
}
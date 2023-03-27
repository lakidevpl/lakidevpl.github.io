function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.onload = async function() {
    for (let i = 0; i < 3; i++) {
        await sleep(i * 1000);
    }
    location.replace("home.html")
}
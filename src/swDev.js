export default function swDev() {
    console.log('process: ', process.env);
    let swURL = `${process.env.PUBLIC_URL}/sw.js`;
    console.log('swURL: ', swURL);
    navigator.serviceWorker.register(swURL).then((response) => {
        console.log('response: ', response);
    });
}
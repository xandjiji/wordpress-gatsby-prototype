/* export default (url) => {
    const urlObj = new URL(url);
    return urlObj.pathname;
} */

const getPathname = (url) => {
    const urlObj = new URL(url);
    return urlObj.pathname;
}

module.exports = { getPathname };
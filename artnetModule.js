module.exports = { init, oscInFilter, oscOutFilter, unload };

function init() {
}

function oscInFilter(data) {
    var { address, args, host, port } = data
    return { address, args, host, port }
}

function oscOutFilter(data) {
    var { address, args, host, port, clientId } = data
    return { address, args, host, port }
}

function unload() {

}
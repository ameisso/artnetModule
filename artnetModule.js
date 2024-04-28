module.exports = { init, oscInFilter, oscOutFilter, unload };

var options = {

}

var artnet = nativeRequire('artnet')(options);

function init() {
}

function oscInFilter(data) {
    var { address, args, host, port } = data
    if (address.startsWith("/artnet/")) {
        universeChanged = splitArgsandUpdateFrame(address, args)
    }
    return { address, args, host, port }
}

function oscOutFilter(data) {
    var { address, args, host, port, clientId } = data
    if (address.startsWith("/artnet/")) {
        universeChanged = splitArgsandUpdateFrame(address, args)
    }
    else {
        return { address, args, host, port }
    }

}

function unload() {
    artnet.close();
}


function splitArgsandUpdateFrame(address, args) {
    const elts = address.split('/');
    let universe = -1;
    if (elts.length == 3) {
        universe = 1;
    }
    else {
        universe = isNaN(elts.at(2)) ? 0 : elts.at(2);
    }
    let dmxAddress = isNaN(elts.at(-1)) ? 0 : elts.at(-1);
    let dmxValue = Math.floor(args[0].value)
    artnet.set(universe, dmxAddress, dmxValue, function (err, res) {
        if (err) console.log(err)
        else console.log("artnet updated " + universe + " " + dmxAddress + " " + dmxValue)
    });
}
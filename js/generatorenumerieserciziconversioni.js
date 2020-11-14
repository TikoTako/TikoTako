var randomNumber = 0;
var randomBits = 0;
var genPositive = true;

function show(chiCosaDove) {
    switch (chiCosaDove) {
    case "dec":
        document.getElementById("nEbbbasta").innerHTML = randomNumber;
        break;
    case "hex":
        if (genPositive) {
            document.getElementById("nHex").innerHTML = "0x" + randomNumber.toString(16).toUpperCase();
        } else {
            var luiginoMariello = (randomNumber >>> 0).toString(16);
            document.getElementById("nHex").innerHTML = "0x" + luiginoMariello.substring(luiginoMariello.length - randomBits / 4).toUpperCase();
        }
        break;
    case "bin":
        if (genPositive) {
            document.getElementById("nBin").innerHTML = (randomNumber >>> 0).toString(2) + "b";
        } else {
            var alfottoGianAlberto = (randomNumber >>> 0).toString(2);
            document.getElementById("nBin").innerHTML = alfottoGianAlberto.substring(alfottoGianAlberto.length - randomBits) + "b";
        }
        break;
    default:
        alert("errore.");
        break;
    }
}

function myFunction() {
    randomBits = rando(1, 3) * 8;
    genPositive = rando(true, false);
    randomBits = (randomBits == 24) ? 32 : randomBits;
    if (genPositive) {
        randomNumber = rando(0, Math.pow(2, randomBits) - 1);
    } else {
        randomNumber = rando(-Math.pow(2, randomBits - 1), 0);
    }
    document.getElementById("nBits").innerHTML = "Numero " + ((genPositive) ? "positivo" : "negativo") + " di " + randomBits + " bit generato.";
    document.getElementById("nEbbbasta").innerHTML = "Numero a caso decimale.";
    document.getElementById("nHex").innerHTML = "Numero a caso esadecimale.";
    document.getElementById("nBin").innerHTML = "Numero a caso binario.";
}

var doc = app.activeDocument;
var layers = doc.layers;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];

for (var i = layers.length - 1; i >= 0; i--) {
    var layer = layers[i];
    if (layer.visible === false) {
        alert("All layers should be visible");
    } else {
        layer.name = layers.length - i + " " + layer.name.replace(/\"/g, "");

        var shape = doc.pathItems.rectangle(
            artboard.artboardRect[1],
            artboard.artboardRect[0],
            artboard.artboardRect[2] - artboard.artboardRect[0],
            artboard.artboardRect[1] - artboard.artboardRect[3]
        );
        shape.filled = false;
        shape.stroked = false;
        shape.locked = false;
        shape.move(layer, ElementPlacement.PLACEATBEGINNING);
    }
}
alert("Converted");

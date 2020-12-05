var docRef = app.activeDocument;
var m = docRef.height > docRef.width ? docRef.height : docRef.width;
docRef.resizeCanvas(m, m);

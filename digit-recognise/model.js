import * as tfl from '@tensorflow/tfjs-layers';

async function loadProbabilityModel() {
    const model = await tfl.loadLayersModel('probmnist2.json');




}


var img = new Image(28,28)
img.src = 'Four.png';
document.body.append(img)




//const prediction = model.predict(1);


//import * as tfl from '@tensorflow/tfjs-layers';
//import * as tf from '@tensorflow/tfjs';

async function loadProbabilityModel() {
    let model = await tf.loadLayersModel('probmnist2.json');
    return model
}

(async()=>{let probabilityModel = await loadProbabilityModel()});
var img = new Image(28,28)
img.src = 'Four.png';
document.body.append(img)




//const prediction = model.predict(1);

console.log("Done")
import * as tf from '@tensorflow/tfjs';



async function loadModel() {
    const model = await tf.loadLayersModel('probmnist2.json');




}


var img = new Image(28,28)
img.src = 'Four.png';
document.body.append(img)




//const prediction = model.predict(1);


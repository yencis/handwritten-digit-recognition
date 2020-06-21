import * as tf from "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js";

const model = tf.loadLayersModel('probmnist2.json');

var img = new Image(28,28)
img.src = 'Four.png';
document.body.append(img)




//const prediction = model.predict(1);


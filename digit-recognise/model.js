//import * as tfl from '@tensorflow/tfjs-layers';
//import * as tf from '@tensorflow/tfjs';


//let probabilityModel


async function loadProbabilityModel() {
    let model = await tf.loadLayersModel('http://127.0.0.1:8080/probmnist2.json');
    return model
}

//probabilityModel = loadProbabilityModel();
let img = new Image(28,28)
img.src = 'Four.png';
console.log(img)
//document.body.append(img)
var context = document.getElementById('canvas').getContext('2d');
console.log(context)
context.drawImage(img,20,20);
//data = context.getImageData(0,0,1,1).data;
//console.log(data);

function drawImage(){
    let img = new Image(28,28)
    img.src = 'Four.png';
    let context = document.getElementById('canvas').getContext('2d');
    console.log(context)
    context.drawImage(img,20,20);
    return context.getImageData(20,20,28,28).data
}
//its a black and white image

function toGrayScale(){
    let data = drawImage()
    let gData = Array(28)
    let c = 0
    //c should end at 3135
    for (i = 0;i<28;i++){
        let s = c
        gData[i] = []
        //checks if c is a multple of 112 and not 0
        for(;!(c-s)||(c%112);c+=4){
            //if not 0 is 255
            gData[i].push(data[c]/255.0)
            //gData[i].push([data[c]/255.0])
        }
    }
    return gData
}

async function recognise(){
    //let probabilityModel = await tf.loadLayersModel('http://127.0.0.1:8080/probmnist2.json');
    let probabilityModel = await tf.loadLayersModel('../model_folder/probmnist2.json');
    console.log(probabilityModel)
    let gData = toGrayScale()
    //gData = [gData]
    let res = probabilityModel.predict(tf.tensor([gData]))
    console.log(res.array())
    return res
}

function convertImage(img){

}


//const prediction = model.predict(1);

console.log("Done")
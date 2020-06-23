function drawImage() {
    let img = new Image(28, 28)
    img.src = 'Four.png';
    let context = document.getElementById('canvas').getContext('2d');
    console.log(context)
    context.drawImage(img, 20, 20);
    return context.getImageData(20, 20, 28, 28).data
}

function toGrayScale() {
    let i;
    let data = drawImage()
    let gData = Array(28)
    let c = 0

    for (i = 0; i < 28; i++) {
        let s = c
        gData[i] = []
        //checks if c is a multiple of 112 and not 0
        for (; !(c - s) || (c % 112); c += 4) {
            //if not 0 is 255
            gData[i].push(data[c] / 255.0)
        }
    }

    // TODO: fix scuffed toGrayScale
    let newArr = [];
    for (i = 0; i < gData.length; i++) {
        newArr = newArr.concat(gData[i]);
    }

    return newArr
}

async function recognise() {
    let probabilityModel = await tf.loadLayersModel('../model/model.json');
    let gData = toGrayScale()
    let res = probabilityModel.predict(tf.tensor([gData]))
    console.log(res.array())
    return res
}
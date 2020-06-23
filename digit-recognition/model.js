function toGrayScale() {
    let i;
    let data = exportData().data
    console.log(data.data)
    let gData = Array(28)
    let c = 0

    for (i = 0; i < 28; i++) {
        let s = c
        gData[i] = []
        //checks if c is a multiple of 112 and not 0
        for (; !(c - s) || (c % 112); c += 4) {
            //if not 0 is 255
            console.log(data[c])
            gData[i].push(data[c] / 255)
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
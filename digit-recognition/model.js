const answer = document.getElementById('answer');
const confidence = document.getElementById('confidence');

function toGrayScale() {
    i = exportData().data;
    for (a = [], u = 0; u < 3136; u += 4) a.push(i[u] / 255);
    return a;
}

async function recognise() {
    let probabilityModel = await tf.loadLayersModel('../model/model.json');
    let res = probabilityModel.predict(tf.tensor([toGrayScale()]));
    let data = res.dataSync()
    console.log(res);

    answer.innerText = data.indexOf(Math.max(...data));
    confidence.innerText = Math.max(...data);
}

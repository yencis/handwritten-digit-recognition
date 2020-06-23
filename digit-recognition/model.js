const answer = document.getElementById('answer');

function toGrayScale() {
    i = exportData().data;
    for (a = [], u = 0; u < 3136; u += 4) a.push(i[u] / 255);
    return a;
}

async function recognise() {
    let probabilityModel = await tf.loadLayersModel('../model/model.json');
    let res = probabilityModel.predict(tf.tensor([toGrayScale()])).array();
    console.log(res);
    answer.innerText = res;
}
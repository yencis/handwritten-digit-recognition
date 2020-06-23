const answer = document.getElementById('answer');

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


    let counter = 0, maxprob = 0, output;
    while (counter < 10) {
        if (data[counter] > maxprob) {
            maxprob = data[counter];
            output = counter;
        }

        counter++;
    }
    answer.innerText = output;
}
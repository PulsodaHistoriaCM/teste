let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2000) //muda de imagem a cada 2s//

function nextImage(){
    count++;
    if (count>5){ //se passar da imagem 5, deve voltar para a primeira//
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
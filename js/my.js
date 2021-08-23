function changeSrcImage(elementId, number) {
    let imageClick = document.getElementById(elementId);
    let altImage = imageClick.getAttribute('alt')
    if (altImage === 'funny') {
        document.getElementById(elementId).setAttribute('src', 'images/monkey_part' + number + 'x1.jpeg');
        document.getElementById(elementId).setAttribute('alt', 'monkey');
    } else if (altImage === 'monkey') {
        document.getElementById(elementId).setAttribute('src', 'images/panda_swap_part' + number + 'x1.jpeg');
        document.getElementById(elementId).setAttribute('alt', 'panda');
    } else  {
        document.getElementById(elementId).setAttribute('src', 'images/funny-cat1_part' + number + 'x1.jpeg');
        document.getElementById(elementId).setAttribute('alt', 'funny');
    }

    checkWin();

}

function checkWin() {
    let altImage1 = document.getElementById('image-1').getAttribute('alt');
    let altImage2 = document.getElementById('image-2').getAttribute('alt');
    let altImage3 = document.getElementById('image-3').getAttribute('alt');

    if (altImage1 === altImage2 && altImage1 === altImage3) {
        // thay doi css thong qua thuoc tinh style cua the
        document.getElementById('image-1').style.border = '2px solid red';
        document.getElementById('image-2').style.border = '2px solid red';
        document.getElementById('image-3').style.border = '2px solid red';
    }  else {
        document.getElementById('image-1').style.border = '';
        document.getElementById('image-2').style.border = '';
        document.getElementById('image-3').style.border = '';
    }
}

function hiddeField(){
    let nameInput = document.getElementById("inputNameId");
    let checkboxNo =  document.getElementById("No");
    nameInput.style.display='none';
    nameInput.value = "";
}

function showField(){
    let nameInput = document.getElementById("inputNameId");
    let checkboxYes =  document.getElementById("Yes");
    nameInput.style.display='block';
}

function createChat(){
    const nameInput = document.getElementById("inputNameId"); 
    const name = nameInput.value;
    let currentDate = document.getElementById("currentTime");
    currentDate = new Date();
    const commentInput = document.getElementById("inputCommentId");
    let checkboxYes =  document.getElementById("Yes");
    let checkboxNo =  document.getElementById("No");
    let comment = commentInput.value;
    const photoInput = document.getElementById("inputPhotoId");
    const photo = photoInput.value;
    const nameList = document.getElementById("chat_showID");
    const newName = document.createElement("p");
    const img = document.createElement('img');
    //img.src = photo;
    //let nameChanged1=name.trimStart();
    //let nameChanged = nameChanged1[0].toUpperCase()+nameChanged1.slice(1).toLowerCase();
    let newComment=comment.replace(/viagra|XXX/gi, '***');
    if(photo == ''){
        //let randomImage = new Array();
        let randomImage = [];
        randomImage[0] = 'https://www.wallpapersshare.com/img/big/beautiful-brown-duck-4k.jpg';
        randomImage[1] = 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931386_gas-kvas-com-p-kartinki-s-kotami-17.jpg';
        randomImage[2] = 'https://wall-photo.ru/wp-content/uploads/2018/09/v-uge-cvetka-40633007-1200x800.jpg';
        randomImage[3] = 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695972561_gas-kvas-com-p-kartinki-bichka-55.jpg';
        randomImage[4] = 'https://sportishka.com/uploads/posts/2022-11/1667452977_54-sportishka-com-p-prizhok-kozlik-pinterest-59.jpg';
        randomImage[5] = 'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696530125_gas-kvas-com-p-kartinki-yagnenka-2.jpg';
        randomImage[6] = 'http://moscowalk.ru/images/2013/vystavki/horse/world_of_horse8.jpg';
        let number = Math.floor(Math.random()*randomImage.length);
        img.src = randomImage[number];
    }
    else{
        img.src = photo;
    };
    if (name=='' && checkboxYes.checked){
        newName.innerHTML ="Имя: "+ 'username' +"<br/>"+"Комментарий: "+"<br/>"+newComment+"<br/>" +"Дата и время: " +currentDate;
    }
    else if(checkboxNo.checked){
        newName.innerHTML ="Комментарий: "+"<br/>"+newComment+currentDate;
    }
    else{
        let nameChanged1=name.trim();
        let nameChanged = nameChanged1[0].toUpperCase()+nameChanged1.slice(1).toLowerCase();
        newName.innerHTML ="Имя: "+ nameChanged +"<br/>"+"Комментарий: "+"<br/>"+newComment +"<br/>" +"Дата и время: "+currentDate;
    }
    //newName.innerHTML ="Имя: "+ nameChanged +"<br/>"+"Комментарий: "+"<br/>"+newComment;
    nameList.append(img) ;
    nameList.appendChild(newName);
    nameInput.value = "";
    commentInput.value="";
    photoInput.value="";
    };



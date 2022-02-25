getAnswer.onclick = function() {
    var contact = document.getElementById('contact').value;
    var equi = document.getElementById('equipment').value;
    var answ = document.getElementById('answer').value;
    var cpu = document.getElementById('cpu').value;
    var mother = document.getElementById('motherboard').value;
    var comment = document.getElementById('comment').value;

    var answ = '';
    var go = true;

    if (contact == ""){
        answ = 'Поле контактов пустое.';
        document.getElementById("answer").innerHTML=answ;
        go = false;
    }

    if (equi == ""){
        if (answ != undefined)
            answ = answ + ' Поле комплектации пустое.';
        else
            answ = 'Поле комплектации пустое.';
        document.getElementById("answer").innerHTML=answ;
        go = false;
    }

    if (cpu == "choise"){
        if (answ != undefined)
            answ = answ + " Выберите процессор.";
        else
            answ = "Выберите процессор.";
        document.getElementById("answer").innerHTML=answ;
        go = false;
    }

    if (mother == "choise"){
        if (answ != undefined)
            answ = answ + " Выберите плату.";
        else
            answ = "Выберите плату.";
        document.getElementById("answer").innerHTML=answ;
        go = false;
    }

    if (go){
            isOrdered = true;
            var alertAnsw = "Перечень вашего заказа:\n\nПроцессор: " + cpu + "\nПлата: " + mother + "\nКомплектация: " + equi + "\nКомментарий: " + comment;
            alert(alertAnsw);
            answ = "Заявка успешно отправлена. Ожидайте в течении 3-х рабочих дней ответа";
            document.getElementById("answer").innerHTML=answ;
            getAnswer.disabled = true;
    }
};
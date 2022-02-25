function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function change_desc(){
    var result = getRandomInt(9);
    switch(result){
      case 0:
        document.getElementById("desc").innerHTML="почувствуй разгон внутри себя";
        break;
      case 1:
        document.getElementById("desc").innerHTML="восемь ядер шестнадцать потоков";
        break;
      case 2:
        document.getElementById("desc").innerHTML="Over Cockers";
        break;
      case 3:
        document.getElementById("desc").innerHTML="зеон мне и моему другу тоже";
        break;
      case 4:
        document.getElementById("desc").innerHTML="цена почти в десять раз ниже";
        break;
      case 5:
        document.getElementById("desc").innerHTML="huanan еще не сгорел";
        break;
      case 6:
        document.getElementById("desc").innerHTML="спасибо за turbo boost";
        break;
      case 7:
        document.getElementById("desc").innerHTML="опять мать прошивать?";
        break;
      case 7:
        document.getElementById("desc").innerHTML="гоним по шине до предела";
        break;
      case 8:
        document.getElementById("desc").innerHTML="лучше купи райзен";
        break;
    }
  }
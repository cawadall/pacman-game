var record, usr, index, user, finished=false, first_time=true;
var shapes, ghosts; //canvas;
var points, lives;
var starthour, timeinterval; // inerinterval, ginterval;
var despx,despy; //desplazamiento
var borders, food;
var pacman_src1, pacman_src2;
var crashedSound, chompSound, motivatedSound, initSound;
var bcoordinates = [[65,35,10,20],[65,35,100,0],[165,35,0,20],[65,55,100,0],[210,35,10,20],[210,35,120,0],[330,35,0,20],[210,55,120,0],[65,82,0,8],[65,82,100,0],[165,82,0,8],[65,90,100,0],[19,3,364,0],[383,3,0,53],[383,56,37,0],[420,3,0,53],[420,3,365,0],[465,35,0,20],[465,35,125,0],[590,35,0,20],[465,55,125,0],[642,35,0,20],[642,35,100,0],[742,35,0,20],[642,55,100,0],[642,82,0,8],[642,82,100,0],[742,82,0,8],[642,90,100,0],[19,3,0,120],[20,120,140,0],[785,3,0,120],[645,123,125,0],[210,90,32,0],[210,100,0,70],[210,170,32,0],[242,136,0,34],[242,100,0,34],[242,120,94,0],[336,122,0,13],[242,136,94,0],[294,84,210,0],[294,84,0,10],[382,94,0,36],[294,94,86,0],[382,132,38,0],[420,96,0,36],[420,96,85,0],[505,85,0,11],[472,122,0,10],[472,132,86,0],[588,132,0,38],[558,170,34,0],[592,85,0,85],[556,85,36,0],[556,85,0,35],[472,122,84,0],[158,122,0,48],[640,122,0,48],[640,170,160,0],[0,170,150,0],[0,200,150,0],[645,200,155,0],[300,160,205,0],[505,160,0,48],[300,210,205,0],[300,160,0,50],[150,200,0,48],[642,200,0,48],[212,200,28,0],[240,200,0,48],[210,248,30,0],[210,200,0,48],[560,200,30,0],[590,200,0,46],[560,246,30,0],[560,200,0,46],[300,240,205,0],[505,240,0,10],[420,250,85,0],[420,250,0,36],[384,286,36,0],[384,248,0,38],[300,248,84,0],[300,240,0,8],[15,250,135,0],[645,250,140,0],[15,250,0,65],[785,250,0,65],[730,315,55,0],[730,315,0,13],[730,328,55,0],[15,315,55,0],[70,315,0,13],[15,328,55,0],[70,278,88,0],[158,278,0,48],[125,326,33,0],[125,290,0,36],[68,290,57,0],[68,278,0,12],[215,278,115,0],[330,278,0,12],[215,290,115,0],[215,278,0,12],[475,278,115,0],[592,278,0,12],[475,290,115,0],[475,278,0,12],[645,278,90,0],[735,278,0,10],[680,288,55,0],[680,288,0,38],[645,326,35,0],[645,278,0,48],[302,314,202,0],[502,314,0,12],[420,326,82,0],[420,326,0,36],[385,362,35,0],[385,328,0,32],[302,328,83,0],[302,316,0,12],[15,332,0,60],[15,392,781,0],[785,332,0,60],[68,356,142,0],[210,316,0,40],[210,316,34,0],[244,316,0,36],[244,352,86,0],[330,352,0,13],[68,365,262,0],[68,356,0,9],[474,356,82,0],[556,316,0,40],[556,316,34,0],[590,316,0,39],[590,355,145,0],[735,355,0,10],[472,365,263,0],[472,355,0,10],[556,132,0,38]];

var pcoordinates = [[40,20],[65,20],[90,20],[115,20],[140,20],[165,20],[190,20],[215,20],[240,20],[265,20],[290,20],[315,20],[340,20],[365,20],[365,45],[365,70],[340,70],[240,70],[265,70],[290,70],[315,70],[40,70],[65,70],[90,70],[115,70],[140,70],[165,70],[190,70],[215,70],[190,45],[40,45],[40,90],[40,110],[65,110],[90,110],[115,110],[140,110],[165,110],[190,90],[190,110],[190,135],[190,160],[190,185],[190,210],[190,235],[190,260],[190,285],[190,310],[190,338],[165,260],[140,260],[115,260],[40,260],[65,260],[90,260],[40,280],[40,300],[65,300],[90,300],[90,320],[90,340],[115,340],[140,340],[165,340],[65,340],[40,340],[40,360],[40,380],[65,380],[90,380],[115,380],[140,380],[165,380],[190,380],[215,380],[240,380],[265,380],[290,380],[315,380],[340,380],[365,380],[390,380],[415,380],[440,380],[465,380],[490,380],[515,380],[540,380],[565,380],[590,380],[615,380],[640,380],[665,380],[690,380],[715,380],[740,380],[765,380],[765,360],[765,340],[740,340],[715,340],[690,340],[665,340],[640,340],[615,340],[615,315],[615,290],[615,265],[615,240],[615,215],[615,190],[615,165],[615,140],[615,115],[615,90],[615,65],[615,45],[615,20],[640,20],[665,20],[690,20],[715,20],[740,20],[765,20],[765,45],[765,70],[765,90],[765,110],[740,110],[715,110],[690,110],[665,110],[640,110],[740,70],[715,70],[690,70],[665,70],[640,70],[590,70],[565,70],[540,70],[515,70],[490,70],[465,70],[440,70],[415,70],[390,70],[365,70],[440,45],[440,20],[465,20],[490,20],[515,20],[540,20],[565,20],[590,20],[265,90],[265,110],[290,110],[315,110],[340,110],[365,110],[540,90],[540,110],[515,110],[490,110],[465,110],[440,110],[215,260],[240,260],[265,260],[290,260],[315,260],[340,260],[365,260],[365,280],[365,300],[390,300],[415,300],[440,300],[465,300],[490,300],[515,300],[540,300],[565,300],[590,300],[440,280],[440,260],[465,260],[490,260],[515,260],[540,260],[565,260],[590,260],[640,260],[665,260],[690,260],[715,260],[740,260],[765,260],[765,280],[765,300],[740,300],[715,300],[690,300],[690,320],[215,300],[240,300],[265,300],[290,300],[315,300],[340,300],[265,320],[265,340],[290,340],[315,340],[340,340],[365,340],[365,360],[440,360],[440,340],[465,340],[490,340],[515,340],[540,340],[540,320]];


function modalFunction() {
      gameArea.stop();
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("menu");
      var rsm = document.getElementById("resume");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      // When the user clicks on the button, open the modal
      btn.onclick = function() {
          modal.style.display = "block";
          modalFunction();
      }
      rsm.onclick = function() {
          modal.style.display = "none";
          gameArea.resume();
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
          gameArea.resume();
      }
      //////////////////////////////////////////////////////////
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
              gameArea.resume();
          }
      }
}

function comparacion (elem1,elem2) {return elem2-elem1;}
function showHighscore() {
    var max_p = 0, usr="", ca, c=[];
    ca = document.cookie;
    ca = ca.split(";");
    //console.log(ca);
    for(var i = 0; i < ca.length; i++) {
        c.push(ca[i].split(" ")[2]);

    }
    c.sort(comparacion);
    var rec = c[0];
    for(var i = 0; i < ca.length; i++) {
        if (ca[i].split(" ")[2] == rec) {usr=ca[i].split("=")[1].split(" ")[0]; break;};

    }
    alert("1. " + usr + ": " + rec + " pts.")
    // imprimir high en un párrafo
}

function showInfo() {

    alert("THIS CODE MADE BY: Carlos Awadallah Estévez\nSUBJECT: Construcción de Servicio Y Aplicaciones Audiobisuales en Internet\nURJC, Ing. Sistemas Audiovisuales y Multimedia.");
}

function showInstructions() {
    /*var instructions = document.getElementById('instructions');
    var p = document.createElement('p');
    var text = document.createTextNode('Use "a", "w", "s" and "d" keys to control Pacman');
    p.appendChild(text);
    instructions.appendChild(p);*/
    alert('Use "a", "w", "s" and "d" keys to control Pacman');
    // imprimiren un párrafo
}

function setCookie(cname, cvalue, exdays) {
    /*var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();*/
    document.cookie = cname + "=" + cvalue + ";"; //+ expires + ";path=/";
}

function checkCookie(username) {
    //console.log(document.cookie);
    if (document.cookie.length == 0) {user = ""; return user;};
    for (var i=0; i<document.cookie.length; i++) {
        var user = getCookie("username"+i+"="+username);
        console.log(username);
        console.log(document.cookie);
        if (user != "") { index=i; return user;}
    }
    if (user == "") {
        index = document.cookie.split(';').length;
        setCookie("username"+index, username + " 0", 365);
        user = username + " 0";
        return user;
    } 
    
}

function getCookie(cname) {
    var name = cname;
    ca = document.cookie;
    ca = ca.split(";");
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        c = c.split(" ")[1];
        //while (c.charAt(0) == ' ') {
         //   c = c.substring(1);
        //}
        if (c == cname) {
            return c.split("=")[1]+ " " + ca[i].split(" ")[2];
        }
    }
    return "";
}

function initmenu() {
    initSound = new sound("pacman_beginning.wav");
    initSound.play();
    var form = document.getElementById('form');
    user = document.getElementById('POST-name').value;
    
    //var record = 0;
     //al finalizar, actualizar el valor de la cookie
    //document.cookie="";
    //document.cookie = ("user=" + user + ' ' + record + ";");
    //leer de las cookies y hacer push


    /*cookies = document.cookie;
    cookies = cookies.split(";");
    for (var i=0;i<cookies.length;i++){
        cookies[i] = cookies[i].split("=")[1].split(" ");
        //console.log(cookies[i]);
    }
    //console.log(cookies[0][0]);
   // cookies = cookies.split("=");
    for (var i=0; i<cookies.length; i++) {
        users.push([cookies[i][0],cookies[i][1]]);
    }
    console.log(users[1]);
    //users.push(["e",3452]);*/
    if (user != "" && user != undefined)
    {
        
        usr = checkCookie(user);
        
        form.style.display = "none";
        document.getElementById('info').innerHTML = "";
        document.getElementById('POST-name').value = "";
        
        record = usr.split(" ")[1];
        if (record == undefined) {record=0;}
        document.getElementById('record').innerHTML = "Record: " + record + " pts.";                 
            
        
        while(form.hasChildNodes()) {form.removeChild(form.firstChild);}
        menu = document.getElementById('menu-buttons');
        form.appendChild(menu);
        form.style.display = "block";
        menu.style.display = "block";
    } else {
        document.getElementById('info').innerHTML = "Invalid Username, please input something";
    }
    //modal.style.display = "none";

}
// Para cuando se abre la página, gestiona el comienzo del juego
function init() {
    // inicialización de variables globales
    shapes = [];
    ghosts = []; //array de figuras
    borders = [];
    food = [];
    //bn = 4//; //numero de bordes
    points = 0;
    lives = 3;
    despx = 0 ;
    despy = 0;
    pacman_src1 = "pacman1.png";
    pacman_src2 = "pacman2.png";
 
    document.body.style.background = "url('figures.jpg')";
    var menu = document.getElementById('menu-buttons');
    var gameinit = document.getElementById('gameinit')
    var father = menu.parentNode;
    father.removeChild(menu);
    father = gameinit.parentNode;
    father.removeChild(gameinit);
    var rightside = document.getElementById('rightside');
    var leftside = document.getElementById('leftside');
    rightside.style.display = "block";
    leftside.style.display = "block";

    chompSound = new sound("pacman_chomp.wav");
    crashedSound = new sound("pacman_death.wav");
    motivatedSound = new sound("pacman_intermission.wav");
    for (var i=0; i<bcoordinates.length; i++){
      var c = bcoordinates[i];
      borders.push(new Border(c[0],c[1],c[2],c[3]));
    }
    for (var i=0; i<pcoordinates.length; i++) {
      c = pcoordinates[i];
      var id = "p"+i;
      if (c[0] == 40 && c[1] ==70 || c[0] == 40 && c[1] == 280 || c[0] == 765 && c[1] == 70 || c[0] == 765 && c[1] ==280 )
      {
        food.push(new Point(c[0],c[1],5,id));
      } else {
        food.push(new Point(c[0],c[1],2.5,id));
      }
    }
    food.push(new Point(395,220,14,"cereza"));

    /*clearInterval(ginterval);
    clearInterval(inerinterval);*/
    clearInterval(timeinterval);
    /////////////////////////////////////////

    shapes.push(new Pacman("pm", 20, 20, 392, 292));
    gameArea.start();
    shapes.push(new Ghost("g1", 20, 20, gameArea.canvas.width/2, gameArea.canvas.height/2-25,'WALTER.png'));
    shapes.push(new Ghost("g2", 20, 20, (gameArea.canvas.width/2)+25, (gameArea.canvas.height/2)-28,'2PAC.png'));
    shapes.push(new Ghost("g3", 20, 20, (gameArea.canvas.width/2)-25, (gameArea.canvas.height/2)-30,'PINKY.png'));

    document.addEventListener('keydown', keyHandler, false);
}

// Devuelve un objeto concreto por su id
function getShape(id) {
    for(var x in shapes) {
        if(shapes[x].id === id)
            return shapes[x];
    }
}
// Elimina un objeto por su id
function delFood(id) {
    for(var x in food) {
        if(food[x].id === id)
            food.splice(x,1);
    }
}

function recalculate(obj) {
    if (obj.despx != 0) 
    {
        do {
            obj.despy = Math.round(2*Math.random()-1)*3;
        } while (obj.despy == 0);
        obj.despx = 0; 
    } else {
        do {
            obj.despx = Math.round(2*Math.random()-1)*3;
        } while (obj.despx == 0);
        obj.despy = 0;
    }
    obj.set = false;
}


var gameArea = {

    start : function() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 400;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //this.frameNo = 0;
        this.interval = setInterval(updateGame, 20);

        setInterval(changeImage, 400); //gif animado
        updateGame();
    },

    clear : function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.interval);
    },

    resume : function() {
      this.interval = setInterval(updateGame, 20);
    }
}

function updateGame() {
    gameArea.clear();
    if (!finished)
    {
    for(var i=0; i<shapes.length; i++) {
        shapes[i].move();
        shapes[i].update();
    }
    for(var i=0; i<food.length; i++) {
        food[i].update();
    }
    document.getElementById('score').innerHTML = points;
    } else {chompSound.stop(); gameFinish("YOU WIN!");}
}

function changeImage() {
    var obj;
    obj = getShape("pm");
    if(obj === undefined)
        {return;}

    url = obj.image.src.split("/");
    url = url[url.length-1];
    var gif = [pacman_src1, pacman_src2];
    for (var i=0; i<gif.length; i++) {
        if (url != gif[i])
        {
            obj.image.src = gif[i];
        }
    }
}

function Pacman(id, width, height, x, y) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.special = false;
    this.image = new Image();
    this.image.src = 'pacman1.png';
    var background = new Image();
    background.src = 'back.jpg';

    this.update = function(){
        ctx = gameArea.ctx;
        ctx.drawImage(background, 0, 0, gameArea.canvas.width, gameArea.canvas.height);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        //console.log("(" + this.x + "," + this.y + ")")
    }

    this.move = function() {
        if (despx != 0 && !this.special|| despy != 0 && !this.special) {chompSound.play();};
        this.x += despx;
        this.y += despy;
        if((this.x)<0) // Control de límites del canvas
          this.x = gameArea.canvas.width-this.width;
        if((this.x + this.width/2)>=gameArea.canvas.width)
          this.x = 0 + this.width/2;
        for (var obj=0; obj<bcoordinates.length; obj++) {
            // VERIFICAR SÓLO EN LA DIRECCIÓN EN QUE SE ESTÁ AVANZANDO
            crashed = this.crashWith(borders[obj]);
            if (crashed)
            {
              this.stopMove();
            }
        }
        for (var obj=0; obj<food.length; obj++) {
            this.eat(food[obj], obj);
        }
        for (var obj=0; obj<ghosts.length; obj++) {
            ghost = getShape(ghosts[obj]);
            crashed = this.crashWith(ghost);
            if (crashed && !this.special)
            {
              this.stopMove();
              ghost.stopMove();
              clearInterval(gameArea.interval);
              crashedSound.play();
              lives--;
              drawLives();
            } else if (crashed && this.special) {
              points += 200;
              clearInterval(gameArea.interval);
              gameArea.interval = setInterval(updateGame, 20);
              var pos = new Array();
              pos.push(ghost.x);
              pos.push(ghost.y);
              ghost.out = false;
              death(ghost);
              var pointinterval = setInterval(function(){gameArea.ctx.font = "bold 22px sans-serif";gameArea.ctx.fillText("200",pos[0],pos[1]);},20);
              setTimeout(function(){clearInterval(pointinterval);},1000);
              // PONER POR PANTALLAAA
            }
        }
    }

    this.stopMove = function() {
        despx = 0;
        despy = 0;
        chompSound.stop()
    }

    this.crashWith = function(otherobj) {
        /*var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);*/
        var crash = true;
        if ((this.x+this.width < otherobj.x) || (this.x > otherobj.x+otherobj.width) || (this.y+this.height < otherobj.y) || (this.y > otherobj.y+otherobj.height)) {
           crash = false;
        } else {
          if (despx != 0) {this.x -= despx;}
          if (despy != 0) {this.y -= despy;}
        }
        return crash;
    }
    this.eat = function(point, i) {
        dx = this.x+this.width - point.x;
        dy = this.y+this.height/2 - point.y;
        distance = Math.sqrt((dx*dx)+(dy*dy));
        dx -= this.width;
        dy -= this.height/2;
        distance2 = Math.sqrt((dx*dx)+(dy*dy))
        if (distance <= 1+this.width/2 || distance2 <= this.width/3)
        {
            food.splice(i,1);
            if (food.length == 0) {finished=true;}
            if (point.id == "cereza")
            {
                points += 100;
                //food.push(new Point(point.x,point.y,0,"text"));
                //setTimeout(function() {delFood("text");console.log("borro");}, 3000);
                // NUMERITOS EN LA PANTALLA
                if (!finished)
                {
                clearInterval(gameArea.interval);
                gameArea.interval = setInterval(updateGame, 20);
                var pointinterval = setInterval(function(){gameArea.ctx.font = "bold 22px sans-serif";gameArea.ctx.fillText("100",point.x,point.y);},20);
                setTimeout(function(){clearInterval(pointinterval);},1000);
                }
                
            } else if ((point.x == 40 && point.y ==70) || (point.x == 40 && point.y == 280) || (point.x == 765 && point.y == 70) || (point.x == 765 && point.y ==280) ) {
                this.special = true;
                points += 200;
                if (!finished)
                {
                clearInterval(gameArea.interval);
                gameArea.interval = setInterval(updateGame, 20);
                var pointinterval = setInterval(function(){gameArea.ctx.font = "bold 22px sans-serif";gameArea.ctx.fillText("200",point.x,point.y);},20);
                setTimeout(function(){clearInterval(pointinterval);},1000);
                specialPoint(false);
                motivatedSound.play();
                }
            } else {
                points += 10;
            }
        }

    }

}

function Ghost(id, width, height, x, y, src) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.despx = 0;
    this.despy = 0;
    ghosts.push(this.id);
    this.image = new Image();
    this.image.src = src;
    this.out = false;
    this.done = false;
    this.set = false;
    this.update = function(){
        ctx = gameArea.ctx;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        //pintar la imagen de pacman
    }

    this.move = function() {
        this.x += this.despx;
        this.y += this.despy;//aleatorio
        if((this.x)<0) // Control de límites del canvas
          this.x = gameArea.canvas.width-this.width;
        if((this.x + this.width/2)>=gameArea.canvas.width)
          this.x = 0 + this.width/2;
        this.calculateMove();
        var distances = new Array();
        for (var obj=0; obj<bcoordinates.length; obj++) {
            // VERIFICAR SÓLO EN LA DIRECCIÓN EN QUE SE ESTÁ AVANZANDO
            if (this.out)
            {
                crashed = this.crashWith(borders[obj]);
                if (crashed)
                {
                  this.done = false;
                  this.calculateMove();
                } else {
                    if (!this.set)
                    { 
                        this.set = true;
                
                        setTimeout(recalculate, 1500, this);
                    // verificar a qué sitios puede ir
                    }
                }
            } //else {this.calculateMove();}
        }
    }

    this.crashWith = function(otherobj) {

        var crash = true;
        if ((this.x+this.width < otherobj.x) || (this.x > otherobj.x+otherobj.width) || (this.y+this.height < otherobj.y) || (this.y > otherobj.y+otherobj.height)) {
           crash = false;
        } else {
          if (this.despx != 0) {this.x -= this.despx;}
          if (this.despy != 0) {this.y -= this.despy;}
        }
        return crash;
    }

    this.freePath = function(otherobj) {
        
        this.calculateMove();
        if (this.despx < 0 || this.despx > 0) {this.calculateMove();}
        else {this.despy=0; this.despx = 3;}
        //for (var obj=0; obj<bcoordinates.length; obj++) {
          //  crashed = this.crashWith(borders[obj]);
            //if (crashed)
            //{
              //this.done = false;
              //this.calculateMove();
            //}
        //}
    
    }

    this.calculateMove = function() {
        if (!this.out)
        {
            if (this.id != "g3")
            {
                g3 = getShape("g3")
                if ( this.id != "g2")
                {
                    g2 = getShape("g2")
                    if (g3.out && g2.out)
                    {
                        if (this.x != 392) {this.despx = -1*(this.x-392)/Math.abs(this.x-392)}
                        else if (this.x == 392 && this.y != 138) {this.despx=0; this.despy=-1;}
                        else {this.out = true;}
                    } else {this.despx = 0; this.despy = 0;}
                } else {
                    g1 = getShape("g1");
                    if (!g1.out) {g1.despx=0; g1.despy=0;g1.x=392}
                    if (g3.out)
                    {
                      if (this.x != 392) {this.despx = -1*(this.x-392)/Math.abs(this.x-392)}
                        else if (this.x == 392 && this.y != 138) {this.despx=0; this.despy=-1;}
                        else {this.out = true;}
                    } else {this.despx = 0; this.despy = 0;}
                }

            } else {
                g1 = getShape("g1");
                g2 = getShape("g2");
                if (!g1.out) {g1.despx=0; g1.despy=0;g1.x=392}
                if (!g2.out) {g2.despx=0; g2.despy=0;g2.x=392}
                //g2.despx=0; g2.despy=0;
                if (this.x != 392) {this.despx = -1*(this.x-392)/Math.abs(this.x-392)}
                else if (this.x == 392 && this.y != 138) {this.despx=0; this.despy=-1;}
                else {this.out = true;}

            }
        } else {
            if (!this.done)
            {
                do {
                    this.despx = Math.round(2*Math.random()-1)*3;
                    this.despy = Math.round(2*Math.random()-1)*3;
                } while (this.despx != 0 && this.despy != 0 || this.despx == 0 && this.despy == 0);
                this.done = true;
            }
        }

    }

    this.stopMove = function() {
        despx = 0;
        despy = 0;
    }

}

function Border(x,y,width,height) {
  //this.id = id;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}

function Point(x,y,radious,id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.radious = radious;
    if (this.id == "cereza")
    {
        this.src = "cereza.png";
        this.image = new Image();
        this.image.src = this.src;
    }
    this.update = function() {
        ctx = gameArea.ctx;
        if  (this.id == "cereza")
        {
            ctx.drawImage(this.image, this.x, this.y, this.radious, this.radious);
        } else if (this.id == "text") {
            ctx.font = "bold 22px sans-serif";
            ctx.fillText("100",this.x,this.y);
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255, 255, 0, 1)';
            ctx.fill();
        }
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    if (src == "pacman_death.wav") {this.sound.setAttribute("onended","death(undefined)");}
    if (src == "pacman_chomp.wav") {this.sound.setAttribute("loop","true");}
      if (src == "pacman_intermission.wav") {this.sound.setAttribute("loop","true");}
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        //document.getElementById("audio").onclick = "audioPlay()";
    }
}

function death(ghost) {
    if (lives>0)
    {
        if (ghost == undefined)
        {
            pacman = getShape("pm");
            pacman.x = 392;
            pacman.y = 292;
            pacman_src1 = "pacman1.png";
            pacman_src2 = "pacman2.png";
            for (var g=0; g<ghosts.length; g++) {
                ghost = getShape(ghosts[g]);
                ghost.out = false;
                ghost.despx = 0;
                ghost.despy = 0;
                if (ghosts[g] == "g1") {ghost.x = gameArea.canvas.width/2; ghost.y=gameArea.canvas.height/2-25;}
                else if (ghosts[g] == "g2") {ghost.x = (gameArea.canvas.width/2)+25; ghost.y = (gameArea.canvas.height/2)-28;}
                else {ghost.x = (gameArea.canvas.width/2)-25; ghost.y = (gameArea.canvas.height/2)-30;}
            }
            gameArea.interval = setInterval(updateGame, 20);
        } else {
            if (ghost.id == "g1"){ghost.x = gameArea.canvas.width/2;ghost.y = gameArea.canvas.height/2-25;}
            if (ghost.id == "g2"){ghost.x = (gameArea.canvas.width/2)+25;ghost.y = (gameArea.canvas.height/2)-28;}
            if (ghost.id == "g3"){ghost.x = (gameArea.canvas.width/2)-25;ghost.y = (gameArea.canvas.height/2)-30;}
            ghost.out = false;
            //ghost.done = false;
            ghost.despx = 0;
            ghost.despy = 0;
        }
    } else {
        gameFinish("GAME OVER");
    }
}

function specialPoint(end) {
    console.log(first_time);
    pm = getShape("pm");
    if (end) {pm.special = false;}
    if (pm.special)
    {
        for (var g=0; g<ghosts.length; g++) {
            ghost = getShape(ghosts[g]);
            var src1 = ghost.image.src.split("/")
            src1 = src1[src1.length-1];
            if (src1 == "blue_ghost.png")
            {
                ghost.image.src = "white_ghost.png";
            } else {
                ghost.image.src = "blue_ghost.png";
            }
        }
        setTimeout(specialPoint, 400, false);
        if (first_time) {setTimeout(specialPoint, 10000, true);}
        first_time = false;
    } else {
        for (var g=0; g<ghosts.length; g++) {
            ghost = getShape(ghosts[g]);
            if (ghosts[g] == "g1") {ghost.image.src = "WALTER.png";}
            else if (ghosts[g] == "g2") {ghost.image.src = "2PAC.png";}
            else {ghost.image.src = "PINKY.png";}
        //parar musiquita
        }
        motivatedSound.stop();
        first_time = true;
    }
}

function drawLives() {
    var lives_imgs = document.getElementsByClassName("live");
    for (var i=0;i<lives_imgs.length;i++) {
        lives_imgs[i].src = "";
    }
    for (var i=0;i<lives;i++) {
        lives_imgs[i].src = "paclive.png";
    }
}

function gameFinish(text) {
    gameArea.stop();
    
    gameArea.ctx.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);
    //comprobar si el record es mayor al que había
    
    if (record < points) {if(index != undefined){setCookie("username"+index, usr.split(" ")[0] + " " + points, 365);}else{setCookie("username"+document.cookie.length, usr.split(" ")[0] + " " + points, 365);}}                
    
    //ctx = gameArea.canvas.getContext('2d');
    gameArea.ctx.font = "bold 100px sans-serif";
    var x_pos;
    if(text=="YOU WIN!") {x_pos = 0.2;}else{x_pos=0.11;}
    gameArea.ctx.fillText(text,x_pos*gameArea.canvas.width,0.5*gameArea.canvas.height);
    //RECARGAR LA PÁGINA CON ALGÚN EVENTO
    document.addEventListener('keydown', finishHandler, false);

    var gradient=gameArea.ctx.createLinearGradient(0,0,gameArea.canvas.width,0);
    gradient.addColorStop("0","#E8E071");
    gradient.addColorStop("0.5","#F5E93F");
    gradient.addColorStop("1.0","#FAD001");
    
    gameArea.ctx.fillStyle=gradient;  
    gameArea.ctx.font = "bold 40px sans-serif";
    gameArea.ctx.textAlign = "center";
    gameArea.ctx.fillText("Press Space to play again",gameArea.canvas.width/2,gameArea.canvas.height/3.5);
}

function finishHandler(event) {
    if (event.key == " ") {location.reload()} else {console.log("Key not handled");}
}

// Manejador de eventos (pulsar tecla)
function keyHandler(event) {

  var obj;
  obj = getShape("pm");

  if(obj === undefined)
    return;
  switch(event.key) {
    case "a":
      pacman_src1 = "pacman5.png";
      pacman_src2 = "pacman6.png";
      obj.stopMove();
      despx = -3;
      break;
    case "d":
      pacman_src1 = "pacman1.png";
      pacman_src2 = "pacman2.png";
      obj.stopMove();
      despx = 3;
      break;
    case "w":
      pacman_src1 = "pacman3.png";
      pacman_src2 = "pacman4.png";
      obj.stopMove();
      despy = -3;
      break;
    case "s":
      pacman_src1 = "pacman7.png";
      pacman_src2 = "pacman8.png";
      obj.stopMove();
      despy = 3;
      break;
    case " ":
        //startGame();
        obj.stopMove();
        break;
    default:
      console.log("Key not handled");
  }
}

function startGame() {

  starthour = new Date();   //hora de inicio del juego

  /*ginterval = setInterval(generate_asteroids, 1000);
  setInterval(asteroids_render, 60);*/
  timeinterval = setInterval(gameTime, 1000);
}

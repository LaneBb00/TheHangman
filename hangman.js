document.getElementById("img2").style.display="none";   //Blocco tutte le immagini tranne la prima
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("img8").style.display="none";

document.getElementById("game").style.display="none";   //Blocco la seconda pagina contenente il gioco

function immagine(tentativi_restanti){      //Funzione che carica le immagini dell'impiccato in base alla situazione della partita raggiunta indicata dal numero di tentativi rimanenti

    if(tentativi_restanti==6){      //Se viene inserita una lettera sbagliata i tentativi rimanenti da 7 passano e 6 e carico dunque l'immagine che contiene anche testa dell'omino
        document.getElementById("img1").style.display="none";   //Tolgo l'immagine precedente, quella senza corpo dell'omino
        document.getElementById("img2").style.display="block";  //Carico l'immagine con la testa dell'omino
    }

    //Ripeto per tutte le altre situazioni

    if(tentativi_restanti==5){      //Se i tentativi rimasti sono 5 carico l'immagine con anche metà del corpo dell'omino, tolgo quella di prima
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="block";
    }

    if(tentativi_restanti==4){      //Se i tentativi rimasti sono 4 carico l'immagine con anche l'altra metà del corpo dell'omino, tolgo quella di prima
        document.getElementById("img3").style.display="none";
        document.getElementById("img4").style.display="block";
    }

    if(tentativi_restanti==3){      //Se i tentativi rimasti sono 3 carico l'immagine con anche un braccio dell'omino, tolgo quella di prima
        document.getElementById("img4").style.display="none";
        document.getElementById("img5").style.display="block";
    }

    if(tentativi_restanti==2){      //Se i tentativi rimasti sono 2 carico l'immagine con anche l'altro braccio dell'omino, tolgo quella di prima
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="block";
    }

    if(tentativi_restanti==1){      //Se i tentativi rimasti sono 1 carico l'immagine con anche una gamba dell'omino, tolgo quella di prima
        document.getElementById("img6").style.display="none";
        document.getElementById("img7").style.display="block";
    }

    if(tentativi_restanti==0){      //Se i tentativi rimasti sono 0 carico l'immagine con il corpo dell'omino completo (l'utente ha perso)
        document.getElementById("img7").style.display="none";
        document.getElementById("img8").style.display="block";
    }
}

function test(){        //Funzione che controlla che l'utente non abbia cliccato il bottone indovina senza aver inserito una lettera

    var input=document.getElementById("lettera-input").value;   //Preleviamo il contenuto inserito in input

    if(input==""){      //Se l'input è vuoto

        Swal.fire({     //Mando un alert che comunica tale errore
            icon: "error",
            title: "Oops...",
            text: "Inserire una lettera!",
          });
          return false;     //Ritorno falso per dire che il controllo non è andato a buon fine e dunqeu nel python non eseguirò il codice nonostante l'aver premuto il bottone
    }

    return true;    //Altrimenti ritorno true affermando che l'utente non ha lasciato la casella di input vuota
}

function alert(){   //Invio alert riguardo l'aver inserito una lettera già indovinata

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hai già provato questa lettera!",
    });
}

function end(){    //Funzione che si attiva in caso di vittoria o perdita per indicare la fine del gioco

    document.getElementById("submit").style.backgroundColor="#808080";  //Imposto il colore del bottone indovina a grigio
    document.getElementById("submit").disabled=true;                    //Disattivo il bottone indovina
    document.getElementById("ricarica").innerHTML = "<a class='button mt-2 mb-2' id='ricarica2' onclick='window.location.reload()'>Ricarica</a>";   //Carico il bottone di refresh della pagina
}

//Istruzioni che gestiscono il menu e la comparsa della tendina in caso di una dimensione ridotta della visualizzazione del sito
let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
      document.body.classList.toggle('menu-open');
});

function change(){      //Funzione che blocca il primo div pag1 (il sito introduttivo) e carica la pagina del gioco

    document.getElementById("pag1").style.display="none";   //Blocco la prima pagina
    document.getElementById("game").style.display="block";  //Carico la pagina del sito
}


/* Das Ergebnis sollte im Terminal angezeigt werden.
 Falls nicht bitte öffnen Sie die HTML datei "Exercise_front" und dort müsste das Ergebnis in den Dev.Tools angezeigt werden
*/
function task() {
    let zahl = 1;
    let zahlAlt = 0;
    let zahlNeu = 0;
    let schritt = 0;
  
    while (schritt < 41) {
      zahlNeu = zahlAlt + zahl;
      zahlAlt = zahl;
      zahl = zahlNeu;
  
      if (zahl >= 89) {
        console.log(schritt + ":" + zahl);
        schritt++;
      }
    }
  }
  
  task();
  
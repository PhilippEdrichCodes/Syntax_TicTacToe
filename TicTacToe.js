/*
 * Das TicTacToe aus der Vorlesung
 */

/*
 * Zuerst brauche ich ein zweidimensionales Array mit der Größe 3x3.
 * Dazu lege ich ein Array an. Dieses nenne ich ticTac.
 * let ticTac = []
 *
 * Diesem gebe ich 3 Elemente.
 * let ticTac = [x,y,z]
 *
 * Nun hat das Array die Länge 3, aber nur eine Dimension.
 *
 * Ich benötige aber eine zweite Dimension, damit ich nicht nur eine Zeile,
 * sondern drei Zeilen erhalte.
 * Deshalb müssen diese Elemente wiederum Arrays sein:
 * let ticTac = [[],[],[]]
 *
 * Damit ich auf die Größe von 3 auf 3 komme,
 * also quasi 3 Zeilen mit je 3 Spalten, benötigen diese inneren Arrays
 * wiederum je 3 Elemente:
 * let ticTac = [[a,b,c],[d,e,f],[g,h,i]]
 *
 * Damit ich in der Ausgabe etwas sehe, das trotzdem irgendwie
 * leer aussieht, habe ich mich für den Unterstrich im Format string ("_")
 * als einzelnen Wert entschieden.
 *
 * Daher definiere ich mein Spielfeld wie folgt:
 * let ticTac = [["_","_","_"],["_","_","_"],["_","_","_"]]
 *
 */
let ticTac = [["_","_","_"],["_","_","_"],["_","_","_"]]

/*
 * Um das Spiel verfolgen zu können und nicht nur zu erfahren, wer gewinnt,
 * gebe ich das Array in seinem aktuellen Zustand aus:
 * console.debug(ticTac)
 *
 * Das gibt allerdings das folgende Ergebnis:
 * [["_","_","_"],["_","_","_"],["_","_","_"]]
 *
 * Die Array- und Typen-Zeichen stören das Bild. Daher nutze ich
 * die Funktion join(). Die gibt nur die Werte aus:
 *
 * console.debug(ticTac.join())
 *
 * ergibt folgende Ausgabe:
 *
 * _,_,_,_,_,_,_,_,_
 *
 * Ich möchte aber auf den ersten Blick erkennen, ob auch nach unten oder
 * schräg eine 3er-Reihe entsteht. Daher nutze ich als Trenner das ASCII-Zeichen
 * für 'neue Zeile' \n:
 * console.debug(ticTac.join("\n"))
 *
 * Nun erhalte ich als Ausgabe:
 * _,_,_
 * _,_,_
 * _,_,_
 *
 * Es fällt auf, dass join() nur in der ersten Dimension den angegebenen Trenner
 * verwendet. In der zweiten Dimension bleibt es beim Standard-Trenner ','.
 * Damit kann ich für's Erste leben.
 * Aber damit ich die einzelnen Züge auf der Konsole auch auf den ersten Blick
 * unterscheiden kann, füge ich noch an die Ausgabe eine weitere (leere) neue Zeile an:
 * console.debug(ticTac.join("\n") + "\n")
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Der erste Zug:
 * Ein X in die erste Zeile an die zweite Position (Mitte)
 *
 * Beim Zugriff auf die Elemente in einem mehrdimensionalen Array ist darauf zu achten,
 * dass die Reihenfolge der Indizes jeweils von Außen nach Innen geht.
 * Der erste Index gibt also in diesem zweidimensionalen Array quasi die Zeilen an, der zweite die Spalte.
 *
 * Der Spieler mit dem X möchte sein "x" oben in die Mitte setzen,
 * also in die erste Zeile an die zweite Stelle.
 * Die Indizierung beginnt bei O zu zählen.
 * Der Index der ersen Zeile ist daher 0.
 * Deshalb muss ich beginnen mit:
 * ticTac[0]
 *
 * Der Index der zweiten Position in dieser Zeile ist entsprechend 1.
 * Also muss ich [1] hinzufügen. Das ergibt:
 * ticTac[0][1]
 *
 * Jetzt habe ich die richtige Position. An diese Stelle soll das "x".
 * Dies muss ich einfach mit dem Zuweisungsoperator = dem adressierten
 * Element zuweisen.
 * Der Befehlt muss deshalb lauten:
 * ticTac[0][1] = "x"
 */
ticTac[0][1] = "x"

/*
 * Ergibt:
 * _,x,_
 * _,_,_
 * _,_,_
 *
 * Die gesamte Ausgabe sieht jetzt, durch das zusätzliche \n, aus wie folgt:
 * _,_,_
 * _,_,_
 * _,_,_
 *
 * _,x,_
 * _,_,_
 * _,_,_
 *
 * Ohne würde es so aussehen:
 * _,_,_
 * _,_,_
 * _,_,_
 * _,x,_
 * _,_,_
 * _,_,_
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug zwei:
 * o in die obere, linke Ecke (erste Zeile, erste Stelle)
 */
ticTac[0][0] = "o"

/*
 * Ausgabe:
 * o,x,_
 * _,_,_
 * _,_,_
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug drei:
 * x in die dritte Zeile an die zweite Position (Mitte Unten)
 *
 */
ticTac[2][1] = "x"

/*
 * Ausgabe
 * o,x,_
 * _,_,_
 * _,x,_
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug vier:
 * o in die Mitte (Zeile 2, Position 2
 *
 */
ticTac[1][1] = "o"

/*
 * Ausgabe:
 * o,x,_
 * _,o,_
 * _,x,_
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug fünf:
 * x in die rechte, untere Ecke
 * (Zeile 3, Position 3)
 */
ticTac[2][2] = "x"

/*
 * Ausgabe:
 * o,x,_
 * _,o,_
 * _,x,x
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug sechs:
 * o unten vorne (Zeile 3 Position 1)
 *
 */
ticTac[2][0] = "o"

/*
 * Ausgabe:
 * o,x,_
 * _,o,_
 * o,x,x
 *
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug sieben:
 * x in die zweite Reihe vorne hin
 * (Position 1 in Zeile 2)
 */
ticTac[1][0] = "x"

/*
 * Ausgabe:
 * o,x,_
 * x,o,_
 * o,x,x
 */
console.debug(ticTac.join("\n") + "\n")

/*
 * Zug acht:
 * o oben rechts (Zeile 1, Position 2
 */
ticTac[0][2] = "o"

/*
 * Ausgabe:
 * o,x,o
 * x,o,_
 * o,x,x
 */
console.debug(ticTac.join("\n") + "\n")

// The winner takes it all!
console.debug("o wins!")

/*
Die gesamte Ausgabe des Games sieht folgendermaßen aus:

_,_,_
_,_,_
_,_,_

_,x,_
_,_,_
_,_,_

o,x,_
_,_,_
_,_,_

o,x,_
_,_,_
_,x,_

o,x,_
_,o,_
_,x,_

o,x,_
_,o,_
_,x,x

o,x,_
_,o,_
o,x,x

o,x,_
x,o,_
o,x,x

o,x,o
x,o,_
o,x,x

o wins!

Process finished with exit code 0*/

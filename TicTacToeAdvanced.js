/*
 * Das TicTacToe aus der Vorlesung
 */

/*
 * Zuerst brauche ich ein zweidimensionales Array mit der Größe 3x3.
 * Dazu legen wir ein Array an. Dieses nenne ich ticTac.
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
 * Damit kann ich fürs erste Leben. Aber damit ich die einzelnen Züge auf der
 * Konsole auch auf den ersten Blick unterscheiden kann, füge ich noch
 * gleich an die Ausgabe eine weitere leere neue Zeile an:
 * console.debug(ticTac.join("\n") + "\n")
 *
 * Jetzt sollen auch noch die Kommas weg.
 * Deshalb nehme ich nun das join() nicht für das gesamte Array, sondern nur für die inneren.
 * Die Zeichen sollen aber nicht jedes in einer einzelnen Zeile stehen, sondern hintereinander.
 * Deshalb nutze ich jetzt als Trenner nicht mehr "\n" sondern das Leerzeichen " ":
 * ticTac[0].join(" ")
 *
 * Das gibt natürlich nur die erste Zeile zurück:
 *  _ _ _
 *
 * Deshalb das gleiche nochmal für die anderen beiden Zeilen. Diese verbinde ich anschließend wieder
 * mit \n und gebe das ganze dann mit console.debug() aus. Das zusätzliche \n am Ende behalte ich
 * natürlich auch weiterhin bei:
 * console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Der erste Zug:
 * Ein X in die erste Zeile an die zweite Position (Mitte)
 */
ticTac[0][1] = "x"

/*
 * Ergibt:
 * _ x _
 * _ _ _
 * _ _ _
 *
 * Die gesamte Ausgabe sieht jetzt, durch das zusätzliche \n, aus wie folgt:
 * _ _ _
 * _ _ _
 * _ _ _
 *
 * _ x _
 * _ _ _
 * _ _ _
 *
 * Ohne würde es so aussehen:
 * _ _ _
 * _ _ _
 * _ _ _
 * _ x _
 * _ _ _
 * _ _ _
 *
 * Hier sind die einzelnen Spielzüge nicht zu unterscheiden
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug zwei:
 * o in die obere, linke Ecke (erste Zeile, erste Stelle)
 */
ticTac[0][0] = "o"

/*
 * Ausgabe:
 * o x _
 * _ _ _
 * _ _ _
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug drei:
 * x in die dritte Zeile an die zweite Position (Mitte Unten)
 *
 */
ticTac[2][1] = "x"

/*
 * Ausgabe
 * o x _
 * _ _ _
 * _ x _
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug vier:
 * o in die Mitte (Zeile 2, Position 2
 *
 */
ticTac[1][1] = "o"

/*
 * Ausgabe:
 * o x _
 * _ o _
 * _ x _
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug fünf:
 * x in die rechte, untere Ecke
 * (Zeile 3, Position 3)
 */
ticTac[2][2] = "x"

/*
 * Ausgabe:
 * o x _
 * _ o _
 * _ x x
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug sechs:
 * o unten vorne (Zeile 3 Position 1)
 *
 */
ticTac[2][0] = "o"

/*
 * Ausgabe:
 * o x _
 * _ o _
 * o x x
 *
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug sieben:
 * x in die zweite Reihe vorne hin
 * (Position 1 in Zeile 2)
 */
ticTac[1][0] = "x"

/*
 * Ausgabe:
 * o x _
 * x o _
 * o x x
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

/*
 * Zug acht:
 * o oben rechts (Zeile 1, Position 2
 */
ticTac[0][2] = "o"

/*
 * Ausgabe:
 * o x o
 * x o _
 * o x x
 */
console.debug(ticTac[0].join(" ") + "\n" + ticTac[1].join(" ") + "\n" + ticTac[2].join(" ") + "\n" )

// The winner takes ist all!
console.debug("o wins!")

/*

Die gesamte Ausgabe des Spiels sieht dann folgendermaßen aus:


_ _ _
_ _ _
_ _ _

_ x _
_ _ _
_ _ _

o x _
_ _ _
_ _ _

o x _
_ _ _
_ x _

o x _
_ o _
_ x _

o x _
_ o _
_ x x

o x _
_ o _
o x x

o x _
x o _
o x x

o x o
x o _
o x x

o wins!

Process finished with exit code 0

*/
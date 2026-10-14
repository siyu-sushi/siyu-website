SIYU – Website-Export für Manus
Stand: 13.10.2026 · Version mit dunklem Marmor, Bildvergrösserung und Datenschutzeinstellungen

INHALT
index.html: vollständige Website inklusive CSS, JavaScript, Animationen,
WebGL-Hintergrund, mobiler Navigation, Speisekarte und Dialogen.
assets/: Logo, Lieferando-Symbol, Hintergrundvideo, Videoposter, Favicon
und zusätzliche JSON-Dateien mit Menü- und Bewertungsdaten.

Die Speisekarte wird direkt aus den HTML-Einträgen in index.html angezeigt. menu.json ist eine zusätzliche Datenkopie; eine Änderung nur
an dieser Datei verändert die Anzeige nicht automatisch.
Die angezeigte Google-Bewertung ist ein gespeicherter Stand, kein Live-Abruf.

ÜBERNAHME IN MANUS
Diese ZIP als Ausgangsmaterial einer neuen Manus-Aufgabe bereitstellen.
Ein spezieller Ein-Klick-Import für diese Website wurde nicht geprüft.
Falls ZIP-Anhänge dort nicht angenommen werden, Archiv entpacken und
index.html sowie den vollständigen assets-Ordner übergeben.

Empfohlener Auftrag an Manus:
„Übernimm die Website aus diesem ZIP als bestehenden Quellcode und richte
sie in deinem Website-Projekt ein. Erhalte das aktuelle Design und alle
Inhalte unverändert: Liquid-Glass-Oberflächen, responsive Darstellung,
Scroll-Animationen, interaktiver Hintergrund, sämtliche Speisen und Preise,
Kontaktinformationen, Google-Bewertung und rechtliche Texte. Verwende das
mitgelieferte Video und alle Logos. Kein Musikplayer. Nutze die bestehenden
Dateien statt die Website aus einer Beschreibung neu zu erzeugen. Passe nur
die für das Hosting nötigen Pfade und Metadaten an. Prüfe Desktop und Mobile,
Video-Autoplay, Menüfilter, Dialoge und externe Links. Zeige eine Vorschau,
bevor du sie veröffentlichst.“

TECHNIK UND HOSTING
Einstiegsdatei: index.html im Stammverzeichnis.
Kein Build-Schritt, keine npm-Pakete, keine Datenbank und keine API-Schlüssel
für diese statische Website erforderlich. Statische Dateien über HTTP/HTTPS
bereitstellen; den assets-Ordner neben index.html erhalten.
Für eine lokale Vorschau im entpackten Ordner beispielsweise:
python -m http.server 8080
Dann http://localhost:8080 öffnen.

Inter und Instrument Serif werden lokal aus assets/fonts/ geladen;
die Lizenztexte liegen dort ebenfalls bei. Es gibt keine Google-Fonts-Anfrage.
Die eingebetteten Google-Karten sind standardmässig gesperrt und werden
erst nach Zustimmung zu externen Medien geladen. Akzeptieren, Ablehnen,
individuelle Auswahl und Widerruf im Seitenfuss bleiben erhalten.
Die Auswahl wird 180 Tage im Local Storage gespeichert.
Instagram-, Lieferando-, Telefon- und E-Mail-Links bleiben externe Angebote.
Das Video läuft stumm in Schleife; das Gerät entscheidet über Autoplay.
Das aktuelle og:image-Metadatum zeigt noch auf die bisherige Hosting-Adresse.
Beim Umzug dieses Metadatum auf die neue Domain mit
/assets/film-poster.jpg anpassen.

Das Archiv enthält keine ChatGPT-Anmeldung, Hosting-Zugangsdaten oder
Git-Metadaten. Die Zugangsbeschränkung der bisherigen ChatGPT-Adresse ist
eine Eigenschaft des bisherigen Hostings und wird nicht mitexportiert.
Die bestehende Website bleibt durch diesen Export unverändert.

SPEISENBILDER
71 Speisen besitzen kompakte, lokal gespeicherte WebP-Bilder, alle mit dunklem
schwarz-braunem Marmor und warmen, hellen Adern passend zur SIYU-Instagram-Referenz.
Das angehängte Garnelen-Wok-Foto wurde übernommen; eingeblendete Schrift und Logo
wurden entfernt. Weitere Instagram-Beiträge waren in dieser Arbeitsumgebung nicht
abrufbar. Die übrigen vorhandenen Gerichtsbilder wurden im Hintergrund angeglichen.
Die Hintergrundbearbeitung erfolgte mit der integrierten Bildbearbeitung.
Nur die 42 vollständig KI-generierten Motive tragen „KI-Bild“. Die 29 Motive
aus vorhandenen Lieferando-/Instagram-Fotos tragen keine individuelle
KI-Kennzeichnung. Der allgemeine Hinweis auf bearbeitete Hintergründe bleibt.
Hinweis und Kennzeichnungen bei der Übernahme beibehalten.
assets/menu-image-manifest.json dokumentiert ursprüngliche Fotoquellen,
Bearbeitung, Hintergrund und vollständige Bearbeitungs-Prompts.
Die Bilder sind illustrativ; die tatsächliche Anrichtung kann abweichen.

Per Klick oder Tastatur öffnen sich die Speisenbilder in einem kompakten,
responsiven Dialog. Schliessen ist per X, Escape oder Klick ausserhalb möglich.
Vorschaubilder liegen unter assets/menu-images/marble/; die schärferen Bilder
unter assets/menu-images/marble/zoom/ werden erst beim Öffnen geladen.
Auf schmalen Handys steht der Preis unter dem Gerichtstext.

Geprüft wurden alle 71 Bildmotive, lokale Bildpfade, Kennzeichnungen und die
JavaScript-Syntax. Gerichtstexte, Preise und Allergene sind unverändert.
Eine Browserprüfung der Website war in dieser Arbeitsumgebung nicht verfügbar.

HÄHNCHENBILDER UND GOOGLE-REZENSIONEN
Gegrilltes Hähnchen zeigt unpaniertes Fleisch ohne Teigmantel. Gebackenes
Hähnchen besitzt eine glatte, hellgoldene Teighülle ohne Panko-/Bröselkruste.
Die korrigierten Vorschau- und Zoom-Bilder haben neue Dateinamen (-v2.webp).

Die Rezensionsleiste zeigt fünf echte, öffentlich abrufbare Google-Rezensionen
als Auswahl aus 41 Bewertungen (5,0 Sterne), Stand 13.10.2026. Namen,
Profilbilder, Rezensionen-/Fotoanzahl und Datum stammen aus dem Google-Profil.
Längere Texte erscheinen als kurze Auszüge mit Link zur vollständigen Rezension.
Daten: assets/google-reviews.json; Profilbilder: assets/review-avatars/.
Die Texte stehen direkt im HTML; eine Änderung nur in JSON aktualisiert
die Anzeige nicht automatisch. Es gibt keinen automatischen Live-Abruf.

assets/reviews-carousel.js steuert den langsamen, endlosen Durchlauf.
Manuelles Wischen, Scrollen, Ziehen und Pfeiltasten-Buttons bleiben möglich.
Pause-Button, Pause bei Mausberührung oder Tastaturfokus und reduzierte
Bewegung werden berücksichtigt. Nach manueller Bedienung pausiert die
Automatik mindestens acht Sekunden. Ausserhalb des Bildschirms oder bei
verborgenem Browser-Tab hält die Animation ebenfalls an.
Die Funktionen wurden mit einem DOM-Modell geprüft; eine Browserprüfung
der visuellen Darstellung war in dieser Arbeitsumgebung nicht verfügbar.

JOBS UND BEWERBUNGSFORMULAR
Navigation „Jobs“ öffnet jobs.html mit der Teilzeit-Stelle für Service-/
Küchenhilfe in Höchst. Formularfelder: Name, E-Mail, Telefon, Wohnort,
und Nachricht. Die vier Felder für Bereich, Erfahrung, Verfügbarkeit und
Wochenstunden wurden auf Wunsch entfernt.
Optional können Lebenslauf und weitere Unterlagen als PDF angehängt werden,
jeweils maximal 5 MB, insgesamt maximal 10 MB. Der Browser prüft Dateiendung,
PDF-Signatur und Dateigrösse; bei ausgeschaltetem JavaScript greifen nur
die HTML-Vorgaben und die Prüfungen des Versanddienstes.

Das Formular sendet per HTTPS-POST mit multipart/form-data an
https://formsubmit.co/hello@siyu-restaurant.com. FormSubmit übernimmt die
Weiterleitung an dieses Postfach. Es ist KEIN eigener SMTP-Server enthalten.
Die Standard-Sicherheitsabfrage des Dienstes bleibt aktiviert.
Es wurden keine Testbewerbung und keine Aktivierungsmail durch Codex versendet.
Die tatsächliche E-Mail-Zustellung ist noch NICHT live geprüft.

EINMALIGE AKTIVIERUNG VOR DEM ECHTEN EINSATZ
Eine eigene Testbewerbung über die veröffentlichte Seite absenden. Falls
dieses Formular noch nicht aktiviert ist, erhält hello@siyu-restaurant.com
eine Bestätigungsmail von FormSubmit. Den darin enthaltenen Link anklicken.
Erst danach die E-Mail-Zustellung mit einer eigenen Testbewerbung inklusive
PDFs prüfen, bevor das Formular für echte Bewerbungen genutzt wird.
Dokumentation: https://formsubmit.co/ und https://formsubmit.co/documentation

Die Seite jobs-danke.html zeigt nach der Rückleitung nur die Übermittlung
an den Versanddienst an; sie garantiert keine Zustellung im Postfach.
Der Datenschutzhinweis benennt FormSubmit und die Weitergabe der Unterlagen.
Direkte Bewerbung per E-Mail, Telefon oder Instagram bleibt als Alternative.

Beim Hosting-Umzug den _next-Wert im HTML auf die neue Domain ändern.
Mit JavaScript passt jobs-form.mjs die Rückleitungsadresse automatisch an.
Die FormSubmit-Aktivierung gegebenenfalls für die neue Domain wiederholen.
Die Mobilnavigation und rechtlichen Dialoge funktionieren auch auf Jobs.
Die PDF-Prüfungen, Formularstruktur, lokalen Assets und JavaScript-Syntax
sind geprüft. Eine visuelle Browserprüfung war hier nicht verfügbar.

PERSONALSUCHE-HINWEIS
Der feste Banner wurde entfernt. Nach der Rezensionsleiste steht eine kompakte
Stellenanzeige im normalen Seitenfluss mit Link „Jobs ansehen“.
Neben „Jobs“ zeigt die Navigation auf allen Seiten einen kleinen roten Kreis
mit „1“ rechts oben am Wort. Die Zahl bezeichnet die eine offene Stelle.
Auch im mobilen Menü sitzt die Zahl direkt am Wort, nicht am Bildschirmrand.
Styles: assets/job-notice.css.


GALLERY (14.10.2026)
Neue gallery.html, auf allen Seiten in der Navigation. 33 lokal gespeicherte Originalbilder aus öffentlich verfügbaren Instagram-Beiträgen; vier davon sind Reel-Vorschaubilder mit Links zu den Originalvideos. Fotos/Reels-Filter, native Dialog-Zoomansicht mit Pfeiltasten und Vor/Zurück, responsives Raster. Ohne automatische Synchronisierung oder Instagram-Embed. Ausschlüsse: Urlaub, Personalsuche, Mittagsmenü; der ausgeschlossene Soft-Opening-Aushang ist nicht enthalten. Instagram-Schriftzüge auf den Originalbeiträgen wurden beibehalten. Import enthält die öffentlich verfügbaren Beitragsvorschauen; weitere Bilder innerhalb von Bildserien wurden nicht übernommen, da Instagram die Detailansicht mit einer Anmeldung blockiert. Keine visuelle Browserprüfung der Website möglich; HTML/JS und Asset-Verknüpfungen geprüft.

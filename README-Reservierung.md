# SIYU – Reservierungsanfragen · GitHub-Paket 12.11.2026

Vollständige Website für das vorhandene Repository siyu-sushi/siyu-website. Noch nicht auf GitHub gepusht.

ZIP entpacken, Dateien im Hauptverzeichnis und assets samt Unterordnern übernehmen. CNAME (siyu.at) beibehalten. ZIP selbst nicht als Website hochladen. Danach Änderungen committen und pushen.

Nach dem Veröffentlichen einmal eine echte Anfrage mit eigener E-Mail-Adresse absenden und sowohl den Eingang bei hello@siyu-restaurant.com als auch die automatische Antwort an den Gast prüfen. Eine gegebenenfalls eintreffende Aktivierungs-E-Mail von FormSubmit im SIYU-Postfach bestätigen.

Reservieren-Button neben Bestellen auf allen Seiten. Neues Formular: reservieren.html, Rückmeldeseite: reservierung-danke.html. Gemeinsame Styles: assets/reservation.css; Formularlogik: assets/reservation.js.

Anfragen gehen per FormSubmit an hello@siyu-restaurant.com. Gäste erhalten per _autoresponse eine Zusammenfassung mit Hinweis: erst nach persönlicher Bestätigung verbindlich. CAPTCHA bleibt aktiv, da FormSubmit automatische Antworten bei deaktiviertem CAPTCHA oder AJAX-Versand nicht unterstützt.

Die tatsächliche E-Mail-Zustellung wurde in der Vorschau nicht ausgelöst. FormSubmit kann beim ersten Einsatz eine Aktivierung per E-Mail an SIYU verlangen. Vor dem Live-Einsatz Eingangs- und Gäste-E-Mail prüfen.

Bis 10 Personen; grössere Gruppen bitte telefonisch. Dienstag–Sonntag 11:00–14:00 und 17:00–22:00, Slots im 30-Minuten-Takt (mittags bis 13:30, abends bis 21:30), Montag geschlossen. Vergangene Termine sind nicht wählbar. Zeitzone: Europe/Vienna. Keine automatische Kapazitätsprüfung oder verbindliche Sofortbuchung.

Vorschau auf localhost / 127.0.0.1 oder mit ?preview=1 sendet nie E-Mails. Die einzelne SIYU-Reservierung-Vorschau.html ist vollständig eingebettet und dauerhaft im Demo-Modus.

# SIYU Website – GitHub Pages

Vollständiger Stand vom 07.11.2026. Domain: https://siyu.at/

## Veröffentlichen

1. ZIP vollständig entpacken. Die Dateien liegen direkt im Hauptverzeichnis.
2. Im vorhandenen Repository `siyu-sushi/siyu-website` die entsprechenden Dateien ersetzen; den Ordner `assets` mit allen Unterordnern übernehmen. `CNAME` mit Inhalt `siyu.at` beibehalten.
3. Änderungen prüfen, committen und erst nach Freigabe auf den von GitHub Pages verwendeten Branch pushen. ZIP-Datei selbst nicht als Website hochladen.

Mit einer lokalen Kopie des bestehenden Repositorys:

```sh
git status
git add index.html gallery.html jobs.html jobs-danke.html favicon.ico assets README.md
git diff --cached --stat
git commit -m "Update menu photos, descriptions, favicon and review snapshot"
# Erst nach Freigabe:
git push origin main
```

## Enthaltene Änderungen

- Gemüsebox: Gemüsereis oder Gemüsenudeln, ohne Naturreis und ohne Aufpreis.
- Gegrilltes Hähnchen untergemischt; Lemongrass Chicken nach Referenz mit geschnittenen Zitronenblättern.
- Poke Bowls mit Tomaten in allen Beschreibungen und passenden Bildern.
- Kamo Futo Maki als Inside-out-Rolle; Ebi Sushi Set mit Bild.
- Tatsächliches SIYU-Logo als Favicon. Google entscheidet nach erneutem Crawlen über die Anzeige in Suchergebnissen.
- Google-Rezensionen als feste Auswahl: fünf öffentlich abrufbare Rezensionen, Gesamtstand 4,9/5 bei 44 Bewertungen am 07.11.2026. Lange Texte sind Auszüge mit Link zum Original. Keine automatische Synchronisierung.
- Bestehendes Layout, mobile Darstellung, Bildzoom, Jobs-Formular, Cookie-Auswahl und Gallery bleiben erhalten.

Keine API-Schlüssel und kein zusätzliches Backend nötig. Das vorhandene Bewerbungsformular verwendet unverändert FormSubmit.

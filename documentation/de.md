<!-- ELUCENIA technical documentation · euroscore-ii · de · no clinical/professional/rights approval -->

# EuroSCORE II

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/euroscore-ii)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

Jahre · Bereich: 18–100

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### Nierenfunktion (Kreatinin-Clearance, Cockcroft-Gault)

`renal`

- `0` — Normal (\> 85 mL/min)
- `1` — Mäßig vermindert (50 \< Clearance ≤ 85 mL/min)
- `2` — Stark vermindert (Clearance ≤ 50 mL/min)
- `3` — Dialyse (bei jeder Clearance)

### Extrakardiale Arteriopathie (Claudicatio, Karotisstenose ≥ 50 %, Amputation, Aorten-/periphere Gefäßoperation)

`arteriopatia`

### Stark eingeschränkte Mobilität (muskuloskelettale oder neurologische Erkrankung)

`mobilidade`

### Frühere Herzoperation mit Eröffnung des Perikards

`cir_prev`

### Chronische Lungenerkrankung (langfristige Bronchodilatator- oder Kortikosteroideinnahme)

`pulmonar`

### Aktive Endokarditis (noch unter Antibiotikatherapie)

`endocardite`

### Kritischer präoperativer Zustand (VT/VF, Herzmassage, Beatmung, Inotropika, IABP oder oligurisches akutes Nierenversagen)

`critico`

### Insulinbehandelter Diabetes

`insulina`

### NYHA-Funktionsklasse

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### CCS-Klasse-4-Angina (Ruheangina)

`ccs4`

### Linksventrikuläre Funktion (Ejektionsfraktion)

`fe`

- `0` — Gut (\> 50 %)
- `1` — Mäßig (31 bis 50 %)
- `2` — Schlecht (21 bis 30 %)
- `3` — Sehr schlecht (≤ 20 %)

### Kürzlicher Myokardinfarkt (≤ 90 Tage)

`iam`

### Systolischer Pulmonalarteriendruck

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 bis 55 mmHg
- `2` — \> 55 mmHg

### Dringlichkeit der Operation

`urgencia`

- `0` — Elektiv
- `1` — Dringlich (Entlassung ohne Operation nicht möglich)
- `2` — Notfall (vor dem nächsten Werktag)
- `3` — Ultima Ratio (Reanimation auf dem Weg zum Operationssaal)

### Komplexität des Eingriffs

`proc`

- `0` — Isolierte koronare Revaskularisation
- `1` — 1 Eingriff außer Revaskularisation
- `2` — 2 Eingriffe
- `3` — 3 oder mehr Eingriffe

### Operation der thorakalen Aorta

`aorta`

## Fassung der Methode

EuroSCORE II/Nashef 2012: logistisch, Achsenabschnitt −5,324537, Originalkoeffizienten; ohne EuroSCORE I

## Dokumentierte Formel

Sterblichkeit = ey / (1 + ey), mit y = −5,324537 + Σ βᵢ·xᵢ.

Koeffizienten (Nashef 2012): Alter 0,0285181 pro Jahr (x = 1 bis 60 Jahre und +1 pro Jahr über 60); weibliches Geschlecht 0,2196434; Clearance \> 50 und ≤ 85 mL/min: 0,303553; Clearance ≤ 50 mL/min: 0,8592256; Dialyse: 0,6421508; Arteriopathie 0,5360268; eingeschränkte Mobilität 0,2407181; frühere Herzoperation 1,118599; chronische Lungenerkrankung 0,1886564; aktive Endokarditis 0,6194522; kritischer Zustand 1,086517; insulinbehandelter Diabetes 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; EF 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; kürzlicher Infarkt 0,1528943; sPAP 31–55 0,1788899, \> 55 0,3491475; dringlich 0,3174673, Notfall 0,7039121, Rettungseingriff 1,362947; 1 Eingriff ohne Revaskularisation 0,0062118, 2 Eingriffe 0,5521478, ≥ 3 0,9724533; thorakale Aorta 0,6527205.

## Grenzen und Population

EuroSCORE II wurde für Tod im ursprünglichen Krankenhaus nach großer Herzoperation mit Datenerhebung 2010 entwickelt. Er ist nicht EuroSCORE I und ersetzt keine Kalibrierung in der heutigen Population oder Einrichtung. Faktorendefinitionen, Eignung und Zeithorizont müssen zum Modell passen; die Wahrscheinlichkeit garantiert kein individuelles Ergebnis.

## Referenzen

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

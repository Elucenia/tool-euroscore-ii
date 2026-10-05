<!-- ELUCENIA technical documentation · euroscore-ii · it · no clinical/professional/rights approval -->

# EuroSCORE II

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/euroscore-ii)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

anni · intervallo: 18–100

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Funzione renale (clearance della creatinina, Cockcroft-Gault)

`renal`

- `0` — Normale (\> 85 mL/min)
- `1` — Moderatamente ridotta (50 \< clearance ≤ 85 mL/min)
- `2` — Gravemente ridotta (clearance ≤ 50 mL/min)
- `3` — Dialisi (qualsiasi clearance)

### Arteriopatia extracardiaca (claudicazione, stenosi carotidea ≥ 50%, amputazione, chirurgia aortica/periferica)

`arteriopatia`

### Mobilità molto ridotta (malattia muscoloscheletrica o neurologica)

`mobilidade`

### Pregresso intervento cardiaco con apertura del pericardio

`cir_prev`

### Malattia polmonare cronica (uso prolungato di broncodilatatore o corticosteroide)

`pulmonar`

### Endocardite attiva (ancora in terapia antibiotica)

`endocardite`

### Stato preoperatorio critico (TV/FV, massaggio cardiaco, ventilazione meccanica, inotropi, contropulsatore aortico o danno renale acuto oligurico)

`critico`

### Diabete trattato con insulina

`insulina`

### Classe funzionale NYHA

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Angina CCS classe 4 (angina a riposo)

`ccs4`

### Funzione ventricolare sinistra (frazione di eiezione)

`fe`

- `0` — Buona (\> 50%)
- `1` — Moderata (dal 31 al 50%)
- `2` — Scarsa (dal 21 al 30%)
- `3` — Molto scarsa (≤ 20%)

### Infarto miocardico recente (≤ 90 giorni)

`iam`

### Pressione sistolica dell’arteria polmonare

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 a 55 mmHg
- `2` — \> 55 mmHg

### Urgenza dell’intervento

`urgencia`

- `0` — Elettiva
- `1` — Urgente (non può essere dimesso senza intervento)
- `2` — Emergenza (prima del prossimo giorno lavorativo)
- `3` — Salvataggio (RCP durante il trasferimento in sala operatoria)

### Complessità dell’intervento

`proc`

- `0` — Rivascolarizzazione coronarica isolata
- `1` — 1 procedura diversa dalla rivascolarizzazione
- `2` — 2 procedure
- `3` — 3 o più procedure

### Chirurgia dell’aorta toracica

`aorta`

## Edizione del metodo

EuroSCORE II/Nashef 2012: logistico, intercetta −5,324537, coefficienti originali; senza EuroSCORE I

## Formula documentata

Mortalità = ey / (1 + ey), con y = −5,324537 + Σ βᵢ·xᵢ.

Coefficienti (Nashef 2012): età 0,0285181 per anno (x = 1 fino a 60 anni e +1 per anno oltre 60); sesso femminile 0,2196434; clearance \> 50 e ≤ 85 mL/min: 0,303553; clearance ≤ 50 mL/min: 0,8592256; dialisi: 0,6421508; arteriopatia 0,5360268; mobilità ridotta 0,2407181; pregressa cardiochirurgia 1,118599; pneumopatia cronica 0,1886564; endocardite attiva 0,6194522; stato critico 1,086517; diabete con insulina 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; FE 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; infarto recente 0,1528943; PAPs 31–55 0,1788899, \> 55 0,3491475; urgente 0,3174673, emergenza 0,7039121, salvataggio 1,362947; 1 procedura non di rivascolarizzazione 0,0062118, 2 procedure 0,5521478, ≥ 3 0,9724533; aorta toracica 0,6527205.

## Limiti e popolazione

L’EuroSCORE II è stato sviluppato per la morte nell’ospedale di origine dopo chirurgia cardiaca maggiore, con raccolta dei dati nel 2010. Non è l’EuroSCORE I e non sostituisce la calibrazione nella popolazione o nel centro attuali. Definizioni dei fattori, ammissibilità e orizzonte temporale devono corrispondere al modello; la probabilità non assicura un esito individuale.

## Riferimenti

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

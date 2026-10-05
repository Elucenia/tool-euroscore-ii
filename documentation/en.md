<!-- ELUCENIA technical documentation · euroscore-ii · en · no clinical/professional/rights approval -->

# EuroSCORE II

[conditions, sources and permissions](https://elucenia.org/en/tools/euroscore-ii)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

years · range: 18–100

### Sex

`sexo`

- `F` — Female
- `M` — Male

### Kidney function (creatinine clearance, Cockcroft-Gault)

`renal`

- `0` — Normal (\> 85 mL/min)
- `1` — Moderately reduced (50 \< clearance ≤ 85 mL/min)
- `2` — Severely reduced (clearance ≤ 50 mL/min)
- `3` — Dialysis (any clearance)

### Extracardiac arteriopathy (claudication, carotid stenosis ≥ 50%, amputation, aortic/peripheral surgery)

`arteriopatia`

### Severely reduced mobility (musculoskeletal or neurological disease)

`mobilidade`

### Previous cardiac surgery involving opening of the pericardium

`cir_prev`

### Chronic lung disease (long-term bronchodilator or corticosteroid use)

`pulmonar`

### Active endocarditis (still receiving antibiotics)

`endocardite`

### Critical preoperative state (VT/VF, cardiac massage, mechanical ventilation, inotropes, IABP or oliguric acute kidney injury)

`critico`

### Insulin-treated diabetes

`insulina`

### NYHA functional class

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### CCS class 4 angina (angina at rest)

`ccs4`

### Left ventricular function (ejection fraction)

`fe`

- `0` — Good (\> 50%)
- `1` — Moderate (31% to 50%)
- `2` — Poor (21% to 30%)
- `3` — Very poor (≤ 20%)

### Recent myocardial infarction (≤ 90 days)

`iam`

### Pulmonary artery systolic pressure

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 to 55 mmHg
- `2` — \> 55 mmHg

### Urgency of operation

`urgencia`

- `0` — Elective
- `1` — Urgent (cannot be discharged without surgery)
- `2` — Emergency (before the next working day)
- `3` — Salvage (CPR en route to the operating room)

### Intervention complexity

`proc`

- `0` — Isolated coronary revascularization
- `1` — 1 procedure other than revascularization
- `2` — 2 procedures
- `3` — 3 or more procedures

### Thoracic aortic surgery

`aorta`

## Method edition

EuroSCORE II/Nashef 2012: logistic, intercept −5.324537, original coefficients; excludes EuroSCORE I

## Documented formula

Mortality = ey / (1 + ey), with y = −5.324537 + Σ βᵢ·xᵢ.

Coefficients (Nashef 2012): age 0.0285181 per year (x = 1 up to 60 years and +1 per year above 60); female sex 0.2196434; clearance \> 50 and ≤ 85 mL/min: 0.303553; clearance ≤ 50 mL/min: 0.8592256; dialysis: 0.6421508; arteriopathy 0.5360268; reduced mobility 0.2407181; previous cardiac surgery 1.118599; chronic lung disease 0.1886564; active endocarditis 0.6194522; critical state 1.086517; insulin-treated diabetes 0.3542749; NYHA II 0.1070545, III 0.2958358, IV 0.5597929; CCS 4 0.2226147; EF 31–50% 0.3150652, 21–30% 0.8084096, ≤ 20% 0.9346919; recent MI 0.1528943; sPAP 31–55 0.1788899, \> 55 0.3491475; urgent 0.3174673, emergency 0.7039121, salvage 1.362947; 1 non-revascularization procedure 0.0062118, 2 procedures 0.5521478, ≥ 3 0.9724533; thoracic aorta 0.6527205.

## Limits and population

EuroSCORE II was developed for death in the original hospital after major cardiac surgery, with data collected in 2010. It is not EuroSCORE I and does not replace calibration in the current population or institution. Factor definitions, eligibility and time horizon must match the model; the probability does not ensure an individual outcome.

## References

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

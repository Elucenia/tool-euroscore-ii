<!-- ELUCENIA technical documentation · euroscore-ii · es · no clinical/professional/rights approval -->

# EuroSCORE II

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/euroscore-ii)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

años · intervalo: 18–100

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Función renal (aclaramiento de creatinina, Cockcroft-Gault)

`renal`

- `0` — Normal (\> 85 mL/min)
- `1` — Moderadamente reducida (50 \< aclaramiento ≤ 85 mL/min)
- `2` — Gravemente reducida (aclaramiento ≤ 50 mL/min)
- `3` — Diálisis (cualquier aclaramiento)

### Arteriopatía extracardíaca (claudicación, estenosis carotídea ≥ 50%, amputación, cirugía aórtica/periférica)

`arteriopatia`

### Movilidad muy reducida (enfermedad musculoesquelética o neurológica)

`mobilidade`

### Cirugía cardíaca previa con apertura del pericardio

`cir_prev`

### Enfermedad pulmonar crónica (uso prolongado de broncodilatador o corticoide)

`pulmonar`

### Endocarditis activa (aún con antibioterapia)

`endocardite`

### Estado preoperatorio crítico (TV/FV, masaje cardíaco, ventilación mecánica, inotrópicos, balón intraaórtico o lesión renal aguda oligúrica)

`critico`

### Diabetes tratada con insulina

`insulina`

### Clase funcional NYHA

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Angina CCS clase 4 (angina en reposo)

`ccs4`

### Función ventricular izquierda (fracción de eyección)

`fe`

- `0` — Buena (\> 50%)
- `1` — Moderada (31 a 50%)
- `2` — Mala (21 a 30%)
- `3` — Muy mala (≤ 20%)

### Infarto de miocardio reciente (≤ 90 días)

`iam`

### Presión sistólica de la arteria pulmonar

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 a 55 mmHg
- `2` — \> 55 mmHg

### Urgencia de la operación

`urgencia`

- `0` — Electiva
- `1` — Urgente (no puede recibir el alta sin operar)
- `2` — Emergencia (antes del siguiente día laborable)
- `3` — Salvamento (RCP de camino al quirófano)

### Complejidad de la intervención

`proc`

- `0` — Revascularización coronaria aislada
- `1` — 1 procedimiento que no es revascularización
- `2` — 2 procedimientos
- `3` — 3 o más procedimientos

### Cirugía de la aorta torácica

`aorta`

## Edición del método

EuroSCORE II/Nashef 2012: logístico, intercepto −5,324537, coeficientes originales; no EuroSCORE I

## Fórmula documentada

Mortalidad = ey / (1 + ey), con y = −5,324537 + Σ βᵢ·xᵢ.

Coeficientes (Nashef 2012): edad 0,0285181 por año (x = 1 hasta 60 años y +1 por año por encima de 60); sexo femenino 0,2196434; aclaramiento \> 50 y ≤ 85 mL/min: 0,303553; aclaramiento ≤ 50 mL/min: 0,8592256; diálisis: 0,6421508; arteriopatía 0,5360268; movilidad reducida 0,2407181; cirugía cardíaca previa 1,118599; enfermedad pulmonar crónica 0,1886564; endocarditis activa 0,6194522; estado crítico 1,086517; diabetes con insulina 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; FE 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; infarto reciente 0,1528943; PSAP 31–55 0,1788899, \> 55 0,3491475; urgente 0,3174673, emergencia 0,7039121, rescate 1,362947; 1 procedimiento sin revascularización 0,0062118, 2 procedimientos 0,5521478, ≥ 3 0,9724533; aorta torácica 0,6527205.

## Límites y población

El EuroSCORE II se desarrolló para muerte en el hospital de origen tras cirugía cardíaca mayor, con recogida de datos en 2010. No es el EuroSCORE I y no sustituye la calibración en la población o el centro actuales. Las definiciones de los factores, la elegibilidad y el horizonte temporal deben corresponder al modelo; la probabilidad no asegura un resultado individual.

## Referencias

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

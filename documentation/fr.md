<!-- ELUCENIA technical documentation · euroscore-ii · fr · no clinical/professional/rights approval -->

# EuroSCORE II

[conditions, sources et autorisations](https://elucenia.org/fr/outils/euroscore-ii)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

ans · intervalle: 18–100

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Fonction rénale (clairance de la créatinine, Cockcroft-Gault)

`renal`

- `0` — Normale (\> 85 mL/min)
- `1` — Modérément réduite (50 \< clairance ≤ 85 mL/min)
- `2` — Sévèrement réduite (clairance ≤ 50 mL/min)
- `3` — Dialyse (quelle que soit la clairance)

### Artériopathie extracardiaque (claudication, sténose carotidienne ≥ 50 %, amputation, chirurgie aortique/périphérique)

`arteriopatia`

### Mobilité très réduite (maladie musculosquelettique ou neurologique)

`mobilidade`

### Chirurgie cardiaque antérieure avec ouverture du péricarde

`cir_prev`

### Maladie pulmonaire chronique (bronchodilatateur ou corticoïde au long cours)

`pulmonar`

### Endocardite active (antibiothérapie en cours)

`endocardite`

### État préopératoire critique (TV/FV, massage cardiaque, ventilation mécanique, inotropes, ballon intra-aortique ou insuffisance rénale aiguë oligurique)

`critico`

### Diabète traité par insuline

`insulina`

### Classe fonctionnelle NYHA

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Angor de classe CCS 4 (angor au repos)

`ccs4`

### Fonction ventriculaire gauche (fraction d’éjection)

`fe`

- `0` — Bonne (\> 50 %)
- `1` — Modérée (31 à 50 %)
- `2` — Mauvaise (21 à 30 %)
- `3` — Très altérée (≤ 20 %)

### Infarctus du myocarde récent (≤ 90 jours)

`iam`

### Pression artérielle pulmonaire systolique

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 à 55 mmHg
- `2` — \> 55 mmHg

### Urgence de l’intervention

`urgencia`

- `0` — Programmée
- `1` — Urgente (sortie impossible sans opération)
- `2` — En urgence (avant le prochain jour ouvrable)
- `3` — Sauvetage (RCP en route vers le bloc opératoire)

### Complexité de l’intervention

`proc`

- `0` — Revascularisation coronaire isolée
- `1` — 1 intervention autre qu’une revascularisation
- `2` — 2 procédures
- `3` — 3 procédures ou plus

### Chirurgie de l’aorte thoracique

`aorta`

## Édition de la méthode

EuroSCORE II/Nashef 2012 : logistique, constante −5,324537, coefficients originaux ; sans EuroSCORE I

## Formule documentée

Mortalité = ey / (1 + ey), avec y = −5,324537 + Σ βᵢ·xᵢ.

Coefficients (Nashef 2012): âge 0,0285181 par an (x = 1 jusqu’à 60 ans et +1 par an au-delà de 60); sexe féminin 0,2196434; clairance \> 50 et ≤ 85 mL/min : 0,303553 ; clairance ≤ 50 mL/min : 0,8592256 ; dialyse : 0,6421508; artériopathie 0,5360268; mobilité réduite 0,2407181; chirurgie cardiaque antérieure 1,118599; maladie pulmonaire chronique 0,1886564; endocardite active 0,6194522; état critique 1,086517; diabète sous insuline 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; FE 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; infarctus récent 0,1528943; PAPs 31–55 0,1788899, \> 55 0,3491475; urgent 0,3174673, urgence immédiate 0,7039121, sauvetage 1,362947; 1 procédure hors revascularisation 0,0062118, 2 procédures 0,5521478, ≥ 3 0,9724533; aorte thoracique 0,6527205.

## Limites et population

L’EuroSCORE II a été développé pour le décès dans l’hôpital d’origine après une chirurgie cardiaque majeure, avec un recueil en 2010. Ce n’est pas l’EuroSCORE I et il ne remplace pas le recalibrage dans la population ou le service actuels. Les définitions des facteurs, l’éligibilité et l’horizon temporel doivent correspondre au modèle ; la probabilité ne garantit pas un résultat individuel.

## Références

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

<!-- ELUCENIA technical documentation · euroscore-ii · pt-BR · no clinical/professional/rights approval -->

# EuroSCORE II

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/euroscore-ii)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

anos · intervalo: 18–100

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Função renal (clearance de creatinina, Cockcroft-Gault)

`renal`

- `0` — Normal (\> 85 mL/min)
- `1` — Moderadamente reduzida (50 \< clearance ≤ 85 mL/min)
- `2` — Gravemente reduzida (clearance ≤ 50 mL/min)
- `3` — Diálise (qualquer clearance)

### Arteriopatia extracardíaca (claudicação, carótida ≥ 50%, amputação, cirurgia aórtica/periférica)

`arteriopatia`

### Mobilidade muito reduzida (doença musculoesquelética ou neurológica)

`mobilidade`

### Cirurgia cardíaca prévia com abertura do pericárdio

`cir_prev`

### Doença pulmonar crônica (uso prolongado de broncodilatador ou corticoide)

`pulmonar`

### Endocardite ativa (ainda em antibioticoterapia)

`endocardite`

### Estado pré-operatório crítico (TV/FV, massagem, VM, inotrópico, BIA ou IRA oligúrica)

`critico`

### Diabetes em uso de insulina

`insulina`

### Classe funcional NYHA

`nyha`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Angina CCS classe 4 (angina em repouso)

`ccs4`

### Função do VE (fração de ejeção)

`fe`

- `0` — Boa (\> 50%)
- `1` — Moderada (31 a 50%)
- `2` — Ruim (21 a 30%)
- `3` — Muito ruim (≤ 20%)

### IAM recente (≤ 90 dias)

`iam`

### Pressão sistólica da artéria pulmonar

`hp`

- `0` — ≤ 30 mmHg
- `1` — 31 a 55 mmHg
- `2` — \> 55 mmHg

### Urgência da operação

`urgencia`

- `0` — Eletiva
- `1` — Urgente (não pode ter alta sem operar)
- `2` — Emergência (antes do próximo dia útil)
- `3` — Salvamento (RCP a caminho do centro cirúrgico)

### Peso da intervenção

`proc`

- `0` — Revascularização isolada
- `1` — 1 procedimento que não é revascularização
- `2` — 2 procedimentos
- `3` — 3 ou mais procedimentos

### Cirurgia da aorta torácica

`aorta`

## Edição do método

Euro SCOREII/Nashef 2012:logístico, intercepto−5,324537, coeficientes originais; sem Euro SCOREI

## Fórmula documentada

Mortalidade = ey / (1 + ey), com y = −5,324537 + Σ βᵢ·xᵢ.

Coeficientes (Nashef 2012): idade 0,0285181 por ano (x = 1 até 60 anos e +1 por ano acima de 60); sexo feminino 0,2196434; clearance \> 50 e ≤ 85 mL/min: 0,303553; clearance ≤ 50 mL/min: 0,8592256; diálise: 0,6421508; arteriopatia 0,5360268; mobilidade reduzida 0,2407181; cirurgia cardíaca prévia 1,118599; doença pulmonar crônica 0,1886564; endocardite ativa 0,6194522; estado crítico 1,086517; diabetes com insulina 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; FE 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; IAM recente 0,1528943; PSAP 31–55 0,1788899, \> 55 0,3491475; urgente 0,3174673, emergência 0,7039121, salvamento 1,362947; 1 procedimento não revascularização 0,0062118, 2 procedimentos 0,5521478, ≥ 3 0,9724533; aorta torácica 0,6527205.

## Limites e população

O EuroSCORE II foi desenvolvido para morte no hospital de origem após cirurgia cardíaca de grande porte, com coleta em 2010. Não é o EuroSCORE I e não substitui a calibração na população ou serviço atuais. Definições dos fatores, elegibilidade e horizonte temporal devem corresponder ao modelo; a probabilidade não assegura um resultado individual.

## Referências

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)

- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

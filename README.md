# EuroSCORE II

Identificador: `euroscore-ii`. Pacote independente da plataforma Elucenia, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 4 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **pendente**.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Mortalidade = ey / (1 + ey), com y = −5,324537 + Σ βᵢ·xᵢ.Coeficientes (Nashef 2012): idade 0,0285181 por ano (x = 1 até 60 anos e +1 por ano acima de 60); sexo feminino 0,2196434; clearance 50–85 0,303553, < 50 0,8592256, diálise 0,6421508; arteriopatia 0,5360268; mobilidade reduzida 0,2407181; cirurgia cardíaca prévia 1,118599; doença pulmonar crônica 0,1886564; endocardite ativa 0,6194522; estado crítico 1,086517; diabetes com insulina 0,3542749; NYHA II 0,1070545, III 0,2958358, IV 0,5597929; CCS 4 0,2226147; FE 31–50% 0,3150652, 21–30% 0,8084096, ≤ 20% 0,9346919; IAM recente 0,1528943; PSAP 31–55 0,1788899, > 55 0,3491475; urgente 0,3174673, emergência 0,7039121, salvamento 1,362947; 1 procedimento não revascularização 0,0062118, 2 procedimentos 0,5521478, ≥ 3 0,9724533; aorta torácica 0,6527205.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Estima a mortalidade hospitalar de adultos submetidos a cirurgia cardíaca (revascularização, valvas, aorta torácica) a partir de 18 fatores do paciente, do coração e da operação.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Nashef SAM et al. EuroSCORE II. Eur J Cardiothorac Surg, 2012.](https://doi.org/10.1093/ejcts/ezs043)
- [Vahanian A et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J, 2022.](https://doi.org/10.1093/eurheartj/ehab395)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **Elucenia**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.

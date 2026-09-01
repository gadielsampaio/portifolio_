# Portfólio — Marcos Gadiel Sampaio

Site estático em português. Abra `index.html` no navegador. Não é necessário instalar dependências ou executar um build.

## Arquivos

- `index.html`: apresentação, projetos, experiência, competências, sobre e contatos.
- `projetos/revak.html`: escopo e implementação do Revak.
- `projetos/agrogb.html`: atuação na plataforma agrícola.
- `projetos/telemetria.html`: painel de telemetria de frota.
- `assets/styles.css`: identidade blueprint, estilos compartilhados e regras para celular, movimento reduzido e impressão.
- `assets/motion.js`: entradas discretas ao rolar e animação da linha da experiência; conteúdo e navegação independem do script.
- `assets/retrato.png`: arquivo do retrato original, exibido em tamanho amplo com o fade em CSS usado na direção visual original.
- `assets/marcos-gadiel-curriculo.pdf`: currículo fornecido, sem alteração.
- `assets/favicon.svg`: marca simples para a aba do navegador.
- `assets/space-grotesk-*.woff`: dois pesos da fonte já usada no portfólio original, agora carregados localmente; licença em `assets/OFL-Space-Grotesk.txt`.

## Executar por HTTP

Opcionalmente, dentro desta pasta:

```sh
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`. As páginas também funcionam por `file://`.

## Publicação

Envie o conteúdo desta pasta para uma hospedagem estática. Mantenha a relação entre `index.html`, `assets/` e `projetos/`. Os links relativos permitem hospedar na raiz ou em um subdiretório. Não há formulário, backend, coleta de dados ou integração com serviços externos no funcionamento do site.

Antes de substituir arquivos do repositório existente, faça uma cópia ou um commit do estado atual: o ZIP recebido já continha alterações locais no HTML e um retrato ainda não rastreado pelo Git. A entrega foi criada separadamente para preservá-las.

Cada página tem título, descrição, idioma, um H1, hierarquia de títulos e metadados Open Graph. URLs canônicas, `og:url` e imagem social com URL absoluta dependem do endereço final de publicação e devem ser acrescentadas quando ele estiver definido. Não foi presumido um domínio.

## Conteúdo

Os fatos profissionais seguem o currículo enviado. O status “em desenvolvimento” do Revak já estava no portfólio original. Os links de projeto levam a resumos locais do escopo; não são links de demonstração dos produtos. LinkedIn e GitHub apontam aos perfis informados no currículo.

Os anexos `diagnostico-e-direcao.md`, `copy-final.md` e `verificacao.md`, na pasta externa de entrega, descrevem as decisões, o texto aplicado e a verificação realizada.

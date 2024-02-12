User

# Art Generator

Gerador de Imagens para a OPTIMUS Jr., disponível neste [artigo](https://wiki.optimusjr.com.br/pt-br/Art_Generator) da WikOPTIMUS.

O projeto “Art Generator” é uma aplicação web simples que utiliza o framework Preact para criar interfaces de usuário e o Vite como ferramenta de desenvolvimento. No final ele gera um arquivo .js executado na página da wiki, renderizando toda a interface.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando (Tendo o PNPM e o Node.js instalado):

```bash
pnpm install
```

## Execução em modo de desenvolvimento

Para fazer modificações, corrigir bugs, adicionar novas imagens e etc você provavelmente vai querer iniciar o projeto em modo de desenvolvimento. Para isso execute o seguinte comando:

```bash
pnpm dev
```

Este comando iniciará um servidor de desenvolvimento local, que permitirá visualizar e testar o Art Generator enquanto ele é desenvolvido.

## Publicar uma nova versão

Quando você estiver satisfeito com uma nova versão, execute o comando:

```bash
pnpm build
```

Ele vai gerar uma pasta `/dist` na raiz do projeto. Dentro dela, e dentro de `assets` vc vai encontrar um arquivo `index-(código alfanumérico).js`, sendo que o código muda a cada versão do projeto. Mova esse arquivo para a raiz e exclua o `index-(código alfanumérico).js` antigo.

Dito isso, faça um commit e publique as alterações no github. Por fim vá à página da wiki [Art Generator](https://wiki.optimusjr.com.br/pt-br/Art_Generator), clique em editar a página>página>scripts e lá vc vai encontrar algo parecido com isso:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/optimusjr/artGenerator/index-(código alfanumérico).js"
  defer
></script>
```

Substitua o código alfanumérico antigo pelo novo. Com isso a nova versão deve ir ao ar com
sucesso.

# Aula 7 - Como instalar e utilizar o TypeScript
Se preferir instalar globalmente o TypeScript, apenas faça o seguinte comando pelo terminal do npm:
```npm
npm install -g typescript
```

Porém, uma boa prática é utilizá-lo individualmente por projeto, em formato de desenvolvimento.
```npm
npm install --save-dev typescript
```

Após desenvolver um determinado código em typescript, você utiliza o seguinte comando no terminal, para que o código seja compilado para javascript:
```npm
tsc <nome_do_arquivo.ts>
```

**Nota:** O código ao ser compilado em javascript, é lido pelo navegador na versão do ES3, para evitar problemas em certos navegadores que não suportem suas funcionalidades!

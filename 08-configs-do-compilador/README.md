# Aula 8 - Configurações do compilador TypeScript
Na aula passada, executamos um compilador do typescript normalmente, sem utilizar algum arquivo de configuração, oque será diferente na aula de hoje.

Para trabalhar com as configurações do compilador, você deve criar um arquivo com o nome "*tsconfig.json*"

Exemplos de configurações:
```json
{
    "compilerOptions": {
        "outFile": "main.js", // modifica o nome do arquivo de saída
        "target": "ESNext", // Versão compilada de javascript
    }
}
```

Caso você queira trabalhar com configurações já pré-definidas da linguagem, você pode utilizar o seguinte comando no terminal:

```npm
npx tsc --init
```
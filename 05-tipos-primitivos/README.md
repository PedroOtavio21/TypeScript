# Aula 5 - Tipos primitivos
Assim como no JavaScript, os tipos primitivos são os mais básicos e mais utilizados

São aqueles que você normalmente obtém utilizando o operador **typeof**

Existem três mais utilizados:

## boolean
Os valores que equivalem a **true** ou **false**
``` ts
let example: boolean = true
```

## number
Como o JavaScript não diferencia inteiros e pontos flutuantes, tudo é apenas considerado como number também no TypeScript
```ts
let example: number = 10
```

## string
Valores de texto, como Hello, World!

``` ts
let example: string:
``` 

Além disso, temos também o **Array**, que representa as lista de dados
- A sintaxe básica para especificar um array é utilizando o tipo de seus elementos. Por exemplo: **string[]** ou **number[]**
```ts
let example1: number[] = [1,2,3,4]

let example2: Array<number> = [1,2,3,4]
```

- Idealmente, usamos arrays como sendo uma lista onde todos os elementos têm o **mesmo tipo**, mas esse comportamento também pode ser evitado. 
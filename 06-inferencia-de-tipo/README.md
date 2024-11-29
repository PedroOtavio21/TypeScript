# Aula 6 - Inferência de tipo
Maneira na qual a linguagem em conjunto da IDE conseguem identificar o tipo da variávrl que está sendo usada no bloco de código, sem que esteja sendo referenciado o seu tipo.

```ts
// Ao passar o mouse acime do nome do objeto, a IDE identificou o tipos das propriedades do objeto, sem que fosse necessáriamente explícito no código
const spaceship = {
    name: 'X-Wing',
    speed: 0
}
```

Outra coisa interessante, é que mesmo se você utilizar um código em um arquivo de extensão JavaScript, a IDE consegue identificar o tipo das variáveis, mesmo sem deixar explícito como no TypeScript
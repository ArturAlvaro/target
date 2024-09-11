# Processo de Seleção para Desenvolvedor Back-End - Target

1) Observe o trecho de código:

>- int INDICE = 12, SOMA = 0, K = 1;
>
>- enquanto K < INDICE faça
>
>- { K = K + 1; SOMA = SOMA + K;}
>
>- imprimir(SOMA);
>
>- Ao final do processamento, qual será o valor da variável SOMA?
><p>R) O valor de SOMA é 77.</p>

<br>
2) Descubra a lógica e complete o próximo elemento:

><p>a) 1, 3, 5, 7, ___</p>
><p>R) 9, intervalo de 2 números</p>
>
><p>b) 2, 4, 8, 16, 32, 64, ____</p>
><p>R) 128, seguindo a lógica de somar o número atual com ele mesmo</p>
>
><p>c) 0, 1, 4, 9, 16, 25, 36, ____</p>
><p>R) 49, pois é uma progressão de números pares e o próximo seria 13</p>
>
><p>d) 4, 16, 36, 64, ____</p>
><p>R) 100, trata-se de um número elevado por ele mesmo, no caso número par. Começando por 2 e indo até 10.</p>
>
><p>e) 1, 1, 2, 3, 5, 8, ____</p>
><p>R) 13, trata-se da sequência fibonacci</p>
>
><p>f) 2,10, 12, 16, 17, 18, 19, ____</p>
><p>R) 20, parece estar focado em números de 10 a 19 e o número 2 parece isolado na lógica.</p>

<br>
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:
<br>
<br>

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

>a) Considerar o vetor já carregado com as informações de valor de faturamento.
>
>b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.
>
>c) Utilize o algoritmo mais veloz que puder definir.

<br>
4) Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:
<br>

- Um cliente pode ter um número ilimitado de telefones;
- Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
- A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;
<br>

Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

- Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
- Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
- Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

<br>
5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

- a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
- b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
- c) Explique como chegou no resultado.

<br>
>R) A questão quer saber quem estará mais próximo da cidade de Ribeirão Preto quando ambos os veículos se cruzarem e não leva em consideração o tempo que demoram, sendo assim a resposta é que quando se cruzarem o carro estará mais próximo.

A soma das distâncias é 125km, usando a fórmula temos:
distanciaDoCarro = velocidadeCarro / velocidadeCarro + velocidadeCaminhao x distancia<br>
distanciaCarro = 90 / 90 + 80 x 125 = 66,18 km<br>

distanciaCaminhao = velocidadeCaminhao / velocidadeCarro + velocidadeCaminhao x distancia<br>
distanciaCaminhao = 80 / 90 + 80 x 125 = 58,82 km <br>

Sendo assim, quando se encontrarem, o carro estará mais próximo da cidade de Ribeirão Preto.

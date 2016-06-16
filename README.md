# Módulo Web Scrap para produtos Americanas

[![npm](https://img.shields.io/npm/v/scrap-americanas.svg)](https://www.npmjs.com/package/scrap-americanas)
[![npm](https://img.shields.io/npm/dm/scrap-americanas.svg)](https://www.npmjs.com/package/scrap-americanas)

O **scrap-americanas** é um módulo para consulta de informações de produtos do Americanas.

O módulo faz a consulta via get no site Americanas pela URL e retorna as informações de: Nome, Preço, Imagem e ProdutoId.

**npm install scrap-americanas --save**

## Exemplo prático product

```js

var ascrap = require('scrap-americanas');
var url = 'http://www.americanas.com.br/produto/113388742/aquecedor-halogenico-oscilante-cadence-comodita-aqc300-com-alca-para-transporte';

ascrap.product(url).then(function(product) {
	console.log(product);
}, function(err){
	console.log(err);
});
```

### Objeto de Retorno

```js
{
	productId: '113388742',
  title: 'Aquecedor Halogênico Oscilante Cadence Comodità AQC300 com Alça para Transporte',
  price: '124.9000015258789',
  image: 'http://imagens.americanas.com.br/produtos/01/00/item/113388/7/113388742SZ.jpg'
}
```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```

## Exemplo prático listProducts

```js

var ascrap = require('scrap-americanas');
var urls = [
	'http://www.americanas.com.br/produto/113388742/aquecedor-halogenico-oscilante-cadence-comodita-aqc300-com-alca-para-transporte',
	'http://www.americanas.com.br/produto/9924566/smartwatch-u8-branco-relogio-inteligente-bluetooth-android-iphone'
];

ascrap.listProducts(urls).then(function(list) {
	console.log(list);
}, function(err){
	console.log(err);
});
```

### Objeto de Retorno

```js
{
	productId: '113388742',
  title: 'Aquecedor Halogênico Oscilante Cadence Comodità AQC300 com Alça para Transporte',
  price: '124.9000015258789',
  image: 'http://imagens.americanas.com.br/produtos/01/00/item/113388/7/113388742SZ.jpg'
},
{
	productId: '9924566',
  title: 'Smartwatch U8 Branco Relógio Inteligente Bluetooth Android Iphone',
  price: '119.9000015258789',
  image: 'http://imagens.americanas.com.br/produtos/01/00/sku/9924/5/9924561SZ.jpg'
}

```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```

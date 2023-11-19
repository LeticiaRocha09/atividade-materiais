// Objeto Material: Pera
class Pera {
    // Atributos
    constructor(cor, peso, sabor) {
      this.cor = cor;
      this.peso = peso;
      this.sabor = sabor;
    }
  
    // Métodos
    morder() {
      console.log(`Mordendo a pera. Que delícia!`);
    }
  
    lavar() {
      console.log(`Lavando a pera.`);
    }
  
    guardar() {
      console.log(`Guardando a pera para depois.`);
    }
  }
  
  // Exemplo de uso
  const minhaPera = new Pera("Verde", "150g", "Doce");
  minhaPera.morder();
  minhaPera.lavar();
  minhaPera.guardar();


  // Objeto Material: Lapis
class Lapis {
    // Atributos
    constructor(cor, tipoPonta, carga) {
      this.cor = cor;
      this.tipoPonta = tipoPonta;
      this.carga = carga;
    }
  
    // Métodos
    escrever() {
      console.log(`Escrevendo com o lapis ${this.cor}.`);
    }
  
    trocarTipoPonta() {
      console.log(`Trocando a ponta do lapis.`);
    }
  
    guardar() {
      console.log(`Guardando o lapis na gaveta.`);
    }
  }
  
  // Exemplo de uso
  const meuLapis = new Lapis("Branco", "Esferográfica", "50%");
  meuLapis.escrever();
  meuLapis.trocarTipoPonta();
  meuLapis.guardar();


  // Objeto Abstrato: Notebook
class Notebook {
    // Atributos
    constructor(marca, processador, memoria) {
      this.marca = marca;
      this.processador = processador;
      this.memoria = memoria;
      this.ligado = false;
    }
  
    // Métodos
    ligar() {
      this.ligado = true;
      console.log(`${this.marca} ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      console.log(`${this.marca} desligado.`);
    }
  
    realizarCalculo() {
      console.log(`${this.marca} realizando um cálculo.`);
    }
  }
  
  // Exemplo de uso
  const meuNotebook = new Notebook("Hp", "Intel i3", "16GB");
  meuNotebook.ligar();
  meuNotebook.realizarCalculo();
  meuNotebook.desligar();


  // Objeto Abstrato: Moto
class Moto {
    // Atributos
    constructor(marca, modelo, cor) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0;
    }
  
    // Métodos
    acelerar() {
      this.velocidade += 10;
      console.log(`${this.marca} ${this.modelo} acelerando para ${this.velocidade} km/h.`);
    }
  
    frear() {
      this.velocidade -= 5;
      console.log(`${this.marca} ${this.modelo} freando para ${this.velocidade} km/h.`);
    }
  
    buzinar() {
      console.log(`${this.marca} ${this.modelo} buzinando.`);
    }
  }
  
  // Exemplo de uso
  const minhaMoto = new Moto("Honda", "Yamaha", "Suzuki");
  minhaMoto.acelerar();
  minhaMoto.frear();
  minhaMoto.buzinar();
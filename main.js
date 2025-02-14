// Classe Abstrata
class InstrumentoMusical {
    constructor(nome, afinação) {
    if (new.target === InstrumentoMusical) {
        throw new Error("Classe abstrata não pode ser instanciada");
    }
    this.nome = nome;
    this.afinação = afinação;
    }

    // Método comum a todos os instrumentos
    tocar() {
        return `${this.nome} está tocando!`;
    }

    // Método abstrato (implementação obrigatória nas subclasses)
    obterTipo() {
        throw new Error("Método abstrato: implemente na subclasse");
    }
}

  // Subclasse 1: Instrumento de Cordas
class InstrumentoCordas extends InstrumentoMusical {
    constructor(nome, afinação, númeroCordas) {
        super(nome, afinação);
        this.númeroCordas = númeroCordas;
    }

    // Implementação do método abstrato
    obterTipo() {
        return "Cordas";
    }

    // Método específico
    dedilhar() {
        return `${this.nome} dedilhando ${this.númeroCordas} cordas`;
    }
}

  // Subclasse 2: Instrumento de Percussão
class InstrumentoPercussao extends InstrumentoMusical {
    constructor(nome, afinação, material) {
        super(nome, afinação);
        this.material = material;
    }

    // Implementação do método abstrato
    obterTipo() {
        return "Percussão";
    }

    // Método específico
    bater() {
        return `Batendo no ${this.nome} de ${this.material}`;
    }
}

  // Instâncias de Objetos
const violao = new InstrumentoCordas("Violão Clássico", "E-A-D-G-B-E", 6);
const bateria = new InstrumentoPercussao("Bateria Acústica", "Variável", "Madeira/Metal");
const piano = new InstrumentoCordas("Piano de Cauda", "A440", 88);

  // Testando as instâncias
  console.log(violao.tocar()); // "Violão Clássico está tocando!"
  console.log(violao.dedilhar()); // "Violão Clássico dedilhando 6 cordas"
  console.log(violao.obterTipo()); // "Cordas"

  console.log(bateria.tocar()); // "Bateria Acústica está tocando!"
  console.log(bateria.bater()); // "Batendo no Bateria Acústica de Madeira/Metal"
  console.log(bateria.obterTipo()); // "Percussão"

  console.log(piano.tocar()); // "Piano de Cauda está tocando!"
  console.log(piano.obterTipo()); // "Cordas"
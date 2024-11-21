class Aluno {
  constructor(name, sexo) {
    this.id = this.generateId();
    this.name = name;
    this.sexo = sexo;
}

generateId() {
    return Math.floor(Math.random() * 1000000);
  }
}

export default Aluno;
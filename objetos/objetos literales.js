let perro = {
  nombre: "scott",
  color: "cafe",
  edad: 5,
  macho: true,
  ladrar: function ()  {
    return `${this.nombre} puede ladrar`;
  },
};

perro.tamaño = "Grande";
console.log(perro.ladrar());

delete perro.color;
console.log(perro);

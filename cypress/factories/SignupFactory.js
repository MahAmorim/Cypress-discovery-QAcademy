var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: "67974368083",
      address: {
        postalCode: "08780060",
        street: "Rua Doutor Ricardo Vilela",
        number: "1313",
        details: "apto 3",
        district: "Centro",
        city_state: "Mogi das Cruzes/SP"
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };
    return data;
  },
};

const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 9000,
  name: "Test Character",
  species: "Human",
  gender: "Female",
  image: "image.jpg"
};
describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const response = await request.get("/rickandmorty/character/1");
      for(const prop in character){
        expect(response.body).toHaveProperty(prop);
      }
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get("/rickandmorty/character/36464o");
      expect(response.statusCode).toBe(500);
    });
  });
});

describe("GET /rickandmorty/login", () => {
  it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async () => {
    const response = await request.get(
      "/rickandmorty/login?email=davidleo@gmail.com&password=david1234"
    );
    const access = { access: true };
    expect(response.body).toEqual(access);
  });
  it("Responde con un objeto con la propiedad access en false si la informacion del usuario es valida", async () => {
    const response = await request.get(
      "/rickandmorty/login?email=david@gmail.com&password=david1sdss"
    );
    const access = { access: false };
    expect(response.body).toEqual(access);
  });
});

describe("POST /rickandmorty/fav", () => {
  it("Debe guardar el personaje en el arreglo favoritos", async () => {
    const response = await request.post("/rickandmorty/fav").send(character);
    expect (response.body).toContainEqual(character)
  });
  it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
    character.id = 9038;
    character.name = "octavio"
    const response = await request.post("/rickandmorty/fav").send(character);
    expect(response.body.length).toBe(2)

  })
});

describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, debe devolver un array con los personajes favoritos sin modificar", async () => {
        const response = await request.delete("/rickandmorty/fav/0");
        expect(response.body.length).toBe(2)
    })
    it("Si el ID solicitado existe, debe eliminarlo de favoritos", async () => {
        const response = await request.delete("/rickandmorty/fav/9038");
        expect(response.body.length).toBe(1)
    })
})

import { getServerURL } from "./task1.js";

export async function addUser(firstName, lastName, email) {
  const url = getServerURL() + "/users";

  try {
    const response = await fetch(url);
    const users = await response.json();

    let highestId = 0;
    for (const user of users) {
      const idNum = Number(user.id);
      if (idNum > highestId) highestId = idNum;
    }

    const newId = highestId + 1;

    const newUser = {
      id: newId.toString(),
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    const postResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!postResponse.ok) throw new Error("No se pudo agregar el usuario");

    console.log("Usuario agregado:", newUser);
  } catch (error) {
    console.log("Error al agregar usuario:", error.message);
  }
}
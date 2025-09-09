import fetch from "node-fetch"; 

export async function listUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
  }
}
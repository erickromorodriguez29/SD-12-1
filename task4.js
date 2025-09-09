import { getServerURL } from "./task1.js";

export async function delUser(id) {
  const url = getServerURL() + "/users/" + id;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Usuario con ID " + id + " eliminado.");
    } else {
      console.log("No se pudo eliminar el usuario con ID " + id);
    }
  } catch (error) {
    console.log("Error al eliminar el usuario:", error.message);
  }
}


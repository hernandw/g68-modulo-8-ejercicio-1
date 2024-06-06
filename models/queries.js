import { pool } from "../config/db.js";

export const addUserQuery = async ({ name, lastname, email, password }) => {
  const sql = {
    text: "INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4)",
    values: [name, lastname, email, password],
  };
  try {
    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows[0];
    } else {
      return new Error("No se pudo registrar el usuario");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsersQuery = async () => {
  const sql = {
    text: "SELECT * FROM users",
   
  };
  try {
    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows;
    } else {
      return new Error("No se encontraron usuarios");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getGuitarsQuery = async () => {
  try {
    const sql = {
      text: "SELECT * FROM guitars",
    };
    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error Message: ", error.message);
  }
};

export const getGuitarByIdQuery = async (id) => {
  try {
    const sql = {
      text: "SELECT * FROM guitars WHERE id = $1",
      values: [id],
    };
    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
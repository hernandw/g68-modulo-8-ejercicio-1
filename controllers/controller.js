import { addUserQuery, getUsersQuery, getGuitarsQuery, getGuitarByIdQuery } from "../models/queries.js";
import axios from "axios";

export const home = (req, res) => {
  res.send("Hello World desde controller");
};

export const random = async (req, res) => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/");
    const randomUser = data.results[0];

    const usuario = {
      name: randomUser.name.first,
      lastname: randomUser.name.last,
      email: randomUser.email,
      password: randomUser.login.password,
    };

    await addUserQuery(usuario);
    res.status(201).send(usuario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getUsersQuery();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


export const getGuitars = async (req, res) => {
  try {
    const guitarras = await getGuitarsQuery();
    res.status(200).send(guitarras);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGuitarById = async (req, res) => {
  try {
    const { id } = req.params;
    const guitar = await getGuitarByIdQuery(id);
    res.status(200).send(guitar);
  } catch (error) {
    res.status(500).send(error);
  }
};
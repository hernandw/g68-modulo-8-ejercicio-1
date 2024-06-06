import { addUserQuery } from "../models/queries.js";
import axios from "axios";

export const home = (req, res) => {
  res.send("Hello World desde controller");
};

export const random = async (req, res) => {
  try {
const response = await axios.get("https://randomuser.me/api/")
console.log(response.data.results)
res.send(response.data.results[0].gender)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




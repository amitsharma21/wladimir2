import mongoose from "mongoose";

import BaseEstablishment from "../models/baseEstablishments.js";

export const getBaseEstablishmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const  baseEstablishment= await BaseEstablishment.findById(id);
    res.status(200).json(baseEstablishment)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBaseEstablishments = async (req, res) => {
    try {
      const baseEstablishments = await BaseEstablishment.find()
      res.status(200).json(baseEstablishments);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const createBaseEstablishment = async (req, res) => {
  const establishment = req.body;
  const baseEstablishment = new BaseEstablishment({
    ...establishment
  });
  try {
    await baseEstablishment.save();
    res.status(201).json(baseEstablishment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  };
  
  export const updateBaseEstablishment = async (req, res) => {
    const { id: _id } = req.params;
    const establishment = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No BaseEstablishment with the id`);
  
    const updatedBaseEstablishment = await BaseEstablishment.findByIdAndUpdate(_id, establishment, {
      new: true,
    });
    res.json(updatedBaseEstablishment);
  };

  export const deleteBaseEstablishment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No BaseEstablishment with give id`);
  
    await BaseEstablishment.findByIdAndDelete(id);
    res.json({ message: "baseEstablishment deleted successfully" });
  };

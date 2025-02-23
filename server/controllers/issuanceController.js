import Issuance from "../models/issuanceModel.js";

const createIssuance = async (req, res) => {
  try {
    const newIssuance = await Issuance.create(req.body);
    res.status(201).json(newIssuance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIssuance = async (req, res) => {
  try {
    const issuance = await Issuance.findByPk(req.params.id);
    if (!issuance) return res.status(404).json({ message: "Issuance not found" });
    res.json(issuance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllIssuances = async (req, res) => {
  try {
    const issuances = await Issuance.findAll();
    res.json(issuances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateIssuance = async (req, res) => {
  try {
    const updated = await Issuance.update(req.body, { where: { issuance_id: req.params.id } });
    if (!updated[0]) return res.status(404).json({ message: "Issuance not found" });
    res.json({ message: "Issuance updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createIssuance,
  getIssuance,
  getAllIssuances,
  updateIssuance
};

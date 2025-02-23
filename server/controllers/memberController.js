import Member from "../models/memberModel.js";

const createMember = async (req, res) => {
  try {
    const newMember = await Member.create(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMember = async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMember = async (req, res) => {
  try {
    const updated = await Member.update(req.body, { where: { mem_id: req.params.id } });
    if (!updated[0]) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "Member updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createMember,
  getMember,
  getAllMembers,
  updateMember
};

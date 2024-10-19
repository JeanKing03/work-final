const { citi } = require("../models");

const createServices = async (body) => {
  return await citi.create(body);
};

const getAllServices = async () => {
  return await citi.findAll();
};

const getOneServices = async (id) => {
  return await citi.findByPk(id);
};

const updateServices = async (body, id) => {
  return await citi.update(body, { where: { id }, returning: true });
};

const removeServices = async (id) => {
  return await citi.destroy({ where: { id } });
};

module.exports = {
  createServices,
  getAllServices,
  getOneServices,
  updateServices,
  removeServices,
};

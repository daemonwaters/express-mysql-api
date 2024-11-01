const { sync } = require("../config/db.config");
const Employee = require("../model/Employee");

const findAll = async (_, res, next) => {
  sync();
  try {
    const data = await Employee.findAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  sync();
  const emp_id = req.params.id;
  try {
    const employee = await Employee.findByPk(emp_id);
    if (!employee)
      return res.status(404).json({ msg: `404. Document does not exist.` });
    res.json(employee);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { emp_id, first_name, last_name, salary, birth_date, sex } = req.body;

  if (!emp_id || !first_name || !last_name || !salary || !birth_date || !sex) {
    return res
      .status(400)
      .json({ msg: "Please fill out the required fields." });
  }

  sync();

  try {
    const duplicate = await Employee.findByPk(req.body.emp_id);
    if (duplicate)
      return res.status(409).json({ msg: "Credentials are taken." });
    await Employee.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  sync();

  const { first_name, last_name, salary, birth_date, sex } = req.body;

  if (!first_name || !last_name || !salary || !birth_date || !sex) {
    return res
      .status(400)
      .json({ msg: "Please fill out the required fields." });
  }

  try {
    const target_emp = await Employee.findByPk(req.params.id);

    if (!target_emp)
      return res.status(404).json({ msg: "404. Document does not exist." });

    target_emp.set({ ...req.body });

    await target_emp.save();

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  sync();

  try {
    const target_emp = await Employee.findByPk(req.params.id);
    if (!target_emp)
      return res.status(404).json({ msg: "404. Document does not exist." });
    await target_emp.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};

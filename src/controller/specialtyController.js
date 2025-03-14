import specialtyService from "../services/specialtyService";

let createSpecialty = async (req, res) => {
  try {
    let info = await specialtyService.createSpecialty(req.body);
    console.log(req.body);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let getAllSpecialties = async (req, res) => {
  try {
    let data = await specialtyService.getAllSpecialties();
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
}

let getDetailSpecialtyById = async (req, res) => {
  try {
    let data = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
}

module.exports = {
  createSpecialty,
  getAllSpecialties,
  getDetailSpecialtyById
};

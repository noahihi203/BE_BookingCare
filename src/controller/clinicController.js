import clinicService from "../services/clinicService";

let createClinic = async (req, res) => {
  try {
    let info = await clinicService.createClinic(req.body);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let getClinicsList = async (req, res) => {
  try {
    let data = await clinicService.getClinicsList();
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let getDetailClinicById = async (req, res) => {
  try {
    let data = await clinicService.getDetailClinicById(req.query.clinicId);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let deleteClinicById = async (req, res) => {
  try {
    if (!req.query.clinicId) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Missing required parameters!",
      });
    } else {
      let message = await clinicService.deleteClinicById(req.query.clinicId);
      return res.status(200).json(message);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let updateClinicById = async (req, res) => {
  try {
    let data = req.body;
    if (!data || !data.id) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Missing required parameters!",
      });
    }
    let message = await clinicService.updateClinicById(data);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
}

module.exports = {
  createClinic,
  getClinicsList,
  getDetailClinicById,
  deleteClinicById,
  updateClinicById
};

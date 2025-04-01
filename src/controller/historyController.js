import historyService from "../services/historyService";

let createHistory = async (req, res) => {
  try {
    let info = await historyService.createHistory(req.body);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let getHistoriesList = async (req, res) => {
  try {
    let data = await historyService.getHistoriesList();
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let getDetailHistoryById = async (req, res) => {
  try {
    let data = await historyService.getDetailHistoryById(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server!",
    });
  }
};

let deleteHistoryById = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Missing required parameters!",
      });
    } else {
      let message = await historyService.deleteHistoryById(req.query.id);
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

let updateHistoryById = async (req, res) => {
  try {
    let data = req.body;
    if (!data || !data.id) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Missing required parameters!",
      });
    }
    let message = await historyService.updateHistoryById(data);
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
  createHistory,
  getHistoriesList,
  getDetailHistoryById,
  deleteHistoryById,
  updateHistoryById
};

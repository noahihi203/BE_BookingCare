import db from "../models/index";
import _ from "lodash";
let createHistory = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.patientId ||
        !data.doctorId ||
        !data.descriptionHTMLVi ||
        !data.descriptionMarkdownVi ||
        !data.descriptionHTMLEn ||
        !data.descriptionMarkdownEn ||
        !data.file
      ) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        await db.History.create({
          patientId: data.patientId,
          doctorId: data.doctorId,
          descriptionHTMLVi: data.descriptionHTMLVi,
          descriptionMarkdownVi: data.descriptionMarkdownVi,
          descriptionHTMLEn: data.descriptionHTMLEn,
          descriptionMarkdownEn: data.descriptionMarkdownEn,
          file: data.file,
        });
        resolve({
          errCode: 0,
          errMessage: "Create new History success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getHistoriesList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.History.findAll();
      if (data && data.length > 0) {
        data.forEach((item) => {
          item.file = new Buffer(item.file, "base64").toString("binary");
          return item;
        });
      }
      resolve({
        errMessage: "Get all Histories success!",
        errCode: 0,
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailHistoryById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let data = await db.History.findOne({
          where: { id: id },
          attributes: [
            "nameVi",
            "nameEn",
            "addressVi",
            "addressEn",
            "descriptionHTMLVi",
            "descriptionMarkdownVi",
            "descriptionHTMLEn",
            "descriptionMarkdownEn",
            "image",
          ],
        });
        if (data && data.length > 0) {
          data.forEach((item) => {
            item.image = new Buffer(item.image, "base64").toString("binary");
            return item;
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Get detail specialty success!",
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteHistoryById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let History = await db.History.findOne({
          where: { id: id },
          raw: false,
        });
        if (History) {
          await History.destroy();
        } else {
          resolve({
            errCode: -1,
            errMessage: "The History not found!",
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Delete History success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateHistoryById = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.id ||
        !data.nameVi ||
        !data.nameEn ||
        !data.addressVi ||
        !data.addressEn ||
        !data.descriptionHTMLVi ||
        !data.descriptionMarkdownVi ||
        !data.descriptionHTMLEn ||
        !data.descriptionMarkdownEn ||
        !data.image
      ) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let History = await db.History.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (History) {
          History.nameVi = data.nameVi;
          History.nameEn = data.nameEn;
          History.addressVi = data.addressVi;
          History.addressEn = data.addressEn;
          History.descriptionHTMLVi = data.descriptionHTMLVi;
          History.descriptionMarkdownVi = data.descriptionMarkdownVi;
          History.descriptionHTMLEn = data.descriptionHTMLEn;
          History.descriptionMarkdownEn = data.descriptionMarkdownEn;
          History.image = data.image;
          await History.save();
          resolve({
            errCode: 0,
            errMessage: "Update the History success!",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "The History not found!",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createHistory,
  getHistoriesList,
  getDetailHistoryById,
  deleteHistoryById,
  updateHistoryById,
};

import { raw } from "body-parser";
import db from "../models/index";
import _ from "lodash";
let createClinic = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.nameEn ||
        !data.nameVi ||
        !data.addressVi ||
        !data.addressEn ||
        !data.descriptionHTMLVi ||
        !data.descriptionHTMLEn ||
        !data.descriptionMarkdownVi ||
        !data.descriptionMarkdownEn ||
        !data.image
      ) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        await db.Clinic.create({
          nameVi: data.nameVi,
          nameEn: data.nameEn,
          addressVi: data.addressVi,
          addressEn: data.addressEn,
          descriptionHTMLVi: data.descriptionHTMLVi,
          descriptionMarkdownVi: data.descriptionMarkdownVi,
          descriptionHTMLEn: data.descriptionHTMLEn,
          descriptionMarkdownEn: data.descriptionMarkdownEn,
          image: data.image,
        });
        resolve({
          errCode: 0,
          errMessage: "Create new clinic success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getClinicsList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Clinic.findAll();
      if (data && data.length > 0) {
        data.forEach((item) => {
          item.image = new Buffer(item.image, "base64").toString("binary");
          return item;
        });
      }
      resolve({
        errMessage: "Get all clinics success!",
        errCode: 0,
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailClinicById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let data = await db.Clinic.findOne({
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

let deleteClinicById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let clinic = await db.Clinic.findOne({
          where: { id: id },
          raw: false,
        });
        if (clinic) {
          await clinic.destroy();
        } else {
          resolve({
            errCode: -1,
            errMessage: "The clinic not found!",
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Delete clinic success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateClinicById = 

module.exports = {
  createClinic,
  getClinicsList,
  getDetailClinicById,
  deleteClinicById,
  updateClinicById
};

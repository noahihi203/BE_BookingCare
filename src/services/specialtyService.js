import db from "../models/index";

let createSpecialty = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.nameVi ||
        !data.nameEn ||
        !data.image ||
        !data.descriptionHTMLVi ||
        !data.descriptionMarkdownVi ||
        !data.descriptionHTMLEn ||
        !data.descriptionMarkdownEn
      ) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        await db.Specialty.create({
          nameVi: data.nameVi,
          nameEn: data.nameEn,
          image: data.image,
          descriptionHTMLVi: data.descriptionHTMLVi,
          descriptionMarkdownVi: data.descriptionMarkdownVi,
          descriptionHTMLEn: data.descriptionHTMLEn,
          descriptionMarkdownEn: data.descriptionMarkdownEn,
        });
        resolve({
          errCode: 0,
          errMessage: "Create new specialty success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllSpecialties = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Specialty.findAll();
      if (data && data.length > 0) {
        data.map((item) => {
          item.image = new Buffer(item.image, "base64").toString("binary");
          return item;
        });
      }
      resolve({
        errMessage: "Get all specialties success!",
        errCode: 0,
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createSpecialty,
  getAllSpecialties,
};

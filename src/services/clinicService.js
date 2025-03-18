import db from "../models/index";

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

let getAllClinics = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Clinic.findAll();
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

let getDetailClinicById = async (id, location) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id || !location) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let data = await db.Clinic.findOne({
          where: { id: id },
          attributes: [
            "descriptionHTMLVi",
            "descriptionMarkdownVi",
            "descriptionHTMLEn",
            "descriptionMarkdownEn",
          ],
        });

        if (data) {
          let doctorSpecialty = [];
          if (location === "ALL") {
            doctorSpecialty = await db.Doctor_Infor.findAll({
              where: { specialtyId: id },
              attributes: ["doctorId", "provinceId"],
            });
          } else {
            doctorSpecialty = await db.Doctor_Infor.findAll({
              where: { specialtyId: id, provinceId: location },
              attributes: ["doctorId", "provinceId"],
            });
          }
          data.doctorSpecialty = doctorSpecialty;
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

module.exports = {
  createClinic,
  getAllClinics,
  getDetailClinicById,
};

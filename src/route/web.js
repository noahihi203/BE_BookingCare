import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import doctorController from "../controller/doctorController";
import patientController from "../controller/patientController";
import specialtyController from "../controller/specialtyController";
let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.getDeleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  router.post("/api/save-info-doctor", doctorController.postInfoDoctor);
  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  );
  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);
  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleDoctorByDate
  );
  router.get(
    "/api/get-extra-info-doctor-by-id",
    doctorController.getExtraInfoDoctorById
  );
  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  );

  router.post(
    "/api/patient-book-appointment",
    patientController.postBookAppointment
  );

  router.post(
    "/api/verify-book-appointment",
    patientController.postVerifyBookAppointment
  );
  router.post(
    "/api/create-new-specialty",
    specialtyController.createSpecialty
  );
  router.get("/api/get-all-specialties", specialtyController.getAllSpecialties);
  router.get("/api/get-detail-specialty-by-id", specialtyController.getDetailSpecialtyById);
  return app.use("/", router);
};

module.exports = initWebRouters;

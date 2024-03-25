import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUSerService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId });
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`);
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data);
}

const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data);
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`);
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
}

const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
}

const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data);
}
const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data);
}

const postCancelBookAppointment = (data) => {
    return axios.post('/api/cancel-book-appointment', data);
}

// ================================ Specialty =============================
const createNewSpecialty = (inputData) => {
    return axios.post('/api/create-new-specialty', inputData);
}
 
const getAllSpecialty = () => {
    return axios.get(`/api/get-specialty`);
}

const deleteSpecialty = (specialtyId) => {
    return axios.delete('/api/delete-specialty', {
        data: {
            id: specialtyId
        }
    });
}
 
const getDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`);
}

const editSpecialtyService = (inputData) => {
    return axios.put('/api/edit-specialty', inputData);
}

// ========================= Clinic ============================
const createNewClinic = (data) => {
    return axios.post('/api/create-new-clinic', data);
}

const getAllClinic = () => {
    return axios.get(`/api/get-clinic`);
}

const getDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
}

const editClinicService = (inputData) => {
    return axios.put('/api/edit-clinic', inputData);
}

const deleteClinic = (specialtyId) => {
    return axios.delete('/api/delete-clinic', {
        data: {
            id: specialtyId
        }
    });
}

// ========= manage booking patient ================

const getAllPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`);
}

const getAllPatientForDoctorSuceed = (data) => {
    return axios.get(`/api/get-list-booking-for-doctor-suceed?doctorId=${data.doctorId}&date=${data.date}`);
}

const postSendRemedy = (data) => {
    return axios.post('/api/send-remedy', data);
}

const getDoctorNameBySpecialtyId = (doctorId) => {
    return axios.get(`/api/get-doctor-name-by-specialty-id?doctorId=${doctorId}`);
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUSerService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors,
    saveDetailDoctorService, getDetailInforDoctor,
    saveBulkScheduleDoctor, getScheduleDoctorByDate,
    getExtraInforDoctorById, getProfileDoctorById,
    postPatientBookAppointment, postVerifyBookAppointment,
    createNewSpecialty, getAllSpecialty, deleteSpecialty, getDetailSpecialtyById,
    editSpecialtyService, createNewClinic, getAllClinic,
    getDetailClinicById, editClinicService, deleteClinic,
    getAllPatientForDoctor, postSendRemedy, getDoctorNameBySpecialtyId,
    postCancelBookAppointment, getAllPatientForDoctorSuceed

}
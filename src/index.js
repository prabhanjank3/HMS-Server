//#### Imports ####
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const db = require('./models')
const userController = require('./controllers/users.controller.js')
const doctorController = require('./controllers/doctors.controller.js')
const  patientController = require('./controllers/patients.controller')
const appointmentController = require('./controllers/appointment.controller');
const authController = require("./controllers/auth.controller");
const helpers = require('./controllers/helpers.controller');
const {clearDB, createSampleData} = require('./config/db.operations');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//CORS
var corsOptions = {
    origin: "*"
  };
  app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Databse Syncing
db.dbConnection.sync({force:true}).then(async () => {
    await clearDB();
    createSampleData();
})

app.use('/test', (req, resp) => {
    resp.send('Hi! Server is running.')
})

// User Routes
app.use('/user/create', userController.createUser)
app.use('/user/:id', userController.getUser)
app.use('/user/update/:id', userController.updateUser)
app.use('/user/delete/:id', userController.deleteUser)

// Doctor Routes
app.use('/doctor/create', doctorController.createDoctor)
app.use('/doctor/:id', doctorController.getDoctor)
app.use('/doctor/update/:id', doctorController.updateDoctor)
app.use('/doctor/delete/:id', doctorController.deleteDoctor)

// Patient Routes
app.use('/patient/create', patientController.createPatient)
app.use('/patient/:id', patientController.getPatient)
app.use('/patient/update/:id', patientController.updatePatient)
app.use('/patient/delete/:id', patientController.deletePatient)

// Appointment Routes
app.use('/appointment/create', appointmentController.createAppointment)
app.use('/appointment/q', appointmentController.getSlotBookings)
app.use('/appointment/filter', appointmentController.getAppointmentsByFilter);
app.use('/appointment/:id', appointmentController.getAppointment)
app.use('/appointment/update/:id', appointmentController.updateAppointment)
app.use('/appointment/delete/:id', appointmentController.deleteAppointment)


// Helpers
app.use('/opdSelectionInfo', helpers.getOpdSelectionInfo);

// Authentication Routes
app.use('/auth/login', authController.authenticateUser)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}.`);
  });

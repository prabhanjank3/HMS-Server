const userData = [
{id:'USR09111', firstname:'Prabhanjan', lastname:'Kulkarni', email:'prabhanjank3@gmail.com', phone:'8446274825', dob:'1996-09-11'},
{id:'USR09937', firstname:'Anuja', lastname:'Kulkarni', email:'rahuld19@gmail.com', phone:'9421363029', dob:'1992-11-11'},
{id:'USR09112', firstname:'Anuj', lastname:'Patil', email:'anujk3@gmail.com', phone:'8446274827', dob:'1997-04-06'},
{id:'USR09113', firstname:'Vinay', lastname:'Dalvi', email:'vinayd@gmail.com', phone:'8446274826', dob:'1997-04-06'}
];

const doctorData = [
{id:'DA26384', userid:'USR09111'},
{id:'DA26385', userid:'USR09937'}
]

const opdData = [
{id:'OPD72634',name:'Hematology', doctorid:'DA26384', timing:[{from:'09:00', to:'11:00'},{from:'16:00', to:'20:00'}]},
{id:'OPD72283',name:'Nephrology', doctorid:'DA26385', timing:[{from:'11:00', to:'13:00'},{from:'16:00', to:'18:00'}]}
]

const appointmentData = [
{id:'AP02374',patientid:'PA26385', opdid:'OPD72634', date:'2023-02-07', slot:1, time:'09:00-09:15', reason:'Fever' },
// {id:'AP02375',patientid:'PA26385', opdid:'OPD72634', date:'2023-01-30', slot:2, time:'09:00-09:15', reason:'Fever' }
];
const patientData = [
{id:'PA26385', userid:'USR09112'},
{id:'PA26386', userid:'USR09113'}
]

module.exports = {userData, doctorData, opdData, patientData, appointmentData}
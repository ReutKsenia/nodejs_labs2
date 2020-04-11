const Faculty = require('../model/Faculty');
const Subject = require('../model/Pulpit');
const Pulpit = require('../model/Subject');
const Teacher = require('../model/Teacher');
const Auditorium = require('../model/Auditorium');
const Auditorium_type = require('../model/Auditorium_type');
const url = require('url');

module.exports = (req, res) => {
        switch (req.url) {
            case '/api/faculties': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let faculty = JSON.parse(body);
                    Faculty.create(faculty).then(faculty => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"FACULTY":"${faculty.FACULTY}","FACULTY_NAME":"${faculty.FACULTY_NAME}"}`);
                    });
                })
            }
                break;
            case '/api/pulpits': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let pulpit = JSON.parse(body);
                    Pulpit.create(pulpit).then(pulpit => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"PULPIT":"${pulpit.Pulpit}","PULPIT_NAME":"${pulpit.Pulpit_name}", "FACULTY" : "${pulpit.Faculty}"}`);
                    });
                })
            }
                break;
            case '/api/subjects': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let subject = JSON.parse(body);
                    Subject.create(subject).then(subject => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"SUBJECT":"${subject.Subject}","SUBJECT_NAME":"${subject.Subject_name}", "PULPIT":"${subject.Pulpit}"}`);
                    });
                })
            }
                break;
            case '/api/teachers': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let teacher = JSON.parse(body);
                    Teacher.create(teacher).then(teacher => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"TEACHER":"${teacher.Teacher}","TEACHER_NAME":"${teacher.Teacher_name}", "PULPIT":"${teacher.Pulpit}"}`);
                    });
                })
            }
                break;
            case '/api/auditoriums': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let auditorium = JSON.parse(body);
                    Auditorium.create(auditorium).then(auditorium => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"AUDITORIUM":"${auditorium.AUDITORIUM}","AUDITORIUM_NAME":"${auditorium.AUDITORIUM_NAME}", "AUDITORIUM_CAPACITY":"${auditorium.AUDITORIUM_CAPACITY}", "AUDITORIUM_TYPE":"${auditorium.AUDITORIUM_TYPE}"}`);
                    });
                })
            }
                break;
            case '/api/auditoriumstypes': {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', async () => {
                    let auditoriumtype = JSON.parse(body);
                    Auditorium_type.create(auditoriumtype).then(auditoriumtype => {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(`{"AUDITORIUM_TYPE":"${auditoriumtype.AUDITORIUM_TYPE}", "AUDITORIUM_TYPENAME":"${auditorium.AUDITORIUM_TYPENAME}"}`);
                    });
                })
            }
                break;
            default:
                res.writeHead(404);
                res.end('Not found');
        }
    }
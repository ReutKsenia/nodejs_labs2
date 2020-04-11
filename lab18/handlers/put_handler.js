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
                    Faculty.update(faculty, {where: {Faculty: faculty.Faculty}}).then(() => {
                        res.end(`done`);
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
                    Pulpit.update(pulpit, {where: {Pulpit: pulpit.Pulpit}}).then(() => {
                        res.end(`done`);
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
                    Subject.update(subject, {where: {Subject: subject.Subject}}).then(() => {
                        res.end(`done`);
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
                    Teacher.update(teacher, {where: {Teacher: teacher.Teacher}}).then(() => {
                        res.end(`done`);
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
                    Auditorium.update(auditorium, {where: {Auditorium: auditorium.AUDITORIUM}}).then(() => {
                        res.end(`done`);
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
                    Auditorium_type.update(auditoriumtype, {where: {Auditorium_type: auditoriumtype.AUDITORIUM_TYPE}}).then(() => {
                        res.end(`done`);
                    });
                })
            }
                break;
            default:
                res.writeHead(404);
                res.end('Not found');
        }
    };
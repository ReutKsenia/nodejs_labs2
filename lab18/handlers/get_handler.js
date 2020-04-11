const Faculty = require('../model/Faculty');
const Subject = require('../model/Pulpit');
const Pulpit = require('../model/Subject');
const Teacher = require('../model/Teacher');
const Auditorium = require('../model/Auditorium');
const Auditorium_type = require('../model/Auditorium_type');
const url = require('url');
const fs = require('fs');

module.exports = (req, res) => {
        switch (req.url) {
            case '/': {
                let html = fs.readFile('./index.html', (err, data) => {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.end(data);
                });
            } break;
            case '/api/faculties': {
                Faculty.findAll({raw: true}).then(faculties => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (faculties));
                    res.end(JSON.stringify(faculties));
                }).catch(err => console.log(err));
            }
                break;
            case '/api/pulpits': {
                Pulpit.findAll({raw: true}).then(pulpits => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (pulpits));
                    res.end(JSON.stringify(pulpits));
                }).catch(err => console.log(err));
            }
                break;
            case '/api/subjects': {
                Subject.findAll({raw: true}).then(subjects => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (subjects));
                    res.end(JSON.stringify(subjects));
                }).catch(err => console.log(err));
            }
                break;
            case '/api/teachers': {
                Teacher.findAll({raw: true}).then(teachers => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (teachers));
                    res.end(JSON.stringify(teachers));
                }).catch(err => console.log(err));
            }
                break;
            case '/api/auditoriums': {
                Auditorium.findAll({raw: true}).then(auditoriums => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (auditoriums));
                    res.end(JSON.stringify(auditoriums));
                }).catch(err => console.log(err));
            }
                break;
            case '/api/auditoriumstype': {
                Auditorium_type.findAll({raw: true}).then(auditoriumstype => {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    console.log(typeof (auditoriumstype));
                    res.end(JSON.stringify(auditoriumstype));
                }).catch(err => console.log(err));
            }
                break;
            default:
                res.writeHead(404);
                res.end('Not found');
        }
    }

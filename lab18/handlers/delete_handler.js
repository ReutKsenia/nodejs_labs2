const Faculty = require('../model/Faculty');
const Subject = require('../model/Pulpit');
const Pulpit = require('../model/Subject');
const Auditorium = require('../model/Auditorium');
const Auditorium_type = require('../model/Auditorium_type');
const url = require('url');

module.exports = (req, res) => {
        if (url.parse(req.url).pathname.search('\/api\/faculties\/[A-z]+') !== (-1)) {
            let p = url.parse(req.url, true);
            let r = decodeURI(p.pathname).split('/');
            let faculty = r[3];
            Faculty.destroy({
                where: {
                    Faculty: faculty
                }
            }).then(() => {
                res.end("Done");
            });
        } else if (url.parse(req.url).pathname.search('\/api\/pulpits\/[A-z]+') !== (-1)) {
            let p = url.parse(req.url, true);
            let r = decodeURI(p.pathname).split('/');
            let pulpit = r[3];
            Pulpit.destroy({
                where: {
                    Pulpit: pulpit
                }
            }).then(() => {
                res.end("Done");
            });

        } else if (url.parse(req.url).pathname.search('\/api\/subjects\/[A-z]+') !== (-1)) {
            let p = url.parse(req.url, true);
            let r = decodeURI(p.pathname).split('/');
            let subject = r[3];
            Subject.destroy({
                where: {
                    Subject: subject
                }
            }).then(() => {
                res.end("Done");
            });
        } else if (url.parse(req.url).pathname.search('\/api\/auditoriums\/[A-z]+') !== (-1)) {
            let p = url.parse(req.url, true);
            let r = decodeURI(p.pathname).split('/');
            let auditoriums = r[3];
            Auditorium.destroy({
                where: {
                    AUDITORIUM: auditoriums
                }
            }).then(() => {
                res.end("Done");
            });
        } else if (url.parse(req.url).pathname.search('\/api\/auditoriumstypes\/[A-z]+') !== (-1)) {
            let p = url.parse(req.url, true);
            let r = decodeURI(p.pathname).split('/');
            let auditoriumstypes = r[3];
            Auditorium_type.destroy({
                where: {
                    AUDITORIUM_TYPE: auditoriumstypes
                }
            }).then(() => {
                res.end("Done");
            });
        }
    }
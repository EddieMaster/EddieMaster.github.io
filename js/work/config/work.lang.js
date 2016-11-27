/**
 * Created by EddieMaster on 13/11/2016.
 */
(function () {
    angular
        .module('app.work')
        .config(config);

    function config($translateProvider) {
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider
            .translations('es',spanish());
        $translateProvider
            .translations('en',english());
    }

    function english() {
        return {
            work_title:'Work Experience',
            work_inicio_a:'February 2016',
            work_fin_a:'Present',
            work_titulo_a:'Web Development Supervisor',
            work_desc_a:'Coordinate and supervise programming activities, Verify the development of analysis and design of systems, Assign analysis work, Analyze and evaluate proposed systems.',
            work_inicio_b:'January 2015',
            work_fin_b:'January 2016',
            work_titulo_b:'Web Development',
            work_desc_b:'Web design of the company, administration and support of inductions in line with the platform Moodle lms. Manage online records with high concurrency',
            work_inicio_c:'January 2014',
            work_fin_c:'Dicember 2015',
            work_titulo_c:"Teacher's assistant",
            work_desc_c:'Provide care and advice to the groups of students assigned to it, according to the instructions explicitly given and taking into account the particular modalities of the subjects in question',
            work_inicio_d:'January 2013',
            work_fin_d:'Dicember 2014',
            work_titulo_d:'Freelancer',
            work_desc_d:'I work in different projects that cover computer security, programming and advanced networks',
            work_inicio_e:'January 2013',
            work_fin_e:'Dicember 2014',
            work_titulo_e:'Web developer and instructor of administration and security of computer networks.',
            work_desc_e:'Web design of the company, administration and support of online inductions with the Moodle lms platform. Dictate content and make assessments regarding the administration and security of computer networks.',
            work_inicio_f:'January 2012',
            work_fin_f:'November 2013',
            work_titulo_f:'Head of Operations',
            work_desc_f:'It seeks the implantation of design technology, engineering, manufacturing and management of computer assisted products (Creo Parametric, MathCAD, Arbortext, Windchill), supervision and control of industrial and university visits, creation, administration and support of online inductions.',
            work_inicio_g:'January 2011',
            work_fin_g:'Dicember 2012',
            work_titulo_g:'Application Engineer',
            work_desc_g:'Installation and maintenance of digital X-ray system equipment, wireless networks (WAN), storage servers and application development for X-ray images.',
            work_inicio_h:'January 2010',
            work_fin_h:'Dicember 2011',
            work_titulo_h:'Head of IT department.',
            work_desc_h:'Supervision and maintenance of the computer lab.',
            work_inicio_i:'January 2009',
            work_fin_i:'Dicember 2010',
            work_titulo_i:'AutoCAD operator teacher.',
            work_desc_i:'Dictate classes and evaluate the learning acquired by participants in the area.',
            work_inicio_j:'January 2008',
            work_fin_j:'Dicember 2009',
            work_titulo_j:'Technician in communication system and mobile telephony.',
            work_desc_j:'Internet and face-to-face technical support, computer repairs, printers and mobile phones'

        }

    }

    function spanish() {
        return {
            work_title:'Experiencia Laboral',
            work_inicio_a:'Febrero 2016',
            work_fin_a:'Presente',
            work_titulo_a:'Supervisor de Desarrollo web',
            work_desc_a:'Coordinar y supervisar las actividades de programación, Verificar el desarrollo de análisis y diseño de sistemas, Asignar trabajo de análisis, Analizar y evaluar sistemas propuestos.',
            work_inicio_b:'Enero 2015',
            work_fin_b:'Enero 2016',
            work_titulo_b:'Progrmador Web',
            work_desc_b:'Diseño web de la empresa, administración y soporte de inducciones en línea con la plataforma Moodle lms. Gestionar registros en línea con alta concurrencia',
            work_inicio_c:'Enero 2014',
            work_fin_c:'Diciembre 2015',
            work_titulo_c:'Preparador Docente',
            work_desc_c:'Brindar atención y asesoría a los grupos de alumnos que le sean asignados, de acuerdo con las instrucciones explícitamente impartidas y atendiendo a las modalidades particulares de las asignaturas de que se trate.',
            work_inicio_d:'Enero 2013',
            work_fin_d:'Diciembre 2014',
            work_titulo_d:'Independiente',
            work_desc_d:'Se trabajo en distintos proyecto que abarcan seguridad informatica, programacion y redes avanzadas',
            work_inicio_e:'Enero 2013',
            work_fin_e:'Diciembre 2014',
            work_titulo_e:'Programador Web e instructor de administración y seguridad de redes informáticas.',
            work_desc_e:'Diseño Web de la compañía, administración y soporte de inducciones online con la plataforma Moodle lms. Dictar contenido y realizar evaluaciones con relación a la administración y seguridad de redes informáticas.',
            work_inicio_f:'Enero 2012',
            work_fin_f:'Noviembre 2013',
            work_titulo_f:'Jefe de operaciones',
            work_desc_f:'Procura la implantación de tecnología de diseño, ingeniería, fabricación y gestión de productos asistidos por ordenador (Creo Parametric, MathCAD, Arbortext, Windchill), supervisión y control de visitas industriales y universitarias, creación, administración y soporte de inducciones en línea.',
            work_inicio_g:'Enero 2011',
            work_fin_g:'diciembre 2012',
            work_titulo_g:'Ingeniero de aplicación',
            work_desc_g:'Instalación y mantenimiento de equipos de sistema digitales de rayos X, redes inalámbricas (WAN), servidores de almacenamiento y desarrollo de aplicaciones para imágenes de rayos X.',
            work_inicio_h:'Enero 2010',
            work_fin_h:'diciembre 2011',
            work_titulo_h:'Jefe del departamento de computación.',
            work_desc_h:'Supervisión y mantenimiento del laboratorio de computación.',
            work_inicio_i:'Enero 2009',
            work_fin_i:'Diciembre 2010',
            work_titulo_i:'Docente de operador técnico básico/ avanzado y AutoCAD.',
            work_desc_i:'Dictar clases y evaluar el aprendizaje adquirido por los participantes en el área.',
            work_inicio_j:'Enero 2008',
            work_fin_j:'diciembre 2009',
            work_titulo_j:'Técnico en instalación de sistema de comunicación y telefonía móvil.',
            work_desc_j:'Soporte técnico  internet y presencial, reparaciones computadoras, impresoras y teléfonos móviles'

        }
    }
})();
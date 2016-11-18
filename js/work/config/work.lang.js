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
            work_inicio_a:'February 2016',
            work_fin_a:'Present',
            work_titulo_a:'Web Development Supervisor',
            work_desc_a:'',
            work_inicio_b:'January 2015',
            work_fin_b:'January 2016',
            work_titulo_b:'Web Development',
            work_desc_b:'',
            work_inicio_c:'January 2014',
            work_fin_c:'Dicember 2015',
            work_titulo_c:"Teacher's assistant",
            work_desc_c:'',
            work_inicio_d:'January 2013',
            work_fin_d:'Dicember 2014',
            work_titulo_d:'Freelancer',
            work_desc_d:'',
            work_inicio_e:'January 2013',
            work_fin_e:'Dicember 2014',
            work_titulo_e:'Web developer and instructor of administration and security of computer networks.',
            work_desc_e:'',
            work_inicio_f:'January 2012',
            work_fin_f:'November 2013',
            work_titulo_f:'Head of Operations',
            work_desc_f:'',
            work_inicio_g:'January 2011',
            work_fin_g:'Dicember 2012',
            work_titulo_g:'Application Engineer',
            work_desc_g:'',
            work_inicio_h:'January 2010',
            work_fin_h:'Dicember 2011',
            work_titulo_h:'Head of IT department.',
            work_desc_h:'',
            work_inicio_i:'January 2009',
            work_fin_i:'Dicember 2010',
            work_titulo_i:'AutoCAD operator teacher.',
            work_desc_i:'',
            work_inicio_j:'January 2008',
            work_fin_j:'Dicember 2009',
            work_titulo_j:'Technician in communication system and mobile telephony.',
            work_desc_j:''

        }

    }

    function spanish() {
        return {
            work_inicio_a:'Febrero 2016',
            work_fin_a:'Presente',
            work_titulo_a:'Supervisor de Desarrollo web',
            work_desc_a:'',
            work_inicio_b:'Enero 2015',
            work_fin_b:'Enero 2016',
            work_titulo_b:'Progrmador Web',
            work_desc_b:'',
            work_inicio_c:'Enero 2014',
            work_fin_c:'Diciembre 2015',
            work_titulo_c:'Preparador Docente',
            work_desc_c:'',
            work_inicio_d:'Enero 2013',
            work_fin_d:'Diciembre 2014',
            work_titulo_d:'Independiente',
            work_desc_d:'',
            work_inicio_e:'Enero 2013',
            work_fin_e:'Diciembre 2014',
            work_titulo_e:'Programador Web e instructor de administración y seguridad de redes informáticas.',
            work_desc_e:'',
            work_inicio_f:'Enero 2012',
            work_fin_f:'Noviembre 2013',
            work_titulo_f:'Jefe de operaciones',
            work_desc_f:'',
            work_inicio_g:'Enero 2011',
            work_fin_g:'diciembre 2012',
            work_titulo_g:'Ingeniero de aplicación',
            work_desc_g:'',
            work_inicio_h:'Enero 2010',
            work_fin_h:'diciembre 2011',
            work_titulo_h:'Jefe del departamento de computación.',
            work_desc_h:'',
            work_inicio_i:'Enero 2009',
            work_fin_i:'Diciembre 2010',
            work_titulo_i:'Docente de operador técnico básico/ avanzado y AutoCAD.',
            work_desc_i:'',
            work_inicio_j:'Enero 2008',
            work_fin_j:'diciembre 2009',
            work_titulo_j:'Técnico en instalación de sistema de comunicación y telefonía móvil.',
            work_desc_j:''

        }
    }
})();
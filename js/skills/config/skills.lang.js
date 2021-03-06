/**
 * Created by EddieMaster on 13/11/2016.
 */
(function () {
    angular
        .module('app.skills')
        .config(config);
    function config($translateProvider) {
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider
            .translations('es', spanish());
        $translateProvider
            .translations('en', english());

    }

    function spanish() {
        return {
            skills_habilidades: 'Habilidades',
            skills_front:'Desarrollador Front-end',
            skills_back:'Desarrollador Back-end',
            skills_servidor:'Servidores Web',
            skills_db:'Bases de datos',
            skills_os:'Sistemas Operativos',
            skils_otros:'Otras Habilidades'
        }
    }

    function english() {
        return {
            skills_habilidades: 'Skills',
            skills_front:'Front-end Developer',
            skills_back:'Back-end Developer',
            skills_servidor:'Web Servers',
            skills_db:'Data Base',
            skills_os:'Operative System',
            skils_otros:'Other Skills'
        }
    }
})();
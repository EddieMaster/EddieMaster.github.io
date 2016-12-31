/**
 * Created by EddieMaster on 12/11/2016.
 */
(function () {
    angular
        .module('app.about')
        .config(config);
    
    function config($translateProvider) {
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider
            .translations('es',spanish());
        $translateProvider
            .translations('en',english());
    }

    function spanish() {
        return {
            about_titulo:'Acerca de',
            about_titulo2:'Informacion Basica',
            about_direccion:'Direccion:',
            about_fecha_nacimiento:'Nacimiento:',
            about_lugar_nacimiento:'Lugar:',
            about_lenguajes:'Lenguajes:',
            about_genero:'Genero:',
            about_saludo:'',
            about_contenido:'Hola, mi nombre es Eddie Mejía, pero todos me dicen “Eddie Master”. El apodo lo recibí en uno de mis trabajos como programador, solucionando un problema mínimo en angularjs, desde ese momento mientras resolvía diferentes problemas otras personas me llamaron “Eddie Master”. Aparte de dedicarme y apasionarme por la tecnología del mismo modo me gusta practicar deportes, En cuanto a mis expectaciones respecto a esta web, lo que deseo es transmitir mis conocimientos y poder ayudar a otros a llevar a cabo sus proyectos y aspiraciones, dar consejos a quien lo necesiten, esperando algún día poder escuchar de ellos el que me llamen “Eddie Master”.',
            about_sexo:'Masculino',
            about_ingles:'Ingles',
            about_sp:'Español',
            about_mes_nacimiento:'Marzo',
            about_correo:'Correo:',
            about_telf:'Telefono:',
            about_cell:'+58414-6938893'
        }
    }

    function english() {
        return {
            about_titulo:'About',
            about_titulo2:'Basic Information',
            about_direccion:'Address:',
            about_fecha_nacimiento:'Date of Birth:',
            about_lugar_nacimiento:'Place of Birth:',
            about_lenguajes:'Language:',
            about_genero:'Gender:',
            about_saludo:'Hello, I am Eddie Mejia, but the people call me Eddie Master',
            about_contenido:'The nickname I received in one of my jobs as a programmer, solving a minimum problem in angularjs, from that time while solving other problems other people called me Eddie Master. Apart from dedicating myself to technology I also like sports, almost every weekend I play sports. As for my expectations regarding this web, what I want is to transmit my knowledge and to be able to help others to carry out their projects, to give advice to who needs it and someday to be able to hear that they call me Eddie Master',
            about_sexo:'Male',
            about_ingles:'English',
            about_sp:'Spanish',
            about_mes_nacimiento:'March',
            about_correo:'Email:',
            about_telf:'Cell Phone #:',
            about_cell:'+58414-6938893'
        }
    }

})();
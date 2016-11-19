/**
 * Created by EddieMaster on 19/11/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.education')
        .config(config);
    
    function config($translateProvider) {
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider
            .translations('es',spanish());
        $translateProvider
            .translations('en',english());


        function spanish() {
            return {
                educacion:'Educacion',
                educacion_titulo_a:'Universidad Privada Dr.Rafael Belloso Chacin',
                educacion_subtitulo_a:'Ingenieria en Computacion',
                educacion_desc_a:'Al egresar de la Universidad Privada Dr. Rafael Belloso Chacín, el Ingeniero en Computación representa una nueva perspectiva en el campo laboral, ya que abarca distintos aspectos de la electrónica y la informática. Sus funciones involucran de forma directa o indirecta el uso del computador, siendo ésta su herramienta fundamental de trabajo'
            }
        }
        function english() {
            return {
                educacion:'Education',
                educacion_titulo_a:'Dr.Rafael Belloso Chacin University',
                educacion_subtitulo_a:'Computer Engineer',
                educacion_desc_a:'Upon graduating from the Private University Dr. Rafael Belloso Chacín, the Computer Engineer represents a new perspective in the labor field, since it covers different aspects of electronics and computer science. Its functions directly or indirectly involve the use of the computer, this being its fundamental tool of work'
            }
        }
        
    }
})();

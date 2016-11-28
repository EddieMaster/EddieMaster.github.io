/**
 * Created by EddieMaster on 27/11/2016.
 */
(function () {
    angular
        .module('app.jobs')
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
            job:'Proyectos Realizados',
            job_titulo_a:'Aplicacion android para la fuerza de ventas',
            job_desc_a:'Planificación, Cobranza y Pre-Venta, con los cuales usted podrá realizar: Consulta de clientes, pedidos, precios, totalización previa de la factura, cobranzas e incremento en flujo de caja. Támbien tendrá la información en disponibilidad global o por vendedor de sus inventarios junto a los precios sin margen de error.',
            job_titulo_b:'Ventor Panel',
            job_desc_b:'Ventor Panel es una plataforma en la cual centraliza una serie de aplicaciones en donde el usuario puede acceder y utilizar dichas apps para gestionar un sistema ERP y aplicaciones moviles. No puedo dar acceso a la web ya que por temas de seguridad y privacidad, pero pueden navegar y contactar a la empresa por medio de http://www.sisventor.com',
            job_titulo_c:'Aplicaciones Centralizadas',
            job_desc_c:'Estas son algunas aplicaciones dentro de la plataforma Ventor Panel en la cual gestionan un sistema ERP y un sistema de pedidos por movil entre otras, no puedo dar acceso a las apps por motivo de seguridad y privacidad, de igual forma pueden navegar y contactar a la empresa por medio de http://www.sisventor.com'
        }
    }
    function english() {
        return {};
    }

})();
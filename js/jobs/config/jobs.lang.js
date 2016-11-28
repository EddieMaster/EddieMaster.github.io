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
            job_desc_c:'Estas son algunas aplicaciones dentro de la plataforma Ventor Panel en la cual gestionan un sistema ERP y un sistema de pedidos por movil entre otras, no puedo dar acceso a las apps por motivo de seguridad y privacidad, de igual forma pueden navegar y contactar a la empresa por medio de http://www.sisventor.com',
            job_titulo_d:'E-MediCuidados and Training',
            job_desc_d:'E-MediCuidados and Training es una empresa que tiene como objetivo prestar un servicio que procura mejorar la salud del paciente, mediante la gestión automática de la misma, procurando una comunicación y contacto permanente entre ambas partes, aprovechando la ventaja del sistema global de actividades y servicios sanitarios existentes. Por otra parte se busca proporcionar informes clínicos y diagnósticos de diferentes especialidades a través de su plataforma tecnológica, puedes visitar la web http://emedicuidadost.com/',
            job_titulo_e:'Configuracion de replica Master - Master MySQL',
            job_desc_e:'La replicación de MySQL es el proceso mediante el cual un solo conjunto de datos, almacenado en una base de datos MySQL, será copiado en vivo a un segundo servidor. Esta configuración, llamada "maestro-esclavo" de replicación, es una configuración típica. Nuestra configuración será mejor que eso, porque la replicación maestro-maestro permite que los datos se copien de un servidor a otro. Esta diferencia sutil pero importante nos permite realizar mysql leer o escribir desde cualquiera de los servidores. Esta configuración añade redundancia y aumenta la eficiencia cuando se trata de acceder a los datos.',
            job_titulo_f:'Configuracion de servidores web e Integracion con servicios de terceros',
            job_desc_f:'Configuracion de distintos servidores web bajo diferentes sistemas operativos e integracion con servicios de google, facebook, intagram y twitter',
            job_titulo_g:'Urbe Internacional',
            job_desc_g:'URBE Internacional es una corporación multinacional con un concepto vanguardista en educación a distancia. Está enmarcada en el uso de avanzadas tecnologías de capacitación, sustentado en los más modernos modelos de aprendizaje que permiten la formación académica de nuestros clientes, a través de aplicaciones LMS (Learning Management System). Puedes entrar en https://www.urbeinternacional.com'
        }
    }
    function english() {
        return {
            job:'Completed Projects',
            job_titulo_a:'Android application for the sales force',
            job_desc_a:'Planning, Collection and Pre-Sales, with which you can perform: Consultation of customers, orders, prices, previous totalization of the invoice, collections and increase in cash flow. It will also have the information in global availability or by seller of its inventories next to the prices without margin of error.',
            job_titulo_b:'Ventor Panel',
            job_desc_b:'Ventor Panel is a platform in which it centralizes a series of applications where the user can access and use those applications to manage an ERP system and mobile applications. I can not give access to the web because of security and privacy issues, but can browse and contact the company through http://www.sisventor.com',
            job_titulo_c:'Centralized Applications',
            job_desc_c:'These are some applications within the Ventor Panel platform in which they manage an ERP system and a mobile order system among others, I can not give access to the apps for reasons of security and privacy, just as they can navigate and contact the Company through http://www.sisventor.com',
            job_titulo_d:'E-MediCuidados and Training',
            job_desc_d:'E-MediCuidados and Training is a company that aims to provide a service that seeks to improve the patients health, through automatic management of the same, seeking a permanent communication and contact between both parties, taking advantage of the global system of activities and Existing health services. On the other hand, it seeks to provide clinical and diagnostic reports of different specialties through its technological platform, you can visit the web http://emedicuidadost.com/',
            job_titulo_e:'Replication Master - Master MySQL Configuration',
            job_desc_e:'MySQL replication is the process by which a single data set, stored in a MySQL database, will be live-copied to a second server. This configuration, called "master-slave" replication, is a typical setup. Our setup will be better than that, because master-master replication allows data to be copied from either server to the other one. This subtle but important difference allows us to perform mysql read or writes from either server. This configuration adds redundancy and increases efficiency when dealing with accessing the data.',
            job_titulo_f:'Web server configuration and Integration with third-party services',
            job_desc_f:'Configuration of different web servers under different operating systems and integration with google, facebook, intagram and twitter services',
            job_titulo_g:'International Urbe',
            job_desc_g:'URBE Internacional is a multinational corporation with an avant-garde concept in distance education. It is framed in the use of advanced training technologies, based on the most modern learning models that allow the academic training of our clients, through LMS (Learning Management System) applications. You can go to https://www.urbeinternacional.coml'
        }
    }

})();
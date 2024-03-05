import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instalación Docker + GitLab + Opción SSL + Opción SSH',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Instalación Docker + GitLab + Opción SSL + Opción SSH Exploraremos cómo crear un script de instalación para configurar un entorno Docker con GitLab, incorporando opciones para habilitar SSL y SSH. Estas opciones adicionales son cruciales para garantizar la seguridad y la integridad de las comunicaciones en un entorno de desarrollo o producción.
      </>
    ),
  },
  {
    title: 'Instalación Docker + GitLab + SSL',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Instalación Docker + GitLab + SSL Detalla los pasos necesarios para instalar y configurar Docker junto con GitLab, asegurando que la comunicación entre los usuarios y el servidor se realice de manera segura utilizando SSL (Secure Sockets Layer). La combinación de Docker y GitLab proporciona un entorno robusto para la gestión de proyectos de desarrollo, y la incorporación de SSL garantiza la protección de los datos sensibles durante la transmisión.
      </>
    ),
  },
  {
    title: 'Instalación Linux + Valet',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Instalación Linux + Valet Se proporcionan instrucciones para instalar Valet en un entorno Linux. Valet es una herramienta que simplifica el desarrollo de aplicaciones web al proporcionar un servidor local rápido y fácil de configurar. Con Valet, los desarrolladores pueden concentrarse en la codificación de aplicaciones en lugar de preocuparse por la configuración del servidor web.
      </>
    ),
  },
  {
    title: 'Instalación del Facturador Docker + GitLab + SSL',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Instalación del Facturador Docker + GitLab + SSL Se enfoca en la instalación del facturador, utilizando Docker y GitLab para gestionar el desarrollo y el control de versiones, y SSL para garantizar la seguridad de las comunicaciones. Configurar este entorno específico asegura un sistema de facturación robusto y seguro, crucial para el manejo de datos financieros y la comunicación con clientes y proveedores.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

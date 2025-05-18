import React from 'react';

const PrivacyPolicyComponent = () => {
    return (
        <div className="container m-2 p-5 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-10">
            <h1 className="text-4xl font-bold text-gray-800 border-b pb-4">Política de Privacidad</h1>

            <section className="text-gray-700 space-y-6">
                <p>
                    En <strong>ParkTracker</strong>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
                    Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos.
                </p>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Responsable del tratamiento</h2>
                    <p>
                        El responsable del tratamiento de tus datos es usuario creador y desarrollador del proyecto ParkTracker.
                        Puedes contactar a través de correo electrónico: <a href="mailto:parktracker.contact@gmail.com" className="text-blue-600 underline ml-1">parktracker.contact@gmail.com</a>.
                    </p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Datos que recopilamos</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Nombre y correo electrónico al registrarte con Auth0.</li>
                        <li>Datos técnicos como IP, navegador y tipo de dispositivo (anónimos, con fines analíticos).</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. ¿Cómo usamos tus datos?</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Autenticación y control de acceso a funciones avanzadas.</li>
                        <li>Evaluación de rutas frente a zonas protegidas.</li>
                        <li>Mejorar la experiencia de usuario y el rendimiento de la plataforma.</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Servicios de terceros</h2>
                    <p>Utilizamos herramientas de terceros para ofrecer funcionalidad y seguridad:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Auth0:</strong> Autenticación segura.</li>
                        <li><strong>Vercel (si aplica):</strong> Despliegue y alojamiento.</li>
                        <li><strong>Leaflet + OpenStreetMap:</strong> Visualización geoespacial.</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Conservación de datos</h2>
                    <p>
                        Tus datos se conservarán el tiempo necesario para los fines descritos, o según lo exija la ley vigente.
                    </p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Tus derechos</h2>
                    <p>Como usuario, tienes derecho a:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Acceder a tus datos personales.</li>
                        <li>Rectificar o eliminar tus datos.</li>
                        <li>Retirar tu consentimiento en cualquier momento.</li>
                    </ul>
                    <p className="mt-2">Para ejercerlos, ponte en contacto con la siguiente dirección de correo: <a href="mailto:parktracker.contact@gmail.com" className="text-blue-600 underline">parktracker.contact@gmail.com</a>.</p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Seguridad y acceso restringido</h2>
                    <p>
                        El inicio de sesión mediante Auth0 es obligatorio para acceder a las funcionalidades avanzadas (como el análisis de rutas) con el fin de:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Prevenir el uso indebido de la plataforma por bots o usuarios malintencionados.</li>
                        <li>Garantizar la integridad de los datos y el correcto funcionamiento del sistema.</li>
                        <li>Ofrecer una experiencia personalizada y segura.</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Cambios en esta política</h2>
                    <p>
                        Esta política puede verse sujeta a cambios de manera ocasional. Cualquier cambio se publicará en esta página y, en caso de que sea relevante, será notificado por correo.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Última actualización: mayo de 2025</p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyComponent;

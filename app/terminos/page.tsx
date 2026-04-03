export default function TerminosPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-sm text-gray-300 font-[Arial]">
      <h1 className="text-3xl font-bold text-primary mb-2">TÉRMINOS DE USO</h1>
      <p className="text-gray-500 mb-8"><strong>Última actualización:</strong> 3 de abril de 2026</p>

      <h2 className="text-xl font-bold text-primary mb-4">ACUERDO CON NUESTROS TÉRMINOS LEGALES</h2>
      <p className="mb-4">
        Somos <strong>Klyra Works</strong> ("Empresa", "nosotros"). Operamos la plataforma Klyra, así como cualquier otro producto o servicio relacionado que haga referencia a estos términos legales (los "Términos Legales") (colectivamente, los "Servicios").
      </p>
      <p className="mb-4">
        Puede contactarnos por correo electrónico en{" "}
        <a href="mailto:contacto@klyraworks.com" className="text-blue-300 underline">contacto@klyraworks.com</a>{" "}
        o por correo postal en: La Maná, Cotopaxi 050202, Ecuador.
      </p>
      <p className="mb-4">
        Estos Términos Legales constituyen un acuerdo legalmente vinculante entre usted y Klyra Works sobre su acceso y uso de los Servicios. Al acceder a los Servicios, usted ha leído, comprendido y aceptado estar sujeto a todos estos Términos Legales. <strong>SI NO ESTÁ DE ACUERDO, DEBE DEJAR DE USAR LOS SERVICIOS INMEDIATAMENTE.</strong>
      </p>
      <p className="mb-4">
        Nos reservamos el derecho de realizar cambios a estos Términos Legales en cualquier momento. Le notificaremos actualizando la fecha de "Última actualización". Es su responsabilidad revisar periódicamente estos Términos.
      </p>
      <p className="mb-8">Le recomendamos imprimir una copia de estos Términos Legales para sus registros.</p>

      <h2 className="text-xl font-bold text-primary mb-4">ÍNDICE</h2>
      <ol className="list-decimal pl-6 space-y-1 mb-8">
        {[
          ["#services", "NUESTROS SERVICIOS"],
          ["#ip", "DERECHOS DE PROPIEDAD INTELECTUAL"],
          ["#userreps", "REPRESENTACIONES DEL USUARIO"],
          ["#prohibited", "ACTIVIDADES PROHIBIDAS"],
          ["#ugc", "CONTRIBUCIONES DE USUARIOS"],
          ["#license", "LICENCIA DE CONTRIBUCIÓN"],
          ["#sitemanage", "GESTIÓN DE SERVICIOS"],
          ["#terms", "VIGENCIA Y TERMINACIÓN"],
          ["#modifications", "MODIFICACIONES E INTERRUPCIONES"],
          ["#law", "LEY APLICABLE"],
          ["#disputes", "RESOLUCIÓN DE DISPUTAS"],
          ["#corrections", "CORRECCIONES"],
          ["#disclaimer", "DESCARGO DE RESPONSABILIDAD"],
          ["#liability", "LIMITACIÓN DE RESPONSABILIDAD"],
          ["#indemnification", "INDEMNIZACIÓN"],
          ["#userdata", "DATOS DEL USUARIO"],
          ["#electronic", "COMUNICACIONES ELECTRÓNICAS"],
          ["#misc", "MISCELÁNEOS"],
          ["#contact", "CONTÁCTENOS"],
        ].map(([href, label], i) => (
          <li key={href}>
            <a href={href} className="text-blue-300">{i + 1}. {label}</a>
          </li>
        ))}
      </ol>

      <h2 id="services" className="text-xl font-bold text-primary mt-8 mb-3">1. NUESTROS SERVICIOS</h2>
      <p className="mb-6">
        La información proporcionada al usar los Servicios no está destinada a distribución o uso en jurisdicciones donde dicho uso sea contrario a la ley. Quienes accedan a los Servicios desde otras ubicaciones lo hacen por su propia iniciativa y son responsables del cumplimiento de las leyes locales.
      </p>

      <h2 id="ip" className="text-xl font-bold text-primary mt-8 mb-3">2. DERECHOS DE PROPIEDAD INTELECTUAL</h2>
      <h3 className="text-base font-semibold text-primary mb-2">Nuestra propiedad intelectual</h3>
      <p className="mb-4">
        Somos propietarios o licenciatarios de todos los derechos de propiedad intelectual de nuestros Servicios, incluyendo código fuente, bases de datos, software, diseños, textos, fotografías y gráficos ("Contenido"), así como marcas y logos ("Marcas").
      </p>
      <h3 className="text-base font-semibold text-primary mb-2">Su uso de nuestros Servicios</h3>
      <p className="mb-4">
        Le otorgamos una licencia no exclusiva, intransferible y revocable para acceder a los Servicios y descargar o imprimir contenido al que haya accedido correctamente, únicamente para uso interno de su negocio.
      </p>
      <p className="mb-4">
        Ninguna parte de los Servicios puede copiarse, reproducirse, distribuirse o explotarse comercialmente sin nuestro permiso escrito previo.
      </p>
      <h3 className="text-base font-semibold text-primary mb-2">Sus envíos</h3>
      <p className="mb-6">
        Al enviarnos comentarios, sugerencias u otro feedback sobre los Servicios, acepta asignarnos todos los derechos de propiedad intelectual sobre dicho envío. Usted es responsable de lo que publica o carga y garantiza que tiene los derechos necesarios para hacerlo.
      </p>

      <h2 id="userreps" className="text-xl font-bold text-primary mt-8 mb-3">3. REPRESENTACIONES DEL USUARIO</h2>
      <p className="mb-6">
        Al usar los Servicios, declara y garantiza que: (1) tiene capacidad legal para cumplir con estos Términos; (2) no es menor de edad en su jurisdicción; (3) no accederá a los Servicios mediante medios automatizados o no humanos; (4) no usará los Servicios para fines ilegales; y (5) su uso no violará ninguna ley o regulación aplicable.
      </p>

      <h2 id="prohibited" className="text-xl font-bold text-primary mt-8 mb-3">4. ACTIVIDADES PROHIBIDAS</h2>
      <p className="mb-3">Como usuario de los Servicios, usted acepta NO:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Recuperar sistemáticamente datos para crear bases de datos sin permiso escrito.</li>
        <li>Engañar o defraudar a otros usuarios.</li>
        <li>Eludir funciones de seguridad de los Servicios.</li>
        <li>Dañar o desprestigiar los Servicios.</li>
        <li>Usar información obtenida para acosar o dañar a otra persona.</li>
        <li>Usar los Servicios de manera inconsistente con las leyes aplicables.</li>
        <li>Cargar virus, troyanos u otro material dañino.</li>
        <li>Usar sistemas automatizados para enviar comentarios o mensajes.</li>
        <li>Eliminar avisos de derechos de autor del Contenido.</li>
        <li>Hacerse pasar por otro usuario o persona.</li>
        <li>Interferir o crear carga excesiva sobre los Servicios.</li>
        <li>Intentar eludir medidas de restricción de acceso.</li>
        <li>Copiar o adaptar el software de los Servicios.</li>
        <li>Usar los Servicios para competir con nosotros o con fines comerciales no autorizados.</li>
        <li>Usar la plataforma para enviar spam, mensajes no solicitados, o realizar actividades que violen los términos de servicio de WhatsApp o las políticas de Meta.</li>
      </ul>

      <h2 id="ugc" className="text-xl font-bold text-primary mt-8 mb-3">5. CONTRIBUCIONES DE USUARIOS</h2>
      <p className="mb-6">
        Los Servicios permiten a los usuarios cargar contenido como imágenes de productos. Al crear o publicar cualquier Contribución, usted garantiza que tiene los derechos necesarios para hacerlo y que el contenido no es ilegal, difamatorio, obsceno ni engañoso.
      </p>

      <h2 id="license" className="text-xl font-bold text-primary mt-8 mb-3">6. LICENCIA DE CONTRIBUCIÓN</h2>
      <p className="mb-4">
        Usted y los Servicios acuerdan que podemos acceder, almacenar, procesar y usar cualquier información y dato personal que proporcione.
      </p>
      <p className="mb-4">
        Al enviar sugerencias u otro feedback sobre los Servicios, acepta que podemos usar dicho feedback para cualquier propósito sin compensación.
      </p>
      <p className="mb-6">
        No reclamamos propiedad sobre sus Contribuciones. Usted retiene la plena propiedad de todas sus Contribuciones y los derechos de propiedad intelectual asociados.
      </p>

      <h2 id="sitemanage" className="text-xl font-bold text-primary mt-8 mb-3">7. GESTIÓN DE SERVICIOS</h2>
      <p className="mb-6">
        Nos reservamos el derecho de: (1) monitorear los Servicios para detectar violaciones; (2) tomar acciones legales contra quienes violen estos Términos; (3) restringir o deshabilitar contribuciones; (4) eliminar archivos o contenido excesivo; y (5) gestionar los Servicios para proteger nuestros derechos y facilitar su correcto funcionamiento.
      </p>

      <h2 id="terms" className="text-xl font-bold text-primary mt-8 mb-3">8. VIGENCIA Y TERMINACIÓN</h2>
      <p className="mb-4">
        Estos Términos permanecerán vigentes mientras use los Servicios. NOS RESERVAMOS EL DERECHO DE DENEGAR ACCESO A CUALQUIER PERSONA POR CUALQUIER RAZÓN, SIN PREVIO AVISO. Si terminamos o suspendemos su cuenta, queda prohibido registrarse nuevamente bajo cualquier nombre.
      </p>
      <p className="mb-6">
        Nos reservamos el derecho de tomar las acciones legales pertinentes, incluyendo medidas civiles, penales y cautelares.
      </p>

      <h2 id="modifications" className="text-xl font-bold text-primary mt-8 mb-3">9. MODIFICACIONES E INTERRUPCIONES</h2>
      <p className="mb-4">
        Nos reservamos el derecho de cambiar, modificar o eliminar el contenido de los Servicios en cualquier momento sin previo aviso. No seremos responsables de ninguna modificación, cambio de precio, suspensión o discontinuación de los Servicios.
      </p>
      <p className="mb-6">
        No podemos garantizar que los Servicios estén disponibles en todo momento. Podemos experimentar interrupciones por mantenimiento u otras razones. No tenemos ninguna responsabilidad por pérdidas causadas por la imposibilidad de acceder a los Servicios durante períodos de inactividad.
      </p>

      <h2 id="law" className="text-xl font-bold text-primary mt-8 mb-3">10. LEY APLICABLE</h2>
      <p className="mb-6">
        Estos Términos se regirán e interpretarán de acuerdo con las leyes de <strong>Ecuador</strong>. Usted y Klyra Works aceptan irrevocablemente que los tribunales de <strong>Ecuador</strong> tendrán jurisdicción exclusiva para resolver cualquier disputa relacionada con estos Términos.
      </p>

      <h2 id="disputes" className="text-xl font-bold text-primary mt-8 mb-3">11. RESOLUCIÓN DE DISPUTAS</h2>
      <h3 className="text-base font-semibold text-primary mb-2">Negociaciones informales</h3>
      <p className="mb-4">
        Las partes acuerdan intentar resolver cualquier disputa mediante negociación informal durante al menos <strong>30 días</strong> antes de iniciar un arbitraje. Las negociaciones informales comienzan con una notificación escrita de una parte a la otra.
      </p>
      <h3 className="text-base font-semibold text-primary mb-2">Arbitraje vinculante</h3>
      <p className="mb-4">
        Cualquier disputa que no se resuelva mediante negociación informal será referida al Centro Internacional de Arbitraje Comercial bajo la Cámara Europea de Arbitraje. El número de árbitros será <strong>1</strong>. La sede del arbitraje será <strong>Quito, Ecuador</strong>. El idioma del procedimiento será <strong>español</strong>. La ley sustantiva aplicable será la de <strong>Ecuador</strong>.
      </p>
      <h3 className="text-base font-semibold text-primary mb-2">Restricciones</h3>
      <p className="mb-4">
        El arbitraje se limitará a la disputa entre las partes individualmente. No hay derecho a arbitraje como acción colectiva o en representación del público en general.
      </p>
      <h3 className="text-base font-semibold text-primary mb-2">Excepciones</h3>
      <p className="mb-6">
        Las siguientes disputas no están sujetas a las disposiciones anteriores: (a) disputas relacionadas con derechos de propiedad intelectual; (b) alegaciones de robo, piratería o uso no autorizado; y (c) solicitudes de medidas cautelares.
      </p>

      <h2 id="corrections" className="text-xl font-bold text-primary mt-8 mb-3">12. CORRECCIONES</h2>
      <p className="mb-6">
        Puede haber información en los Servicios que contenga errores tipográficos, inexactitudes u omisiones. Nos reservamos el derecho de corregir cualquier error y actualizar la información en cualquier momento sin previo aviso.
      </p>

      <h2 id="disclaimer" className="text-xl font-bold text-primary mt-8 mb-3">13. DESCARGO DE RESPONSABILIDAD</h2>
      <p className="mb-6 uppercase text-xs">
        Los Servicios se proporcionan tal cual y según disponibilidad. En la medida permitida por la ley, renunciamos a todas las garantías expresas o implícitas en relación con los Servicios. No asumimos responsabilidad por errores, daños personales, acceso no autorizado, interrupciones, virus o pérdidas derivadas del uso de los Servicios.
      </p>

      <h2 id="liability" className="text-xl font-bold text-primary mt-8 mb-3">14. LIMITACIÓN DE RESPONSABILIDAD</h2>
      <p className="mb-6 uppercase text-xs">
        En ningún caso seremos responsables por daños directos, indirectos, consecuentes, ejemplares, incidentales o punitivos. Nuestra responsabilidad máxima hacia usted, por cualquier causa, se limitará al monto pagado por usted a nosotros durante el último mes de suscripción.
      </p>

      <h2 id="indemnification" className="text-xl font-bold text-primary mt-8 mb-3">15. INDEMNIZACIÓN</h2>
      <p className="mb-6">
        Usted acepta defender, indemnizar y eximir de responsabilidad a Klyra Works y sus empleados frente a cualquier pérdida, daño, responsabilidad o reclamo derivado de: (1) uso de los Servicios; (2) incumplimiento de estos Términos; (3) violación de derechos de terceros; o (4) cualquier acto dañino hacia otros usuarios.
      </p>

      <h2 id="userdata" className="text-xl font-bold text-primary mt-8 mb-3">16. DATOS DEL USUARIO</h2>
      <p className="mb-6">
        Mantendremos ciertos datos que transmita a los Servicios para gestionar su rendimiento. Aunque realizamos copias de seguridad de rutina, usted es el único responsable de los datos que transmite. No tenemos ninguna responsabilidad por pérdida o corrupción de dichos datos.
      </p>

      <h2 id="electronic" className="text-xl font-bold text-primary mt-8 mb-3">17. COMUNICACIONES ELECTRÓNICAS, TRANSACCIONES Y FIRMAS</h2>
      <p className="mb-6">
        Visitar los Servicios, enviarnos correos electrónicos y completar formularios en línea constituyen comunicaciones electrónicas. Usted acepta recibir comunicaciones electrónicas y que todos los acuerdos, avisos y comunicaciones que le proporcionemos electrónicamente satisfacen cualquier requisito legal de comunicación escrita.
      </p>

      <h2 id="misc" className="text-xl font-bold text-primary mt-8 mb-3">18. MISCELÁNEOS</h2>
      <p className="mb-6">
        Estos Términos Legales y cualquier política publicada por nosotros en los Servicios constituyen el acuerdo completo entre usted y nosotros. Nuestro incumplimiento de ejercer cualquier derecho no constituirá una renuncia. Si alguna disposición de estos Términos se considera inaplicable, el resto seguirá siendo válido. No existe ninguna empresa conjunta, sociedad, empleo o relación de agencia entre usted y nosotros.
      </p>

      <h2 id="contact" className="text-xl font-bold text-primary mt-8 mb-3">19. CONTÁCTENOS</h2>
      <p className="mb-2">Para resolver una queja o recibir más información sobre el uso de los Servicios, contáctenos en:</p>
      <address className="not-italic mb-8">
        <strong>Klyra Works</strong><br />
        La Maná, Cotopaxi 050202<br />
        Ecuador<br />
        <a href="mailto:contacto@klyraworks.com" className="text-blue-300 underline">contacto@klyraworks.com</a>
      </address>

      <p className="text-xs text-gray-400 mt-12 border-t pt-4">Estos Términos y Condiciones fueron generados con ayuda de Termly.</p>
    </main>
  );
}
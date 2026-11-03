export default function InformacionBasica(){
    return(         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {/* Elemento 1 */}
            <a
              href="/pagina-informativa-1"
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vinotinto"
            >
              {/* Detalle superior */}
              <span className="absolute inset-x-0 top-0 h-1 bg-vinotinto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-vinotinto/10 text-vinotinto transition-colors duration-300 group-hover:bg-vinotinto group-hover:text-white">
                  {/* Cambia este SVG por el ícono que necesites */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-vinotinto">
                  Título 1
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Breve descripción del contenido informativo que encontrará el usuario al ingresar.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-vinotinto">
                Ver más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Elemento 2 */}
            <a
              href="/pagina-informativa-2"
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vinotinto"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-vinotinto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-vinotinto/10 text-vinotinto transition-colors duration-300 group-hover:bg-vinotinto group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-vinotinto">
                  Título 2
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Explica en una línea qué información o servicio encontrará en esta sección.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-vinotinto">
                Ver más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Elemento 3 */}
            <a
              href="/pagina-informativa-3"
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vinotinto"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-vinotinto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-vinotinto/10 text-vinotinto transition-colors duration-300 group-hover:bg-vinotinto group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-vinotinto">
                  Título 3
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Usa un texto corto, claro y orientado al beneficio para el usuario.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-vinotinto">
                Ver más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Elemento 4 */}
            <a
              href="/pagina-informativa-4"
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vinotinto"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-vinotinto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-vinotinto/10 text-vinotinto transition-colors duration-300 group-hover:bg-vinotinto group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-vinotinto">
                  Título 4
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Describe brevemente el tema de la página informativa asociada.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-vinotinto">
                Ver más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
        </div>
        )
}
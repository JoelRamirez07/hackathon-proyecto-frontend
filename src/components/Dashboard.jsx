/** @format */

import React from "react";

export default function Dashboard() {
  return (
    <div className=''>
      <div className='row min-vh-100'>
        {/* Sidebar */}
        <aside className='col-md-2 bg-dark text-white p-4'>
          <h4 className='mb-4'>Plataforma IA</h4>

          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a
                className='nav-link text-white active'
                href='#'
              >
                Dashboard
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                className='nav-link text-white'
                href='#'
              >
                Fuentes
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                className='nav-link text-white'
                href='#'
              >
                Documentos
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                className='nav-link text-white'
                href='#'
              >
                Clasificaciones IA
              </a>
            </li>
          </ul>
        </aside>

        {/* Main */}
        <main className='col-md-10 bg-light p-5'>
          <h2 className='mb-4 fw-bold'>Dashboard General</h2>

          {/* KPIs */}
          <div className='row g-4 mb-4'>
            <div className='col-md-3'>
              <div className='card border-0 shadow-sm rounded-4'>
                <div className='card-body'>
                  <small className='text-muted'>URLs Procesadas</small>
                  <h3 className='fw-bold'>8,420</h3>
                  <small className='text-success'>84% de capacidad</small>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='card border-0 shadow-sm rounded-4'>
                <div className='card-body'>
                  <small className='text-muted'>PDFs Procesados</small>
                  <h3 className='fw-bold'>540</h3>
                  <small className='text-primary'>54% de capacidad</small>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='card border-0 shadow-sm rounded-4'>
                <div className='card-body'>
                  <small className='text-muted'>Duplicados Detectados</small>
                  <h3 className='fw-bold text-success'>12%</h3>
                  <small className='text-muted'>Eficiencia IA</small>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='card border-0 shadow-sm rounded-4'>
                <div className='card-body'>
                  <small className='text-muted'>Categorías Generadas</small>
                  <h3 className='fw-bold'>18</h3>
                  <small className='text-muted'>Clasificación semántica</small>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className='card border-0 shadow-sm rounded-4'>
            <div className='card-body'>
              <h5 className='fw-bold mb-3'>Últimos Documentos Procesados</h5>

              <table className='table table-hover align-middle'>
                <thead className='table-light'>
                  <tr>
                    <th>Título</th>
                    <th>Fuente</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Innovación en biotecnología</td>
                    <td>UNAM</td>
                    <td>Ciencia</td>
                    <td>
                      <span className='badge bg-success'>Procesado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Tecnología agrícola 2025</td>
                    <td>CONACYT</td>
                    <td>Tecnología</td>
                    <td>
                      <span className='badge bg-warning text-dark'>
                        En análisis
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

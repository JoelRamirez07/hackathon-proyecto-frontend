/** @format */

export default function HeaderUsuario() {
  return (
    <header className='bg-white shadow-sm py-3'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <i className='bi bi-cpu fs-3 text-primary me-2'></i>
          <h5 className='mb-0 fw-bold'>Plataforma de Inteligencia</h5>
        </div>

        <div>
          <a
            href='#'
            className='me-3 text-decoration-none text-muted'
          >
            Inicio
          </a>
          <a
            href='#'
            className='text-decoration-none text-muted'
          >
            Acerca de
          </a>
        </div>
      </div>
    </header>
  );
}

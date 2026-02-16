/** @format */

import { useState } from "react";
import HeaderUsuario from "../components/HeaderUsuario";

export default function Consulta() {
  const [query, setQuery] = useState("");
  const [respuesta, setRespuesta] = useState(null);

  const handleBuscar = () => {
    // Aquí irá la llamada a tu backend RAG
    setRespuesta({
      texto:
        "La innovación en biotecnología aplicada a la agricultura en México se enfoca en mejorar la productividad mediante cultivos resistentes y técnicas de edición genética.",
      fuentes: [
        "UNAM - Investigación 2024",
        "CONACYT - Reporte Biotecnología",
        "Revista Ciencia MX",
      ],
    });
  };

  return (
    <>
      <HeaderUsuario />
      <div className='container py-5'>
        {/* Título */}
        <div className='text-center mb-5'>
          <h1 className='fw-bold'>Consulta de Ciencia e Innovación</h1>
          <p className='text-muted'>
            Plataforma basada en datos verificados y arquitectura RAG
          </p>
        </div>

        {/* Buscador */}
        <div className='row justify-content-center mb-5'>
          <div className='col-md-8'>
            <div className='input-group input-group-lg shadow-sm'>
              <input
                type='text'
                className='form-control'
                placeholder='Ej. Innovación en biotecnología agrícola en México'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className='btn btn-primary'
                onClick={handleBuscar}
              >
                Consultar
              </button>
            </div>
          </div>
        </div>

        {/* Resultado */}
        {respuesta && (
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card shadow-sm border-0 rounded-4 mb-4'>
                <div className='card-body'>
                  <h5 className='fw-bold mb-3'>Respuesta basada en datos</h5>
                  <p>{respuesta.texto}</p>
                </div>
              </div>

              <div className='card shadow-sm border-0 rounded-4'>
                <div className='card-body'>
                  <h6 className='fw-bold mb-3'>Fuentes utilizadas</h6>
                  <ul>
                    {respuesta.fuentes.map((fuente, index) => (
                      <li key={index}>{fuente}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
}

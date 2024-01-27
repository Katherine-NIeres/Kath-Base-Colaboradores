import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Correo Electronico</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
        {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;

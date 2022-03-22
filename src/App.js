import "./App.css";
import Testimonio from "./componentes/Testimonio";
import { students } from "./data/students";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {students.map((student) => (
          <Testimonio
            nombre={student.nombre}
            pais={student.pais}
            imagen={student.imagen}
            cargo={student.cargo}
            empresa={student.empresa}
            testimonio={student.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState, Fragment } from 'react';

function Formulario() {
	return (
		<Fragment>
			<h2>Crear Cita</h2>
			<form>
				<label>Nombre Mascota</label>
				<input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />

				<label>Nombre Dueño</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre Dueño de la Mascota"
				/>

				<label>Fecha</label>
				<input type="date" className="u-full-width" name="fecha" />

				<label>Hora</label>
				<input type="time" className="u-full-width" name="hora" />

				<label>Sintomas</label>
				<textarea className="u-full-width" name="sintomas" />

				<button type="submit" className="button-primary u-full-width">
					Agregar
				</button>
			</form>
		</Fragment>
	);
}

function App() {
	// useState retorna 2 funciones
	// El state actual = this.state;
	// Función que actualiza el state this.setState();

	const [ citas, guardarCita ] = useState([]);

	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half colum">
						<Formulario />
					</div>
					<div className="one-half colum" />
				</div>
			</div>
		</Fragment>
	);
}

export default App;

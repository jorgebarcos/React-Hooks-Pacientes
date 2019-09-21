import React, { useState, Fragment } from 'react';

function Formulario({ crearCita }) {
	const [ cita, actualizarCita ] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	const actualizarState = (e) => {
		actualizarCita({
			...cita,
			[e.target.name]: e.target.value
		});
	};

	const enviarCita = (e) => {
		e.preventDefault();

		console.log(cita);
		// pasar la cita hacia el componente principal
		crearCita();

		// Reiniciar el state (reinicia el form)
	};
	return (
		<Fragment>
			<h2>Crear Cita</h2>
			<form onSubmit={enviarCita}>
				<label>Nombre Mascota</label>
				<input
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre Mascota"
					onChange={actualizarState}
				/>

				<label>Nombre Dueño</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre Dueño de la Mascota"
					onChange={actualizarState}
				/>

				<label>Fecha</label>
				<input type="date" className="u-full-width" name="fecha" onChange={actualizarState} />

				<label>Hora</label>
				<input type="time" className="u-full-width" name="hora" onChange={actualizarState} />

				<label>Sintomas</label>
				<textarea className="u-full-width" name="sintomas" onChange={actualizarState} />

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

	// Agregar las nuevas citas al state
	const crearCita = (cita) => {
		// tomar una copia del state y agregar el nuevo cliente
		const nuevasCitas = [ ...citas, cita ];
		// Almacenamos en el state
		guardarCita(nuevasCitas);
	};
	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half colum">
						<Formulario crearCita={crearCita} />
					</div>
					<div className="one-half colum" />
				</div>
			</div>
		</Fragment>
	);
}

export default App;

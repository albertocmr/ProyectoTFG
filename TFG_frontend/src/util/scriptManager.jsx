import axios from 'axios';
import { Modal } from 'bootstrap';

export const executeScriptPython = async (selectedGPXFile, setLoadingScript, setParksList) => {
    if (!selectedGPXFile) {
        //alert("Selecciona un archivo GPX antes de ejecutar el script.");
        return;
    }


    try {
        //setLoadingScript(true);
        const response = await axios.get(`https://parktracker.onrender.com/api/ejecutar-script`);

        if (response.status === 200) {
            const data = response.data;

            if (Array.isArray(data)) {
                setParksList(data);
                //alert('Script ejecutado correctamente.');

                const modalElement = document.getElementById('parksModal');
                modalElement.style.display = 'block';
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                throw new Error("La API no devolvió una lista válida de parques.");
            }
        } else {
            throw new Error(`Error HTTP: ${response.status}`);
        }

    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("Necesitas loguearte para poder ejecutar el script.");
            return;
        }
        alert(`Error al ejecutar el script: ${error.message}`);
    } finally {
        setLoadingScript(false);
    }
};
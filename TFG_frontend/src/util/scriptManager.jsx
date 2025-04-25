import { Modal } from 'bootstrap';

export const executeScriptPython = async (selectedGPXFile, setLoadingScript, setParksList) => {
    if (!selectedGPXFile) {
        alert("Selecciona un archivo GPX antes de ejecutar el script.");
        return;
    }

    setLoadingScript(true);

    try {
        const response = await fetch('http://localhost:8080/api/ejecutar-script');

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("La API no devolvió una lista válida de parques.");
        }

        setParksList(data);
        alert('Script ejecutado correctamente.');

        const modalElement = document.getElementById('parksModal');
        modalElement.style.display = 'block';
        const modal = new Modal(modalElement);
        modal.show();


    } catch (error) {
        alert(`Error al ejecutar el script: ${error.message}`);
    } finally {
        setLoadingScript(false);
    }
};
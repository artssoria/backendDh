import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const ApplicantModal = ({ isOpen, onRequestClose, applicant }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalles del Aspirante"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header">
                <h2>{applicant?.first_name} {applicant?.last_name}</h2>
                <button onClick={onRequestClose} className="close-button">X</button>
            </div>
            <div className="modal-body">
                <p><strong>Teléfono:</strong> {applicant?.phone_number || 'No disponible'}</p>
                <p><strong>Provincia:</strong> {applicant?.locations?.province || 'No disponible'}</p>
                <p><strong>Departamento:</strong> {applicant?.locations?.department || 'No disponible'}</p>
                <p><strong>Localidad:</strong> {applicant?.locations?.city || 'No disponible'}</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" className="form-control" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Correo</button>
                </form>
            </div>
        </Modal>
    );
};

export default ApplicantModal;
import React from "react";
import './css/Form.css'
import FormInputs from "../../components/FormInputs/FormInputs";

const Form = () => {
    return(
        <section id="form">
            <div className="formH2">
            <h2 id="form-h2">Faça sua <span className="span">Reserva</span></h2>
            </div>
            <FormInputs />
        </section>
    );
}
export default Form;
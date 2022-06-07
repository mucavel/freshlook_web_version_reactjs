import React, { useRef } from "react";
import './css/FormInputs.css'

const FormInputs = () => {
    const nameRef = useRef('')
    const telRef = useRef('')
    const ageRef = useRef('')
    const hairstyleRef = useRef('')
    const priceRef = useRef('')
    const dateRef = useRef('')
    const notesRef = useRef('')

    const handleClick = (e) =>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(telRef.current.value)
        console.log(ageRef.current.value)
        console.log(hairstyleRef.current.value)
        console.log(priceRef.current.value)
        console.log(dateRef.current.value)
        console.log(notesRef.current.value)
        
    }

    return(
        <div className="formulario-reserva-container">
            <div className="form-fader">
                <form id="formulario">

                    {/* -------------------------------BEGINNING LEFT FORM ----------------------------*/}

                    <div id="left-form" className="form">
                        <label htmlFor="nome">Nome<span className="asteristico"> *</span></label>
                        <input ref={nameRef} type="text" className="form-item" name="nome" id="nome" placeholder="Nome"
                            autoComplete="off" required maxLength="30" />
                        <label htmlFor="telefone">Telefone<span className="asteristico"> *</span></label>
                        <input ref={telRef} type="tel" className="form-item" name="telefone" id="telefone" placeholder="Telefone"
                            autoComplete="off" required maxLength="9" />
                        <label htmlFor="idade">Idade<span className="asteristico"> *</span></label>
                        <input ref={ageRef} type="text" pattern="\d*" className="form-item" name="idade" id="idade" placeholder="Idade (6-80 anos)"
                            autoComplete="off" required maxLength ="2" />
                        <label htmlFor="corte">Corte<span className="asteristico"> *</span></label>
                        <select ref={hairstyleRef} className="select" name="corte" id="corte" required>
                            <option value="">Selecione o corte</option>
                            <option value="Juba">Juba</option>
                            <option value="Carreca">Carreca</option>
                            <option value="Punk">Punk</option>
                            <option value="Escovinha Grossa">Escovinha Grossa</option>
                            <option value="Escovinha Fina">Escovinha Fina</option>
                            <option value="Coloracao de Cabelo">Coloração de Cabelo</option>
                            <option value="Barba c/ Navalha">Barba c/ Navalha</option>
                            <option value="Barba c/ Maquina">Barba c/ Máquina</option>
                            <option value="Cabelo e Barba c/ Navalha">Cabelo e Barba c/ Navalha</option>
                            <option value="Cabelo e Barba c/ Maquina">Cabelo e Barba c/ Máquina</option>
                            <option value="Mascara Facial">Máscara Facial</option>
                        </select>
                        <label htmlFor="preco">Preço</label>
                        <div id="preco" className="preco"><span ref={priceRef} id="valor" className="valor"></span> </div>  
                    </div>  

                    {/* ---------------------------------END LEFT FORM ---------------------------------*/}


                    {/* ------------------------------BEGINNING RIGHT FORM ------------------------------*/}

                    <div id="right-form" className="form">
                            <label htmlFor="dia">Data<span className="asteristico"> *</span></label>
                            <input ref={dateRef} type="date" className="form-item" name="dia" id="dia" required />
                            <label htmlFor="observacoes">Observações {'(opcional)'}</label>
                            <textarea ref={notesRef} className="observacoes" name="observacoes" id="observacoes" cols="30" rows="9"
                                placeholder="Observações( max. 120 )" maxLength="120"></textarea>
                           <input type="submit" className="form-item" id="btn-submit" value="Enviar" onClick={(e) => {handleClick(e)}}/>
                        </div>

                    {/* --------------------------------END RIGHT FORM ----------------------------------*/}
                </form>
            </div>
        </div> 
    );
}
export default FormInputs;
import React, { useRef } from "react";
import './css/FormInputs.css'
import Axios from 'axios';

const FormInputs = () => {

    const nameRef = useRef('')
    const telRef = useRef('')
    const ageRef = useRef('')
    const hairstyleRef = useRef('')
    const priceRef = useRef('')
    const dateRef = useRef('')
    const timeRef = useRef('')
    const notesRef = useRef('')

    //SET MAX SELECTABLE DATE TO 31-12-2022 ON INPUT-DATE    
    let todayDate = new Date();
    let year = todayDate.getFullYear();
    let max_date = year + '-' + 12 + '-' + 31

    //BLOCK PASTE DATES ON INPUT-DATE
    let min_date = new Date().toISOString().split("T")[0];

    //SHOW PRICE IN "PRECO" FORM FIELD
    let price = 'Sem preco'
    const setPrice  = () => {
        
        switch (hairstyleRef.current.value) {
            case "":
                priceRef.current.innerText = "";
                break;
            case "Juba":
                priceRef.current.innerText = "100 Meticais";
                price = "100 Meticais";
                break;
            case "Carreca":
                priceRef.current.innerText = "120 Meticais";
                price = "120 Meticais";
                break;
            case "Punk":
                priceRef.current.innerText = "170 Meticais";
                price = "170 Meticais";
                break; 
            case "Escovinha Grossa":
                priceRef.current.innerText = "150 Meticais";
                price = "150 Meticais";
                break; 
            case "Escovinha Fina":
                priceRef.current.innerText = "130 Meticais";
                price = "130 Meticais";
                break;
            case "Coloracao de Cabelo":
                priceRef.current.innerText = "200 Meticais";
                price = "200 Meticais";
                break;
            case "Barba c/ Navalha":
                priceRef.current.innerText = "150 Meticais";
                price = "150 Meticais";
                break;
            case "Barba c/ Maquina":
                priceRef.current.innerText = "100 Meticais";
                price = "100 Meticais";
                break;
            case "Cabelo e Barba c/ Maquina":
                priceRef.current.innerText = "250 Meticais";
                price = "250 Meticais";
                break;
            case "Cabelo e Barba c/ Navalha":
                priceRef.current.innerText = "300 Meticais";
                price = "300 Meticais";
                break;
            case "Mascara Facial":
                priceRef.current.innerText = "400 Meticais";
                price = "400 Meticais";
                break;
            default:
                break;
        }
    }
    //SET DINAMIC TIME ON INPUT-TIME
    const setTime = (date) => {
        let day = new Date(date);
        let dayWeek = day.getDay();
        let minTime = '';
        let maxTime = '';

        if(dayWeek >=1 && dayWeek <=5){
            minTime = 8;
            maxTime = 22;
            removeCurretTime();
            DinamicTime();       
        }else{
            minTime = 9;
            maxTime = 19;
            removeCurretTime();
            DinamicTime();  
        }

    function DinamicTime(){
        for(let i = minTime; i < maxTime; i++){
            let opt = document.createElement("option");
            let opt2 = document.createElement("option");
            opt.value = i+":00";
            opt2.value = i+":30";
            opt.innerHTML = (i+":00");
            opt2.innerHTML = (i+ ":30");
            timeRef.current.appendChild(opt);
            timeRef.current.appendChild(opt2);
        }
    }

    function removeCurretTime(){
        let length = timeRef.current.options.length;
        for (let j = length-1; j >= 0; j--) {
          timeRef.current.options[j] = null;
        }    
    }
}

    //SEND DATA TO DATABASE
    const handleClick = (e) => {
        e.preventDefault()
        const clientName = nameRef.current.value
        const clientTel = telRef.current.value
        const clientAge = ageRef.current.value
        const clientHairStyle = hairstyleRef.current.value
        const sessionDate = dateRef.current.value 
        const sessionTime = timeRef.current.value
        const clientNotes = notesRef.current.value

        const regex = /^[\p{L}\s]+$/u

        if(
            clientName === '' || clientTel === '' || clientAge === '' ||
            clientHairStyle === '' || sessionDate === ''
        ){
            alert('Preencha todos os campos!')
        }else if(!clientName.match(regex)){
            alert('Nome inválido!')
        }else if(clientTel.length !== 9){
            alert('Número incompleto!')
        }else if(
                clientTel.substring(0,2) === '82' || clientTel.substring(0,2) === '83'|| 
                clientTel.substring(0,2) === '84' || clientTel.substring(0,2) === '85'|| 
                clientTel.substring(0,2) === '86' || clientTel.substring(0,2) === '87'
                ){
                    if(clientAge < 6 || clientAge > 80){
                        alert('Idade inválida')
                    }else{
                        Axios.post("http://localhost:3001/insert", {
                        clientName : clientName,
                        clientTel : clientTel,
                        clientAge : clientAge,
                        clientHairStyle : clientHairStyle,
                        price : price,
                        sessionDate : sessionDate,
                        sessionTime: sessionTime,
                        clientNotes : clientNotes
                        })
                        alert('Agendado com Sucesso!')
                        // window.location.reload(true)
                    }
                    
        }else{
            alert("Número inválido!")
             
        }
    }

    return(
        <div className="formulario-reserva-container">
            <div className="form-fader">
                <form id="formulario" method="POST">

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
                        <label htmlFor="corte">Corte/Serviço<span className="asteristico"> *</span></label>
                        <select ref={hairstyleRef} className="select" name="corte" id="corte" required onChange={setPrice}>
                            <option value="">Selecione o corte/serviço</option>
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
                            <input ref={dateRef} type="date" className="form-item" name="dia" id="dia" 
                            min={min_date} max={max_date} required onChange={(date) => setTime(date.target.value)} />
                            <label htmlFor="time">Hora<span className="asteristico"> *</span></label>
                            <select ref={timeRef} name="time" id="time" required></select>
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
        // Axios.post("http://localhost:3001/insert", {
        //     clientName : clientName,
        //     clientTel : clientTel,
        //     clientAge : clientAge,
        //     clientHairStyle : clientHairStyle,
        //     price : price,
        //     sessionDate : sessionDate,
        //     clientNotes : clientNotes
        // })
        // window.location.reload(true)
            // console.log(nameRef.current.value)
            // console.log(telRef.current.value)
            // console.log(ageRef.current.value)
            // console.log(hairstyleRef.current.value)
            // console.log(price)
            // console.log(dateRef.current.value)
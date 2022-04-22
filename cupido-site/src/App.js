import React, {useState} from 'react';
import './App.css';;
 
function App() {
  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event){
      event.preventDefault();
      console.log(campos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://bjcce0a41k.execute-api.sa-east-1.amazonaws.com/default/sendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: campos.nome,
          mensagem : campos.mensagem,
          email : campos.email,
        }),
      }
    );
  };

  return (
    <div className="container">
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange}/>
 
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange}/>
 
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>
 
        <input type="submit" onClick={handleSubmit} value="Enviar" />
      </form>
    </div>
  );
}
 
export default App;
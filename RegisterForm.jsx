import { useState } from "react";
import {ReactComponent as successIcon} from '../style/partion/img/success-image.svg';

function RegisterForm() {
  const [InputForm, setInputForm] = useState({
    name: '',
    email: '',
    phon: '',
    position: '',
    file: null,
  });

  const [isSuccess, setIsSuccess] = useState(false);  // Состояние для успешной регистрации
  const [isFormVisible, setIsFormVisible] = useState(true);  // Состояние для скрытия формы

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!InputForm.name || !InputForm.email || !InputForm.phon || !InputForm.position) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: InputForm.name,
        email: InputForm.email,
        phone: InputForm.phon,
        position: InputForm.position,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ Ответ от сервера:", data);
       

        // Устанавливаем статус успешной регистрации
        setIsSuccess(true);

        // Скрыть форму после отправки
        setIsFormVisible(false);

        // Очистить форму после успешной отправки
        setInputForm({
          name: '',
          email: '',
          phon: '',
          position: '',
          file: null,
        });
      })
      .catch(err => {
        console.error("Ошибка при отправке:", err);
        alert("Ошибка при отправке");
      });
  };


  return (
    <div className="reg-form-container">
      <div className="register-form">
        {/* Если регистрация прошла успешно, показываем сообщение и картинку */}
        {isSuccess && (
          <div className="success-message">
            <h3> Your registration was successful ! </h3>
            <img
              src="/img/success-image.svg"  
              alt="Success"  />
          </div>
        )}


        {isFormVisible && (
          <form id="registration" className="input-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="input-place"
              placeholder="Your name"
              value={InputForm.name}
              onChange={(e) => setInputForm({ ...InputForm, name: e.target.value })}
            />
          </div>

          <div>
            <input
              className="input-place"
              placeholder="Email"
              value={InputForm.email}
              onChange={(e) => setInputForm({ ...InputForm, email: e.target.value })}
            />
          </div>

          <div>
            <input
              className="input-place"
              placeholder="Phone"
              value={InputForm.phon}
              onChange={(e) => setInputForm({ ...InputForm, phon: e.target.value })}
            />
            <h5>+38 (XXX) XXX - XX - XX</h5>
          </div>

          
          <div className="position-container">
            <span>Select your position</span>

            {['Frontend Developer', 'Backend Developer', 'Designer', 'QA'].map((role) => (
              <div key={role}>
                <input
                  className="positions"
                  type="radio"
                  name="position"
                  value={role}
                  checked={InputForm.position === role}
                  onChange={(e) => setInputForm({ ...InputForm, position: e.target.value })}
                />
                <span>{role}</span>
              </div>
            ))}
          </div>



          <div className="Upload-input">
            <p>Upload your photo</p>
            <input
              className="styled-file-input"
              id="file-input"
              type="file"
              multiple
              onChange={(e) => setInputForm({ ...InputForm, file: e.target.files[0] })}
            />
            <label htmlFor="file-input" className="upload-btn">Upload</label> 
          </div>

          <div className="form-signup-btn">
            <button type="submit" className="btn signup-btn">Sign Up</button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;

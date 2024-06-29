import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

     const [result, setResult] = React.useState("");

     const onSubmit = async (event) => {
       event.preventDefault();
       setResult("Sending....");
       const formData = new FormData(event.target);
   
       formData.append("access_key", "0cb21a0a-fe84-484d-a0ee-4e3aaeb55ae7");
   
       const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData
       });
   
       const data = await response.json();
   
       if (data.success) {
          // console.log("Success", data);
         setResult("Form Submitted Successfully");
         event.target.reset();
       } else {
         console.log("Error", data);
         setResult(data.message);
       }
     };


  return (
    <div className='contact'>
      <div className="contact-col">
          <h3>Отправьте нам сообщение <img src={msg_icon} alt="" /></h3>
          <p><b>Режим работы:</b></p>
          <br></br>
          <p>Понедельник-пятница: 9:00 - 17:30</p>
          <br></br>
          <p>Суббота: 9:00 - 17:00</p>
          <br></br>
               <ul>
                    <li><img src={mail_icon} alt="" />a.teploblok@mail.ru</li>
                    <li><img src={phone_icon} alt="" />+7 (707) 101 83 31</li>
                    <li><img src={location_icon} alt="" />г. Алматы, ул. Рыскулова 130 а, 2 этаж, офис 1 (пересечение ул Гончарова)</li>
               </ul>
      </div>
      <div className="contact-col">
          <form onSubmit={onSubmit}>
               <label>Ваше имя</label>
               <input type='text' name='name' placeholder='Ваше имя' 
               required/>
               <label>Номер телефона</label>
               <input type='tel' name='phone' placeholder='Ваш телефон' required/>
               <label>Напишите ваше сообщение</label>
               <textarea name='message' rows={6} placeholder='Сообщение' re></textarea>
               <button type='submit' className='btn dark-btn'>Принять<img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

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
                    
                    <li><iframe width="550" height="350" frameborder="0" scrolling="no" 
                      marginheight="0" marginwidth="0" 
                      src="https://maps.google.com/maps?width=550&amp;height=350
                      &amp;hl=en&amp;q=%20%D0%B3.%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B
                      ,%20%D1%83%D0%BB.%20%D0%A0%D1%8B%D1%81%D0%BA%D1%83%D0%BB%D0%BE%D0%B2%D0%B0%20130%20%D0%B0
                      ,%202%20%D1%8D%D1%82%D0%B0%D0%B6
                      ,%20%D0%BE%D1%84%D0%B8%D1%81%201%20
                      (%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%83%D
                      0%BB%20%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0)
                      +(My%20Bus%22ADIN%22%20%D0%B3%D0%B0%D0%B7%D0%BE%D0%B1%D0%BB%D0%
                      BE%D0%BA%D0%B8%20%D0%B8%20%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%B1%D0%BB%D
                      0%BE%D0%BA%D0%B8%20%D0%B2%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8Biness%20Name)
                      &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps devices</a></iframe></li>
                  
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

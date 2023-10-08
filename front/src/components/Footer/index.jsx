import React from 'react';
import { PiInstagramLogoThin, PiWhatsappLogoThin } from 'react-icons/pi';
import s from './index.module.css';

export default function Footer() {

  // const iframe_style = {
  //   border: 'none'
  // }

  return (
    <div className={[s.footer, 'wrapper_1380'].join(' ')}>
      <div className={s.footer_top}>
        <div className={s.footer_top_left}>
          <h2>Contact</h2>
          <p>+49 999 999 99 99</p>
         <div className={s.social_media_container}>
            <div className={s.social_media_info}>
              <a href="#"><PiInstagramLogoThin/></a>
              <p>instagram</p>
            </div>
            <div className={s.social_media_info}>
              <a href="#"><PiWhatsappLogoThin/></a>
              <p>WhatsApp</p>
            </div>
         </div>
        </div>
        <div className={s.footer_top_right}>
          <h2>Address</h2>
          <div>
            <p><a href='https://www.google.com/search?q=telranDE' target="_blank">Linkstraße 2, 8 OG, 10785,</a></p>
            <p><a href='https://www.google.com/search?q=telranDE' target="_blank">Berlin, Deutschland</a></p> 
          </div>
          <div>
            <p>Working Hours:</p>
            <p>24 hours a day</p>
          </div>
        </div>
      </div>
       <iframe frameBorder='no' width="100%" height="525" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202%20Berlin+(telranDE)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>

  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import img_main from './images/img_main.jpg';
import gallery_1 from './images/gallery_1.jpg';

import fbg_1 from './images/fbg_1.jpg';
import gallery_2 from './images/gallery_2.jpg';
import gallery_3 from './images/gallery_3.jpg';


function Services() {
  return (
<div class="main">
  <div class="header">
    <div class="header_resize">
      <div class="logo">
        <h1><NavLink to="/index" activeStyle><span>Greeny</span>Box <small>Put your best slogan here </small></NavLink></h1>
      </div>
      <div class="menu">
        <ul>
          <li><NavLink to="/index" activeStyle>Home</NavLink></li>
          <li><NavLink to="/services" activeStyle>Services</NavLink></li>
          <li><NavLink to="/about" activeStyle>About Us</NavLink></li>
          <li><NavLink to="/contact" activeStyle>Contact Us</NavLink></li>
        </ul>
      </div>
      <div class="clr"></div>
    </div>
    <div class="headert_text_resize">
      <div class="headert_text">
        <h2>Read me first... </h2>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac magna a turpis ornare aliquam id hendrerit nisl. </span></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac magna a turpis ornare aliquam id hendrerit nisl. Pellentesque adipiscing blandit mollis.</p>
      </div>
      <img src={img_main} alt="" width="455" height="273" />
      <div class="clr"></div>
    </div>
  </div>
  <div class="body">
    <div class="body_resize">
      <div class="left">
        <div class="resize_bg">
          <h2> Services <span>1</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. <br />
            Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. </p>
          <p> <a href="#">Read more • Comments (2)</a> </p>
          <h2>Services <span>2</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. <br />
            Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. </p>
          <p> <a href="#">Read more • Comments (2)</a></p>
          <h2>Services <span>3</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. <br />
            Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque. Curabitur vel urna. In tristique orci porttitor ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. </p>
          <p> <a href="#">Read more • Comments (2)</a></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div class="right">
        <div class="resize_bg">
          <h2>Sidebar<span> Menu</span></h2>
          <ul>
            <li><a href="#">Services 1</a></li>
            <li><a href="#">Services 2</a></li>
            <li><a href="#">Services 3</a></li>
            <li><a href="#">Services 4</a></li>
            <li><a href="#">Services 5</a></li>
            <li><a href="#">Services 6</a></li>
          </ul>
        </div>
        <div class="resize_bg">
          <h2>Sponsors</h2>
          <ul class="sponsors">
            <li class="sponsors"><a href="#">Lorem ipsum dolor</a><br />
              Donec libero. Suspendisse bibendum</li>
            <li class="sponsors"><a href="#">Donec mattis</a><br />
              Phasellus suscipit, leo a pharetra</li>
            <li class="sponsors"><a href="#">Dui pede condimentum</a><br />
              Tellus eleifend magna eget</li>
            <li class="sponsors"><a href="#">Condimentum lorem</a><br />
              Curabitur vel urna in tristique</li>
            <li class="sponsors"><a href="#">Fringilla velit magna</a><br />
              Cras id urna orbi tincidunt orci ac</li>
            <li class="sponsors"><a href="#">Suspendisse bibendum</a><br />
              purus nec placerat bibendum</li>
          </ul>
        </div>
      </div>
      <div class="clr"></div>
    </div>
  </div>
  <div class="FBG">
    <div class="FBG_resize">
      <div class="blok">
        <h2>Image <span>Gallery</span></h2>
        <img src={gallery_1} alt="" width="95" height="94" /><img src={gallery_2} alt="" width="95" height="94" /><img src={gallery_3} alt="" width="95" height="94" /> <img src={gallery_1} alt="" width="95" height="94" />
        <div class="clr"></div>
        <h2>Lorem <span>ipsum</span> </h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. <a href="#">Cras id urna</a>. Morbi tincidunt, orci ac convallis aliquam, lectus turpis. varius lorem, eu posuere nunc justo tempus leo. </p>
      </div>
      <div class="blok">
        <h2>About</h2>
        <img src={fbg_1} alt="" width="96" height="96" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. <a href="#">Learn more...</a><br />
        </p>
      </div>
      <div class="blok">
        <h2>Contact</h2>
        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.<br />
          Donec mattis, purus nec placerat ibendum, dui pede condimentum odio, ac blandit ante orci ut diam.<br />
          <br />
          E-mail: <a href="#">support@yoursite.com</a><br />
          Telephone : +1 (123) 444-5677<br />
          +1 (123) 444-5677<br />
          +1 (123) 444-5677</p>
      </div>
      <div class="clr"></div>
    </div>
  </div>
  <div class="footer">
    <div class="footer_resize">
      <p class="lf">Copyright &copy; <a href="#">Domain Name</a>. All Rights Reserved</p>
      <p class="rf">Get More <a target="_blank" href="http://www.free-css.com/">Free CSS Templates</a> by <a target="_blank" href="http://www.hotwebsitetemplates.net/">HotWebsiteTemplates</a></p>
      <div class="clr"></div>
    </div>
    <div class="clr"></div>
  </div>
</div>
  );
}
export default Services;

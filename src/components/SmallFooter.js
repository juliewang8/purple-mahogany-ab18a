import React from 'react';
import config from '../../config';
export default function SmallFooter() {
  return (
    <section id="footer">
      <div className="inner">
      <ul className="icons">
									<li><a href="/#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="/#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
									<li><a href="/#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="/#" className="icon fa-github"><span className="label">Github</span></a></li>
								</ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

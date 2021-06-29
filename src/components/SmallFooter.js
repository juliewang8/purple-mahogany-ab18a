import React from 'react';
import config from '../../config';
export default function SmallFooter() {
  return (
    <section id="footer">
      <div className="inner">
        <ul className="contact">
          <li className="fa-home">""</li>
          <li className="fa-phone"></li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
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

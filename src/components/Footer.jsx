import React from "react";
import logo from '../img/thingslinker_logo.svg'
// import facebook from '../img/icons8-facebook.svg'
// import twitter from '../img/icons8-twitter.svg'
// import github from '../img/icons8-github 1.svg'
// import instagram from '../img/icons8-instagram.svg'

const Footer = () => {

    const footerLinks = [
        {
          title: "About",
          links: [
            { title: "How it works", url: "/" },
            { title: "Featured", url: "/" },
            { title: "Partnership", url: "/" },
            { title: "Bussiness Relation", url: "/" },
          ],
        },
        {
          title: "Contact",
          links: [
            { title: "+91-00000-00000", url: "/" },
            { title: "thingslinker@gmail.com", url: "/" },
            { title: `Thingslinker, 403 - Satyamev Elite, Bopal, Ahmedabad`, url: "/" },
            // { title: "Invite a friend", url: "/" },
          ],
        },
        {
          title: "Socials",
          links: [
            { title: "Discord", url: "/" },
            { title: "Instagram", url: "/" },
            { title: "Twitter", url: "/" },
            { title: "Facebook", url: "/" },
          ],
        },
      ];

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          ></img>
          <p className="text-base text-gray-700">
            Thingslinker 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
            
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 Thingslinker. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <a href="/" className="text-gray-500">
            Privacy Policy
          </a>
          <a href="/" className="text-gray-500">
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

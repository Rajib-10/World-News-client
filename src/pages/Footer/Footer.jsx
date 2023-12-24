import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <div className="flex justify-center items-center space-x-5">
          <a
            href="https://www.facebook.com/atikul.rajib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-atiqul-islam-rajib-013a92298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>

          <a
            href="https://github.com/Rajib-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" rounded-full text-black" size={23} />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; 2023 World NEWS Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

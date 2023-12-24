/* eslint-disable react/jsx-no-target-blank */
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div>
      <div className="fixed left-1 top-1/2 transform -translate-y-1/2">
        <a href="https://github.com/Rajib-10" target="_blank">
          <FaGithub className="mb-3 rounded-full text-black" size={25} />
        </a>
        <a href="https://www.linkedin.com/in/md-atiqul-islam-rajib-013a92298/" target="_blank">
          <FaLinkedin className="text-[#0077B5]" size={25} />
        </a>
        <a href="https://www.facebook.com/atikul.rajib" target="_blank">
          <FaFacebook className="mt-3 text-[#1877F2]" size={25} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;

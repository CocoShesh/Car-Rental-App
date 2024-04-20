import React from "react";
const icons = [
  "/logos/facebook.png",
  "/logos/instagram.png",
  "/logos/gmail.png",
  "/logos/tik-tok.png",
];
const SocialIcons = () => {
  return (
    <section className="flex gap-10 items-center  max-sm:gap-5 justify-around mx-5">
      {icons.map((icon, index) => (
        <section
          key={index}
          className=" p-2 rounded-xl h-fit w-fit border border-[#81dbe12f] shadow cursor-pointer"
        >
          <img
            src={icon}
            alt={`Social Media Icon ${index}`}
            className="w-8 h-8 "
          />
        </section>
      ))}
    </section>
  );
};

export default SocialIcons;

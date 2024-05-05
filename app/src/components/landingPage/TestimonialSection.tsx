import React from "react";

function TestimonialSection() {
  return (
    <div className="mt-20 mx-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="">
          <button className="flex items-center  bg-[#f4ded2] text-[#526D82]   rounded-3xl  mt-5 p-2  ">
            <span className="mr-auto flex-grow text-[10px] lg:text-l lg:font-bold">
              {" "}
              Testimonials
            </span>
          </button>

          <h2 className="font-bold mt-5">What People Are Saying</h2>
        </div>
        <div className="border shadow-3xl ">
          <p className=" md:text-sm text-xs md:my-14 md:mx-10 ">
            Très efficaces, rapides, toujours disponibles et réactifs ! J'ai
            trouvé la bonne personne et sa gestion est top via la plateforme. Je
            recommande vivement.Très efficaces, rapides, toujours disponibles et
            réactifs ! J'ai trouvé la bonne personne et sa gestion est top via
            la plateforme. Je recommande vivement.
          </p>

          <img
            className=" "
            src="../../../landingPage/avater-testimonial-1.png"
            alt=""
          />
        </div>
        <div className="border border-solid ">
          <p className=" md:text-sm text-xs  md:my-14 md:mx-10">
            Le service déjà à la base est très utile pour trouver une nounou
            mais en plus, la simplification des déclarations est top.Très
            efficaces, rapides, toujours disponibles et réactifs ! J'ai trouvé
            la bonne personne et sa gestion est top via la plateforme. Je
            recommande vivement”
          </p>
          <img
            className=""
            src="../../../landingPage/avater-testimonial-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;

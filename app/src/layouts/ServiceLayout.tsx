import React from 'react';
import { Carousel } from 'antd';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import '../components/common/carousel.css';
import { LuGauge } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TfiSupport } from "react-icons/tfi";
import { FaChildren } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaPersonCane } from "react-icons/fa6";
import { MdElderly } from "react-icons/md";
import { BiBody } from "react-icons/bi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const ServiceLayout: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-20 mt-8">
          <div className="flex-1 max-w-md h-full">
            <img
              alt="Service Image"
              width={600}
              height={550}
              className="rounded-lg object-cover w-full "
              src="../../aboutPage/about1.png"
              style={{
                aspectRatio: "600/550",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-1 space-y-6 max-w-md">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-orange-500">Service de Garde d'Enfants</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Profitez d'un service de garde d'enfants de haute qualité avec
                des fonctionnalités exclusives et un soutien dédié.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center font-semibold gap-2">
                    <LuGauge className="w-7 h-7 text-green-500" />
                    <span>Garde Flexible</span>
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Obtenez un service de garde d'enfants rapide et flexible
                  adapté à vos horaires.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <RiSecurePaymentLine className="w-7 h-7 text-orange-500" />
                    Sécurité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Vos paiements et informations personnelles sont en sécurité
                  avec nous.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <TfiSupport className="w-6 h-6 text-green-500" />
                    Assistance
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Obtenez un soutien adapté à vos besoins grâce à notre équipe
                  dédiée.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <FaChildren className="w-7 h-7 text-orange-500" />
                    Activités
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Développez vos enfants avec des activités enrichissantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-20 mt-8">
          <div className="flex-1 max-w-md h-full">
            <img
              alt="Service Image"
              width={600}
              height={550}
              className="rounded-lg object-cover w-full "
              src="../../Services/soutien.jpg"
              style={{
                aspectRatio: "600/550",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-1 space-y-6 max-w-md">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-orange-500">Soutien Scolaire</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
              Bénéficiez d'un accompagnement sur mesure et de qualité pour la réussite scolaire de vos enfants.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center font-semibold gap-2">
                    <LuGauge className="w-7 h-7 text-green-500" />
                    <span>Flexibilité</span>
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Des horaires adaptés à vos besoins.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <MdOutlineSecurity className="w-6 h-6 text-orange-500" />
                    Confidentialité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Confidentialité des données garantie.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <FaBookOpen className="w-5 h-5 text-green-500" />
                    Assistance 
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Un support adapté à vos besoins.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <FaSwatchbook className="w-5 h-5 text-orange-500" />
                    Activités
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Des activités stimulantes pour apprendre.</p>
              </div>
            </div>
          </div>
        </div></div>
      <div><div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-20 mt-8">
          <div className="flex-1 max-w-md h-full">
            <img
              alt="Service Image"
              width={600}
              height={550}
              className="rounded-lg object-cover w-full "
              src="../../aboutPage/vie.jpg"
              style={{
                aspectRatio: "600/550",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-1 space-y-6 max-w-md">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-orange-500">Aide à la Personne</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
              Profitez d'une assistance personnalisée et de qualité pour vos besoins quotidiens.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center font-semibold gap-2">
                    <LuGauge className="w-7 h-7 text-green-500" />
                    <span>Flexibilité</span>
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Des horaires adaptés à votre emploi du temps.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <BiBody className="w-7 h-7 text-orange-500" />
                    Sécurité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Votre sécurité et votre bien-être sont notre priorité.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <FaPersonCane className="w-6 h-6 text-green-500" />
                    Soutien 
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Un accompagnement adapté à vos besoins spécifiques.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <MdElderly className="w-7 h-7 text-orange-500" />
                    Activités 
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Des activités stimulantes pour votre bien-être.
                </p>
              </div>
            </div>
          </div>
        </div></div>
      <div><div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-20 mt-8">
          <div className="flex-1 max-w-md h-full">
            <img
              alt="Service Image"
              width={600}
              height={550}
              className="rounded-lg object-cover w-full "
              src="../../aboutPage/Ménage.jpg"
              style={{
                aspectRatio: "600/550",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-1 space-y-6 max-w-md">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-orange-500">Service de Ménage</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
              Profitez d'un nettoyage efficace et personnalisé pour votre espace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center font-semibold gap-2">
                    <LuGauge className="w-7 h-7 text-green-500" />
                    <span>Flexibilité</span>
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Des horaires adaptés à vos besoins de ménage.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <GiHouseKeys className="w-7 h-7 text-orange-500" />
                    Sécurité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Assurez la sécurité et la propreté de votre maison.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <MdOutlineCleaningServices className="w-6 h-6 text-green-500" />
                    Qualité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Un nettoyage méticuleux pour un environnement propre et sain.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <h3 className="flex text-xl justify-center items-center gap-2 font-semibold">
                    <IoShieldCheckmarkSharp className="w-6 h-6 text-orange-500" />
                    Efficacité
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                Un nettoyage rapide et efficace pour plus de confort.
                </p>
              </div>
            </div>
          </div>
        </div></div>
    </Carousel>
  );
};

export default ServiceLayout;

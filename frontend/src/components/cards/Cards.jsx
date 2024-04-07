import React from "react";
import { Link } from "react-router-dom";
import I1 from '../../assets/Images/I1.png';
import I2 from '../../assets/Images/I2.png';
import I3 from '../../assets/Images/I3.png';
import I4 from '../../assets/Images/I4.png';
import I5 from '../../assets/Images/I5.png';
import I6 from '../../assets/Images/I6.png';

function Cards(props) {
  return (
    <div className="pt-24">
        <div className="container text-black font-bold text-7xl mx-8">{props.hello.title}</div>
      <div className="title-block mx-auto text-center py-3">
        
        <Link to="#" className="text-black font-bold text-4xl">
          {props.hello.cateo1}
        </Link>
      </div>

      <section className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <a href={(props.hello.unit1Link)} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={props.hello.unit1Icon} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />
{props.hello.unit1}</a>
            <a href={props.hello.unit2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I2} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit2}</a>
            <a href={props.hello.unit3Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I3} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit3}</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <a href={props.hello.unit4Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I4} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit4}</a>
            <a href={props.hello.unit5Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I5} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit5}</a>
            <a href={props.hello.unit6Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I6} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit6}</a>
          </div>
        </div>
      </section>

      <div className="title-block mx-auto text-center py-5">
        <Link to="#" className="text-black font-bold text-4xl">
        {props.hello.cateo2}
        </Link>
      </div>

      <section className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <a href={props.hello.unit1Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I1} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit1}</a>
            <a href={props.hello.unit2Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I2} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit2}</a>
            <a href={props.hello.unit3Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I3} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit3}</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <a href={props.hello.unit4Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I4} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit4}</a>
            <a href={props.hello.unit5Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I5} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit5}</a>
            <a href={props.hello.unit6Cat2Link} className="text-red-700 font-bold py-2 px-4 rounded-lg block"><img src={I6} alt="Hero Image" className="w-10 mb-4 md:mb-0 md:inline-block md:mr-4" />{props.hello.unit6}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;

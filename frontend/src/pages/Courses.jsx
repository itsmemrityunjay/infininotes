import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'
import { CoursesHead } from '../components/cources/CoursesHead'
import Ass1 from "../assets/Images/I1.png"

const Courses = () => {


  const StuMat= [
      { "title":"BEE",
        "cateo1":"BOOK",
        "unit1": "DC CIRCUIT",
        "unit1Icon":Ass1,
        "unit1Link": "https://drive.google.com/file/d/1EbUBcCQ03v9LsKw809rMkNHi5iXYWE3Z/view?usp=drive_link",
        "unit2Icon":"",
        "unit2": "TRANSFORMER",
        "unit2Link": "https://drive.google.com/file/d/1AlovGKwnnPo8nd0m4wFvyRm_22I-77lG/view?usp=drive_link",
        "unit3Icon":"",
        "unit3": "POWER CONVERTER",
        "unit3Link": "https://drive.google.com/file/d/1IaufZWcu9tC13_n9Ui0glI936Uesffv8/view?usp=drive_link",
        "unit4Icon":"",
        "unit4": "AC CIRCUIT",
        "unit4Link": "https://drive.google.com/file/d/1TXDQUgv5AvLZEW7fYTVkCuelF1rxpgHP/view?usp=drive_link",
        "unit5Icon":"",
        "unit5": "ELECTRICAL INSTALLATION",
        "unit5Link": "https://drive.google.com/file/d/14mPrMvYWxaiHYUQMVcaj7IeBVR2PgLk5/view?usp=drive_link",
        "unit6Icon":"",
        "unit6": "ELECTRICAL MECHANICS",
        "unit6Link": "https://drive.google.com/file/d/1Ya9G0WLrDWtYwM2yDzut5xUDNwNy3pQP/view?usp=drive_link",
  
        "cateo2":"NOTES",
        "unit1cat2title":"",
        "unit1cat2icon":"",
        "unit1Cat2Link": "https://drive.google.com/file/d/1LNxqf9-nUbUM7DL8tuuy_JragcuvnNi3/view",
        "unit2cat2title":"",
        "unit2cat2icon":"",
        "unit2Cat2Link": "https://drive.google.com/file/d/1Bx4YwviH6KTzHwnAoT0HI_KnTYAat_Lh/view",
        "unit3cat2title":"",
        "unit3cat2icon":"",
        "unit3Cat2Link": "",
        "unit4cat2title":"",
        "unit4cat2icon":"",
        "uunit4Cat2Link": "https://drive.google.com/file/d/1yII8l98nA2S1hLLZsvewu0jLNDCWJUIH/view",
        "unit5cat2title":"",
        "unit5cat2icon":"",
        "unit5Cat2Link": "https://drive.google.com/file/d/1L4Te9ajdX1A15tpvQ2J-Vc_Mqwu7BpX7/view",
        "unit6cat2title":"",
        "unit6cat2icon":"",
        "unit6Cat2Link": "https://drive.google.com/file/d/103un0egU6InwWkZBLPFB6FfTjjcQstkj/view",
      },
  
  
      { "title":"PHYSICS",
        "cateo1":"BOOK",
        "unit1": "FREE ELECTRON THEORY",
        "unit1Icon":"",
        "unit1Link": "https://drive.google.com/file/d/1gSfaB272fxOBBK6NffBW-hAXh_uMmZxN/view?usp=drive_link",
        "unit2Icon":"",
        "unit2": "",
        "unit2Link": "",
        "unit3Icon":"",
        "unit3": "",
        "unit3Link": "",
        "unit4Icon":"",
        "unit4": "PHYSICS BOOK",
        "unit4Link": "https://drive.google.com/file/d/1-XNfi_CipXTO5y8EREnrdogQT7B43ZyZ/view?usp=drive_link",
        "unit5Icon":"",
        "unit5": "",
        "unit5Link": "",
        "unit6Icon":"",
        "unit6": "",
        "unit6Link": "",
  
        "cateo2":"TEACHERS NOTES",
        "unit1cat2title":"Unit-1 Teachers Notes",
        "unit1cat2icon":"",
        "unit1Cat2Link": "https://drive.google.com/file/d/1ALJCJiA9u68_L8BnHHcensYJEO3sCApt/view",
        "unit2cat2title":"Unit-2 Teachers Notes",
        "unit2cat2icon":"",
        "unit2Cat2Link": "https://drive.google.com/file/d/1sSBl2_IBedVkgtmQknuRfA3YsXW2dmV8/view",
        "unit3cat2title":"",
        "unit3cat2icon":"",
        "unit3Cat2Link": "",
        "unit4cat2title":"Unit-4 Teachers Notes",
        "unit4cat2icon":"",
        "uunit4Cat2Link": "https://drive.google.com/file/d/1R4AU7nNA3nr4tAwBCwLddtR4uencrKr8/view",
        "unit5cat2title":"Unit-5 Teachers Notes",
        "unit5cat2icon":"",
        "unit5Cat2Link": "https://drive.google.com/file/d/1NxcxHSo2It_TwXQadDixzLh_OYRapun7/view",
        "unit6cat2title":"",
        "unit6cat2icon":"",
        "unit6Cat2Link": "",
  
  "cateo3":"HANDWRITTEN NOTES",
  "unit1cat3title":"Unit-1 Handwritten Notes",
  "unit1cat3icon":"",
  "unit1Cat3Link": "https://drive.google.com/file/d/1lXh6-q-Nhu37NsbxVLgsrBTQoHB6inJL/view",
  "unit2cat3title":"Unit-2 Handwritten Notes",
  "unit2cat3icon":"",
  "unit2Cat3Link": "https://drive.google.com/file/d/1dEx-8nQep_kk-B0rY2P9QNEWFpYhwA25/view",
  "unit3cat3title":"",
  "unit3cat3icon":"",
  "unit3Cat3Link": "",
  "unit4cat3title":"Unit-4 Handwritten Notes",
  "unit4cat3icon":"",
  "unit4Cat3Link": "https://drive.google.com/file/d/1dx42DKxyZMd06Q0OTDXgBpOpe7RPEDCF/view",
  "unit5cat3title":"Unit-5 Handwritten Notes",
  "unit5cat3icon":"",
  "unit5Cat3Link": "https://drive.google.com/file/d/12S4LeKUraNP0OmDjcVI4l4sDZ79_du5A/view",
  "unit6cat3title":"",
  "unit6cat3icon":"",
  "unit6Cat3Link": "",
      },
  
  
  
      {
          "title":"M1",
        "cateo1":"BOOK",
        "unit1": "Definite & Indefinite Book",
        "unit1Icon":"",
        "unit1Link": "",
        "unit2Icon":"",
        "unit2": "",
        "unit2Link": "",
        "unit3Icon":"",
        "unit3": "",
        "unit3Link": "",
        "unit4Icon":"",
        "unit4": "PHYSICS BOOK",
        "unit4Link": "",
        "unit5Icon":"",
        "unit5": "",
        "unit5Link": "",
        "unit6Icon":"",
        "unit6": "",
        "unit6Link": "",
      }
  
      
     
    

    
   
  ];
  return (
    <>
    <Navbar/>
    <CoursesHead/>
    <div>
        {StuMat.map((row, index) => (
          <Cards key={index} hello={row}></Cards>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default Courses
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './side_pic.jpg';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Jme3 () {
  return <div id="container" >
    <Header />
    <Content  />
  </div> ;
}

var c=-1;

function hide() {
  const x=document.getElementById("nav");
  if (c > 0) {
    x.style="transform:translate(-100%);"
    c=-c;
  }
}

function test() {
  const x=document.getElementById("nav");
  x.style="transform:translate(-100%);"
}


function Header () {
  const LM = "Little Morocco"
  const [kid,setKid] = useState(1);

  function slide() {
    const x=document.getElementById("nav");

    if (c > 0) {
      x.style="transform:translate(-100%);"
      c=-c;
    }

    else if (c < 0) {
      x.style="transform:translate(0);"
      c=-c;
    }

    
  }

  return <div id="header" >
    <header>
      <div onClick={slide} id="menu" >
        <div className= "small_menu " id="small_menu">
          <div className="bar" ></div>
          <div className="bar" ></div>
          <div className="bar" ></div>
        </div>
      </div>
      <div  onClick={hide}  id="title" > 
        <div id="lm" >{LM}</div> 
        <div id="logo" ></div> 
      </div>
    </header>
    <Nav />
  </div> ;
}

function Nav () {

  const list=["Appetizers","Mezza Plate","Salads 🥗","Sandwiches","Plates","Drinks","Smoothies","Soda and Other drinks","Desert","Candy and sweet","Add on's"];
  const arr=list.map((v,i) => <a onClick={hide} href={`#type${i}`} id={ `choose_items${i}` } className="choose_items">
    <div id={ `for_active${i}` } className="for_active" ></div>
    <div  className="value" > {v} </div>
    <div></div>
    
    
  </a> );

  return <section id="nav" >
    <img src={logo} alt="Logo" id="side_pic" ></img>
    <ul id="choose_list" > {arr} </ul>
  </section>  ;
}

function Content () {
  return  <section  onClick={hide}  id="content" >
    <div id="after_content">
      <Intro />
      <Real />
    </div>
    <Footer />
  </section> ;
}

function Intro () {

  const intro1="Moroccan Mediterranean Restuarant Serving the best quality halal meat in town. We also have great vegetarian and gluten free dishes.";
  const intro2="Fresh, Tasty, Fun!"
  const w="Welcome";

  const lettres=w.split("");
  const seprate_w=lettres.map((v,i) => <div key={i} className="lettre2"  >
    {v}
  </div> );

  const words1=intro1.split(" ");

  const seprate_words1=words1.map((word) => {
    const lettres=word.split("");
    const seprate_word=lettres.map((v) => <div className="lettre1"  >
      {v}
    </div> );

    return seprate_word;
  });

  const not_string1 = seprate_words1.map((v) => <div className="word_plus_space" > <div className="spaced_word" > {v} </div><div className="space" ></div> </div> );
  
  const string1= <div id="string1" > {not_string1} </div>;

  const words2=intro2.split(" ");

  const seprate_words2=words2.map((word) => {
    const lettres=word.split("");
    const seprate_word=lettres.map((v) => <div className="lettre1" >
    {v}
    </div> );
    return seprate_word;
  } );

  const not_string2 = seprate_words2.map((v) => <div className="word_plus_space" > <div className="spaced_word" > {v} </div><div className="space" ></div> </div> );

  const string2= <div id="string2" > {not_string2} </div>;

  return <div id="intro" >
    <div id="welcome" > {seprate_w} </div>
    <div id="about" > {string1} {string2} </div>
  </div>  ;
}

function Real () {

  return <section id="real" >
    <Food />
    <Info />
  </section>  ;
}

function Footer () {
  const att1 = ["+1 541-286-4171","lecafej@gmail.com"];
  const att2 = att1.map((v) => <li className="contact_item" > {v} </li> );

  return <footer id="footer" >
    <div id="contacts" ><div id="contact" >Contact</div><div id="drop_icon1" ></div></div>
    <ul id="contact_list" > {att2} <div id="icon_wrapper"><a href="https://www.facebook.com/littlemoroccocafe" id="facebook_icon" ></a><a href="https://www.instagram.com/littlemorocco.co" id="instagram_icon" ></a></div> </ul>
    <div id="copyright" >© 2021</div>
  </footer>  ;
}

function Info () {

  const lm=["Monday Closed","Tuesday Closed","Wednesday 11:30 am - 9:00 pm","Thursday 11:30 am - 9:00 pm","Friday 11:30 am - 9:00 pm","Saturday 11:30 am - 9:00 pm","Sunday 12:00 pm - 9:00 pm"];


  
  const lr=lm.map((v,i) => <div id={"day"+String(i)} className="day" > {v}</div>);






  return <section id="info" >
    <div id="for_fixed" >
      <div id="info_wrapper" >
        Get directions:<br/>Little Morroco
517 SW 2nd st, Suite 104
Corvallis, Oregon 97333
        <div id="map" ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.815875542857!2d-123.26388468496125!3d44.55987280134728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040c209e9854b%3A0x3b312bf446394287!2s517%20SW%202nd%20St%20%23104%2C%20Corvallis%2C%20OR%2097333%2C%20USA!5e0!3m2!1sen!2sma!4v1632073984238!5m2!1sen!2sma" width="600" height="450" allowfullscreen="" loading="lazy"></iframe></div>
        {"Location & Hours"}
        <div id="more_info" >{lr} </div>
      </div>
    </div>
  </section>  ;
}

function Food () {

  const l_t0_cApp_n1=["Baba Ghanouj"   ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cApp_n2=["Hummus"         ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cApp_n3=["Grape Leaves"   ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cApp_n4=["Falafel Plate"  ,"jpeg","$8.50","item_ingredients"];
  const l_t0_cApp_n5=["Lebnah"         ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cApp_n6=["Cup Soup"       ,"jpeg","$4.00","item_ingredients"];
  const l_t0_cApp_n7=["Bowl Soup"      ,"jpeg","$6.00","item_ingredients"];
  const l_t0_cApp_n8=["Beef Hummus"    ,"jpeg","$11.00","item_ingredients"];
  const l_t0_cApp_n9=["Lamb Hummus"    ,"jpeg","$12.00","item_ingredients"];
  const l_t0_cApp_n10=["Chicken Hummus","jpeg","$10.00","item_ingredients"];
  const l_t0_cApp_n11=["Pita"          ,"jpeg","$0.60 - $7.99","item_ingredients"];
  const l_t0_cApp_n12=["Mezza Plate"   ,"jpeg","$16.00","item_ingredients"];

  const l_t0_cMez_n1 = ["Mezza Plate"   ,"jpeg","$16.00","item_ingredients"];
      
  const l_t0_cSal_n1=["Taboli"                   ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cSal_n2=["Fatoush"                  ,"jpeg","$9.00","item_ingredients"];
  const l_t0_cSal_n3=["Mediterranean Salad"      ,"jpeg","$9.00 - $11.00","item_ingredients"];
  const l_t0_cSal_n4=["Grilled Chicken Salad"    ,"png","$10.00","item_ingredients"];
  const l_t0_cSal_n5=["House Salad"              ,"png","$7.00","item_ingredients"];
  const l_t0_cSal_n6=["40 Thieves Salad"            ,"png","$10.00","item_ingredients"];

  const l_t0_cSan_n1=["Lamb Shawarma Sandwich"        ,"jpeg","$9.50","item_ingredients"];
  const l_t0_cSan_n2=["Chicken Shawarma Sandwich"     ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cSan_n3=["Ali Baba"                      ,"jpeg","$8.50","item_ingredients"];
  const l_t0_cSan_n4=["Secret Sandwich"               ,"jpeg","$9.00","item_ingredients"];
  const l_t0_cSan_n5=["40 Thieves Sandwich"           ,"jpeg","$8.50","item_ingredients"];
  const l_t0_cSan_n6=["Falafel Sandwich"              ,"jpeg","$7.00","item_ingredients"];
  const l_t0_cSan_n7=["Veggie Sandwich"               ,"jpeg","$7.00","item_ingredients"];
  const l_t0_cSan_n8=["Sinbad"                        ,"jpeg","$9.00","item_ingredients"];
  const l_t0_cSan_n9=["Beef Burger"                   ,"jpeg","$9.00 - $13.00","item_ingredients"];
  const l_t0_cSan_n10=["Chicken Burger"               ,"jpeg","$8.00 - $11.00","item_ingredients"];
  const l_t0_cSan_n11=["French Fries"                 ,"jpeg","$0.50 - $4.50","item_ingredients"];
  const l_t0_cSan_n12=["Special sandwich"             ,"png","$6.99 - $9.00","item_ingredients"];

  const l_t0_cPla_n1=["Lamb Shawarma Plate"       ,"jpeg","$15.00","item_ingredients"];
  const l_t0_cPla_n2=["Moroccan Chicken"          ,"jpeg","$16.00","item_ingredients"];
  const l_t0_cPla_n3=["Baked Chicken"             ,"jpeg","$8.00","item_ingredients"];
  const l_t0_cPla_n4=["Beef Keta Plate"           ,"jpeg","$15.00","item_ingredients"];
  const l_t0_cPla_n5=["Chicken kefta Plate"       ,"jpeg","$14.00","item_ingredients"];
  const l_t0_cPla_n6=["Chicken Shawarma Plate"    ,"jpeg","$14.00","item_ingredients"];
  const l_t0_cPla_n7=["Extra Chicken Leg"         ,"png","$4.50","item_ingredients"];
  const l_t0_cPla_n8=["Extra Lamb Shawarma"       ,"png","$6.50 - $11.00","item_ingredients"];
  const l_t0_cPla_n9=["Xtra Chicken Shawarma"     ,"png","$5.50","item_ingredients"];
  const l_t0_cPla_n10=["Rice"                     ,"png","$3.00 - $5.00","item_ingredients"];
  const l_t0_cPla_n11=["Lamb Shank"               ,"png","$16.00 - $25.00","item_ingredients"];

  const l_t0_cDri_n1=["Coffee Americano"                   ,"jpeg","$1.00 - $3.25","item_ingredients"];
  const l_t0_cDri_n2=["Chai Haleeb"                        ,"jpeg","$4.00 - $5.00","item_ingredients"];
  const l_t0_cDri_n3=["Chai Ahmar"                         ,"jpeg","$3.00 - $4.25","item_ingredients"];
  const l_t0_cDri_n4=["Turkish Coffee"                     ,"jpeg","$3.50 - $6.00","item_ingredients"];
  const l_t0_cDri_n5=["Moroccan Coffee"                    ,"jpeg","$4.00 - $8.00","item_ingredients"];
  const l_t0_cDri_n6=["Moroccan Mint Tea"                  ,"jpeg","$3.50 - $4.50","item_ingredients"];
  const l_t0_cDri_n7=["Moroccan Mint Tea Pot individual"   ,"jpeg","$3.50 - $10.00","item_ingredients"];

  const l_t0_cSmo_n1=["Mama Jamila"             ,"jpeg","$0.50 - $6.00","item_ingredients"];
  const l_t0_cSmo_n2=["Broken Heart"            ,"jpeg","$0.50 - $6.00","item_ingredients"];
  const l_t0_cSmo_n3=["Avocat"                  ,"jpeg","$0.50 - $6.00","item_ingredients"];
  const l_t0_cSmo_n4=["Sahaa"                   ,"jpeg","$0.50 - $6.00","item_ingredients"];
  const l_t0_cSmo_n5=["Lemon Mint"              ,"jpeg","$0.50 - $6.00","item_ingredients"];
  const l_t0_cSmo_n6=["Mango Mint"              ,"jpeg","$0.50 - $6.00","item_ingredients"];

  const l_t0_cSod_n1=["Soda Can"       ,"jpeg","$1.85","item_ingredients"];
  const l_t0_cSod_n2=["Vimto"          ,"jpeg","$2.25","item_ingredients"];
  const l_t0_cSod_n3=["Barbican"       ,"jpeg","$2.99","item_ingredients"];
  const l_t0_cSod_n4=["Coke Bottle"    ,"jpeg","$2.99","item_ingredients"];
  const l_t0_cSod_n5=["Fanta Bottle"   ,"jpeg","$2.25 - $2.99","item_ingredients"];
  const l_t0_cSod_n6=["Ice Tea"        ,"jpeg","$3.00 - $4.00","item_ingredients"];
  const l_t0_cSod_n7=["Red Bull"       ,"jpeg","$3.00 - $4.00","item_ingredients"];
  const l_t0_cSod_n8=["Water Bottle"   ,"jpeg","$1.25","item_ingredients"];
  const l_t0_cSod_n9=["Yogurt Drink"   ,"jpeg","$2.99","item_ingredients"];

  const l_t0_cDes_n1=["Baklava","jpeg","$5.99 - $6.99","item_ingredients"];

  const l_t0_cCan_n1=["Halva With Pistachio"     ,"jpeg","$1.99 - $13.99","item_ingredients"];
  const l_t0_cCan_n2=["Flake"                    ,"jpeg","$1.99","item_ingredients"];
  const l_t0_cCan_n3=["Kinder Bueno"             ,"png","$2.99","item_ingredients"];
  const l_t0_cCan_n4=["Time Out"                 ,"jpeg","$1.99","item_ingredients"];
  const l_t0_cCan_n5=["Maamoul Singles"          ,"jpeg","$1.25 - $8.99","item_ingredients"];
  const l_t0_cCan_n6=["Kinder Chocolate"         ,"jpeg","$4.50","item_ingredients"];
  const l_t0_cCan_n7=["Bounty"                   ,"jpeg","$2.20","item_ingredients"];
  const l_t0_cCan_n8=["Hanuta"                   ,"jpeg","$2.99","item_ingredients"];

  const l_t0_cAdd_n1=["Side Sauce"     ,"jpeg","$0.50 - $8.00","item_ingredients"];
  const l_t0_cAdd_n2=["Pita"           ,"jpeg","$0.60 - $7.99","item_ingredients"];

  const l_t1_cApp=[ l_t0_cApp_n1 , l_t0_cApp_n2 , l_t0_cApp_n3 , l_t0_cApp_n4 , l_t0_cApp_n5 , l_t0_cApp_n6 , l_t0_cApp_n7 , l_t0_cApp_n8 , l_t0_cApp_n9 , l_t0_cApp_n10 , l_t0_cApp_n11 , l_t0_cApp_n12 ];
  const l_t1_cMez=[ l_t0_cMez_n1 ];
  const l_t1_cSal=[ l_t0_cSal_n1 , l_t0_cSal_n2 , l_t0_cSal_n3 , l_t0_cSal_n4 , l_t0_cSal_n5 , l_t0_cSal_n6 ];
  const l_t1_cSan=[ l_t0_cSan_n1 , l_t0_cSan_n2 , l_t0_cSan_n3 , l_t0_cSan_n4 , l_t0_cSan_n5 , l_t0_cSan_n6 , l_t0_cSan_n7 , l_t0_cSan_n8 , l_t0_cSan_n9 , l_t0_cSan_n10 , l_t0_cSan_n11 , l_t0_cSan_n12 ];
  const l_t1_cPla =[ l_t0_cPla_n1 , l_t0_cPla_n2 , l_t0_cPla_n3 , l_t0_cPla_n4 , l_t0_cPla_n5 , l_t0_cPla_n6 , l_t0_cPla_n7 , l_t0_cPla_n8 , l_t0_cPla_n9 , l_t0_cPla_n10 , l_t0_cPla_n11 ]; 
  const l_t1_cDri =[ l_t0_cDri_n1 , l_t0_cDri_n2 , l_t0_cDri_n3 , l_t0_cDri_n4 , l_t0_cDri_n5 , l_t0_cDri_n6 , l_t0_cDri_n7 ];
  const l_t1_cSmo =[ l_t0_cSmo_n1 , l_t0_cSmo_n2 , l_t0_cSmo_n3 , l_t0_cSmo_n4 , l_t0_cSmo_n5 , l_t0_cSmo_n6 ];
  const l_t1_cSod =[ l_t0_cSod_n1 , l_t0_cSod_n2 , l_t0_cSod_n3 , l_t0_cSod_n4 , l_t0_cSod_n5 , l_t0_cSod_n6 , l_t0_cSod_n7 , l_t0_cSod_n8 , l_t0_cSod_n9 ];
  const l_t1_cDes =[ l_t0_cDes_n1 ];
  const l_t1_cCan=[ l_t0_cCan_n1 , l_t0_cCan_n2 , l_t0_cCan_n3 , l_t0_cCan_n4 , l_t0_cCan_n5 , l_t0_cCan_n6 , l_t0_cCan_n7 , l_t0_cCan_n8 ];
  const l_t1_cAdd=[ l_t0_cAdd_n1 , l_t0_cAdd_n2 ];

  const l_t2_cApp  = ["Appetizers",l_t1_cApp];
  const l_t2_cMez  = ["Mezza Plate",l_t1_cMez];
  const l_t2_cSal  = ["Salads 🥗",l_t1_cSal];
  const l_t2_cSan  = ["Sandwiches",l_t1_cSan];
  const l_t2_cPla  = ["Plates",l_t1_cPla];
  const l_t2_cDri  = ["Drinks",l_t1_cDri];
  const l_t2_cSmo  = ["Smoothies",l_t1_cSmo];
  const l_t2_cSod  = ["Soda and Other drinks",l_t1_cSod];
  const l_t2_cDes  = ["Desert",l_t1_cDes];
  const l_t2_cCan = ["Candy and sweet",l_t1_cCan];
  const l_t2_cAdd = ["Add on's",l_t1_cAdd];


  const l_t3=[l_t2_cApp,l_t2_cMez,l_t2_cSal,l_t2_cSan,l_t2_cPla,l_t2_cDri,l_t2_cSmo,l_t2_cSod,l_t2_cDes,l_t2_cCan,l_t2_cAdd];

  const list = l_t3.map ((v,i) => <Type name={String(i)} data={v} /> );

  return <section id="food" >
    {list}
  </section>  ;
}

function Type (props) {

  const x =parseInt(props.name);

  const list2 = props.data;

  const list1 = list2[1];

  const list=list1.map((v,i) => <Presentation name={`${x}-${i}`} data={v} /> );

  return <a id={`type${x}`} className="for_links" ><section name={`type${x}`} className= {`type type${x}`} >
    <div  id={`food_header${x}`} className= "food_header" > 
      <div></div>
      <div className="category_name" >{list2[0]}</div>
      <div id={ `top_drop_icon${x}` }  className= "top_drop_icon"   ></div>
    </div>
    <div id={ `presentations_wrapper${x}` } className="presentations_wrapper" > {list} </div>
    </section></a>  ;
}

function Presentation (props) {



  const list = props.data;/* ["item_name","item_pic_exe","item_price","item_ingredients"] */ 

  return <div id={"presentation"+props.name} className="presentation" >
    <div id={"el1"+props.name} className="el1 "> {list[0]} </div>
    <img id={"el2"+props.name} src={`./assets/${list[0]}.${list[1]}`}  className="el2"></img>
    <div id={"el3"+props.name} className="el3"> <div className="static" >Price:</div> <div className="dynamic" > {list[2]} </div> </div>
    <div id={"el4"+props.name} className="el4"><div className="static" >Ingredients: ...</div> <div className="dynamic" > {/*list[3]*/} </div></div>
  </div>;
}


ReactDOM.render(
  <Jme3 />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import Carsousel from '../../Page2/Carsousel'
import "./destination.css"
import Header from '../Header'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/all'

export default function Destination() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".img_first", {
      x: 150,
      yoyo: true,
      scrollTrigger: {
        markers: false,
        start: "5% 30%",
        end: "10% 40%",
        scrub: 2,


      }
    })
    gsap.from(".img_Second", {
      x: -200,
      yoyo: true,
      scrollTrigger: {
        markers: false,
        start: "5% 30%",
        end: "10% 40%",
        scrub: 2,


      }
    })
    gsap.from(".para1 ,.Name1 ", {
      y: 200,

      yoyo: true,
      scrollTrigger: {
        markers: false,
        start: "4% 30%",
        end: "10% 40%",
        scrub: 2,

      }
    })
    gsap.from(".img111", {
      x: -300,
      scrollTrigger: {
        markers: false,

        start: "14% 30%",
        end: "20% 40%",
        scrub: 2,

      }
    })
    gsap.from(".img222", {
      x: 150,
      scrollTrigger: {
        markers: false,

        start: "18% 30%",
        end: "20% 40%",
        scrub: 2,

      }
    })
    gsap.from(".para22 ,.Name22 ", {
      y: 200,

      yoyo: true,
      scrollTrigger: {
        markers: false,
        start: "18% 30%",
        end: "20% 40%",
        scrub: 2,

      }
    })

    gsap.from(".img_First3", {
      x: 150,
      yoyo: true,
      scrollTrigger: {
        markers: false,

        start: "27% 50% ",
        end: "32% 60%",
        scrub: 2,

      }
    })
    gsap.from(".img_Second3", {
      x: -200,
      yoyo: true,
      scrollTrigger: {
        markers: false,

        start: "29% 50% ",
        end: "35% 60%",
        scrub: 2,

      }
    })
    gsap.from(".Name3, .para3", {
      y: 200,
      yoyo: true,
      scrollTrigger: {
        markers: false,

        start: "27% 50% ",
        end: "32% 60%",
        scrub: 2,

      }
    })
    gsap.from(".img4", {
      x: -300,
      yoyo: true,
      scrollTrigger: {

        start: "40% 60% ",
        end: "43% 70%",
        scrub: 3,
      }


    })
    gsap.from(".img41", {
      x: 150,
      yoyo: true,
      scrollTrigger: {

        start: "41% 60% ",
        end: "44% 70%",
        scrub: 3,
      }


    })
    gsap.from(".para4,.Name4", {
      y: 200,
      yoyo: true,
      scrollTrigger: {

        start: "40% 60% ",
        end: "43% 70%",
        scrub: 3,
      }


    })

    gsap.from(".img_first5", {
      x: -200,
      yoyo: true,
      scrollTrigger: {

        start: "49% 60% ",
        end: "53% 70%",
        scrub: 3,

      }


    })

    gsap.from(".img_Second5", {
      x: 150,
      yoyo: true,
      scrollTrigger: {

        start: "52% 60% ",
        end: "55% 70%",
        scrub: 3,

      }


    })
    gsap.from(".para5,.Name5", {
      y: 150,
      yoyo: true,
      scrollTrigger: {

        start: "49% 60% ",
        end: "53% 70%",
        scrub: 3,

      }


    })
    gsap.from(".para6,.Name6", {
      y: 200,
      yoyo: true,
      scrollTrigger: {

        start: "58% 60% ",
        end: "63% 70%",
        scrub: 3,

      }


    })
    gsap.from(".img_First6", {
      x: 150,
      yoyo: true,
      scrollTrigger: {

        start: "58% 60% ",
        end: "63% 70%",
        scrub: 3,

      }


    })
    gsap.from(".img_second6", {
      x: -300,
      yoyo: true,
      scrollTrigger: {

        start: "60% 60% ",
        end: "65% 70%",
        scrub: 3,

      }


    })

    gsap.from(".img17", {
      x: 150,
      yoyo: true,
      scrollTrigger: {

        start: "69% 60% ",
        end: "74% 70%",
        scrub: 3,

      }


    })
    gsap.from(".img27", {
      x: -200,
      yoyo: true,
      scrollTrigger: {

        start: "72% 60% ",
        end: "77% 70%",
        scrub: 3,

      }


    })
    gsap.from(".para7, .Name7", {
      y: 200,
      yoyo: true,
      scrollTrigger: {

        start: "69% 60% ",
        end: "74% 70%",
        scrub: 3,

      }


    })

    gsap.from(".img8", {
      x: -300,
      yoyo: true,
      scrollTrigger: {

        start: "80% 60% ",
        end: "85% 70%",
        scrub: 3,

      }


    })
    gsap.from(".img81", {
      x: 150,
      yoyo: true,
      scrollTrigger: {

        start: "82% 60% ",
        end: "87% 70%",
        scrub: 3,

      }



    })
    gsap.from(".para8, .Name8", {
      y: 200,
      yoyo: true,
      scrollTrigger: {

        start: "80% 60% ",
        end: "85% 70%",
        scrub: 3,

      }


    })

    gsap.from(".main-img-temple", {
      x: -300,
      yoyo: true,
      scrollTrigger: {

        start: "80% 60% ",
        end: "90% 70%",
        scrub: 3,
         

      }
      
    })
    gsap.from(".para9, .Name9", {
      y: 200,
      yoyo: true,
      scrollTrigger: {

        start: "80% 60% ",
        end: "90% 70%",
        scrub: 3,

      }


    })









  })
  return (
    <>
      {/* component 1 */}
      <div className='main_div'>

        <Carsousel />

        <div className="div11">
          <div className='div10'>
            <div className="imagecont1">
              <Link to='/Hanumangarhi' onClick={scrollToTop}>
                <img className='img_first' src="/assets/638459537793483192.jpg" alt="Hanumangadi" />
              </Link>

              <Link to='/Ram_ki_Paidi' onClick={scrollToTop}>
                <img className='img_Second' src="/assets/Ram-ki-Paidi.jpg" alt="Shri" />

              </Link>
            </div>
            <div className="content1">
              <div className="Hanuman1">

                <Link to='/Hanumangarhi' onClick={scrollToTop}>
                  <center>
                    <h1 className='Name1'>Hanumangarhi</h1>
                  </center>

                </Link>

                <p className='para1'>Constructed in the shape of a fort and accessed by a flight of seventy - six steps, the 10th century ancient temple nestles in the centre of the pilgrim town. It has circular fortifications in each corner and is believed to be the spot where Lord Hanuman resided in a cave and protected the town.</p>

                <p className='para1'>The temple has a golden idol of Lord Hanuman; it is counted amongst the most</p>
                <p className='para1'>Every day thousands of devotees visit Hanumangarhi to offer prayers and seek Lord Hanuman's protection from evils, and blessing for happiness and prosperity.</p>

              </div>



              <div className="PAdi1" >
                <Link to='/Ram_ki_Paidi' onClick={scrollToTop}>
                  <center><h1 className='Name1'>Ram ki Paidi </h1></center>

                </Link>
                <p className='para1'>A series of ghats set on the banks of river Saryu that serves as a platform to devotees who come here to wash away their sins. It also has lush green gardens surrounded by temples. <br />The river front brings forth an outstanding panorama especially in floodlit night. These serve as platforms to devotees who, it is believed, come to wash away their sins by taking a dip in the holy river. Saryu provides a regular supply of water for the ghats and is maintained by the Irrigation Department, Government of Uttar Pradesh.</p>
              </div>

            </div>

          </div>
        </div>




        {/* component 2 */}

        <div className="div12">
          <div className='div22'>

            <div className="content2">
              <div className="Shri-Nageshwarnath-Temple2">
                <Link to='/Shri-Nageshwarnath-Temple' onClick={scrollToTop}>
                  <center>
                    <h1 className='Name22'>Shri-Nageshwarnath-Temple</h1>
                  </center>

                </Link>
                <p className='para22'>The presiding deity of Ayodhya is Lord Nageshwarnathji. It is believed that Lord Ram’s son, Kush, built the beautiful temple dedicated to him. The shivalinga ensconced here is said to be quite ancient.</p>
                <p className='para22'>As per folklore, Kush was taking a bath in the Saryu River when his armlet fell in the water. After sometime, a nag kanya (snake woman) appeared and returned it to him. They fell in love with each other and Kush got the temple structured for her.</p>
                <p className='para22'>Being one of the most important and venerated temples in Ayodhya, it attracts large crowds of devotees from all over during the festival of Mahashivaratri. The present edifice of the temple was constructed in 1750 AD.</p>

              </div>
              <div className="Kanak-Bhawan2">
                <Link to="/Kanak_Bhawan" onClick={scrollToTop}>

                  <center><h1 className='Name22'>Kanak-Bhawan</h1></center>
                </Link>

                <p className='para22'>Vrishbhanu Kuvari, Queen of Teekamgarh (Madhya Pradesh) in 1891, constructed the exquisitely embellished temple.</p>
                <p className='para22'>The main temple surrounds an open inner area which houses the sacred shrine of Rampada.</p>
                <p className='para22'>Marvel at the beautiful idols of Goddess Sita along with Lord Ram and his three brothers.</p>

              </div>

            </div>

            <div className="imagecont2">
              <Link to='/Shri-Nageshwarnath-Temple' onClick={scrollToTop}>
                <img className='img111' src="/assets/Shri-Nageshwarnath-Temple.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />

              </Link>

              <Link to="/Kanak_Bhawan" onClick={scrollToTop}>
                <img className='img222' src="/assets/Kanak-Bhawan-a.jpg" alt="Shri" loading="lazy" decoding="async" />

              </Link>
            </div>

          </div>
        </div>

        {/* component 3 */}

        <div className="div13">
          <div className='divS3'>
            <div className="imagecont13">
              <Link to="/Tulsi_Smarak" onClick={scrollToTop}>
                <img className='img_First3' src="/assets/Tulsi-Smarak-Bhawan.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />

              </Link>
              <Link to="/Treta_ke" onClick={scrollToTop}>
                <img className='img_Second3' src="/assets/Treta-ke-Thakur.jpg" alt="Shri" loading="lazy" decoding="async" />

              </Link>
            </div>
            <div className="content13">
              <div className="Hanuman3">
                <Link to="/Tulsi_Smarak" onClick={scrollToTop}>
                  <center>
                    <h1 className='Name3'>Tulsi Smarak Bhawan</h1>
                  </center>

                </Link>
                <p className="para3">TulsiSmarakBhawan is dedicated to the great saint - poet Goswami Tulsidas Ji. Regular prayer meetings, devotional concerts and religious discourses are held here. The complex also houses Ayodhya Shodh Sansthan which has a large repository of literary compositions on GoswamiTulsidasJi.</p>
                <p className="para3">Ramleela is performed every day from 6.00 pm to 9.00 pm at Tulsi Smarak Auditorium; it is a major attraction.</p>
              </div>
              <div className="PAdi3">
                <Link to="/Treta_ke" onClick={scrollToTop}>
                  <center><h1 className='Name3'>Treta-ke-Thakur </h1></center>

                </Link>
                <p className="para3">Also famous as Kaleram - ka - Mandir, the beautiful temple is believed to mark the spot where Lord Ram performed the legendary AshwamedhYagna. The Raja of Kullu (Himachal Pradesh) built the present structure about three centuries ago. It was later renovated by Maharani Ahilyabai Holkar of Indore (Madhya Pradesh). The statues installed here are made of black sandstone; it is believed that they belong to the era of King Vikramaditya.</p>
              </div>

            </div>

          </div>
        </div>

        {/* component 4 */}



        <div className="div14">
          <div className='div24'>

            <div className="content4">
              <div className="Shri-Nageshwarnath-Temple4">
                <Link to="/Jain_Shrines" onClick={scrollToTop}>
                  <center>
                    <h1 className='Name4'>Jain Shrines in Ayodhya</h1>
                  </center>

                </Link>
                <p className="para4">It is not just the birthplace of Lord Ram but is also a place of high importance for the Jains, with five Jain Tirthankars believed to be born here. Every year, followers reach this town in large numbers to pay obeisance to these great saints and take part in the special occasions. There are many Jain temples spread all over the holy town; one can visit the Lord Adinath Temple near Swargdwar, Lord Anantnath Temple at GolaGhat, Lord Sumantnath shrine at Ramkot, Lord Ajitnath Temple near Saptsagar and Lord Abhinandannath Temple in Sarai locality.</p>
                <p className="para4">A huge Jain temple is situated in Raiganj area; it is home to an exclusive 21 ft tall idol of Lord Adinath (Rishabhdevji), who happened to be the first Tirthankar.</p>
              </div>
              <div className="Kanak-Bhawan4" onClick={scrollToTop}>
                <center><h1 className='Name4'>Mani Parvat</h1></center>

                <p className="para4">It is believed that when Lord Hanuman was carrying the huge mountain with Sanjivani Booti (a herb) to Lanka for the purpose of saving injured Lakhshman, brother of Lord Ram, some part of it fell in Ayodhya. The hillock, about 65 feet high, was later named as Mani Parvat.</p>

              </div>

            </div>
            <div className="imagecont4">
              <Link to="/Jain_Shrines" onClick={scrollToTop}>
                <img className='img4' src="/assets/jain-shrines-in-ayodhya.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />

              </Link>
              <img className='img41' src="/assets/Mani-Parvat.jpg" alt="Shri" loading="lazy" decoding="async" />
            </div>

          </div>
        </div>




        <div className="div5">
          <div className='div51'>
            <div className="imagecont5">
              <Link to="/Choti_Devi" onClick={scrollToTop}>
                <img className='img_first5' src="/assets/Chhoti-Devkali-Temple.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />

              </Link>
              <Link to="/GuptarGhat" onClick={scrollToTop}>
                <img className='img_Second5' src="/assets/Guptar-Ghat.jpg" alt="Shri" loading="lazy" decoding="async" />

              </Link>

            </div>
            <div className="content5">
              <div className="Hanuman5">
                <Link to="/Choti_Devi" onClick={scrollToTop}>
                  <center>
                    <h1 className='Name5'>Chhoti Devkali Temple</h1>
                  </center>

                </Link>
                <p className="para5">Located close to Naya Ghat, this temple is associated with numerous fables from the Hindu epic, Mahabharat. According to Mythology, Mother Sita arrived at Ayodhya with an idol of goddess Girija Devi after her wedding with Lord Ram. It is believed that King Dashrath got a beautiful temple constructed and the idol was established in the sanctum sanctorum. Mother Sita used to worship here every day. It is presently dedicated to goddess Devkali and hence the name.</p>


              </div>
              <div className="PAdi5">
                <Link to="/GuptarGhat" onClick={scrollToTop}>
                  <center><h1 className='Name5'>Guptar Ghat</h1></center>

                </Link>


                <p className="para5">Situated on the banks of river Saryu, this is the very spot where Lord Rama performed Jal Samadhi. King Darshan Singh constructed it in the early 19th century.</p>
                <p className="para5">One can also visit Ram Janaki Temple, Old Charan Paduka Temple, Narsingh Temple and Hanuman Temple on the ghat.</p>

              </div>

            </div>

          </div>
        </div>

        {/* component 5 */}


        <div className="div16">
          <div className='div26'>

            <div className="content6">
              <div className="Shri-Nageshwarnath-Temple6">
                <Link to="/Gurudwaras" onClick={scrollToTop}>
                  <center>
                    <h1 className='Name6'>Gurudwaras</h1>
                  </center>

                </Link>

                <p className='para6'>The Gurudwaras at Brahm Kund and Nazarbagh localities have been associated with Guru Nanak DevJi, Guru Teg Bahadur Ji and Guru Govind Singh Ji. A large number of followers visit the Gurudwaras and bow down in reverence.</p>
                <p className="para6">Apart from recording Ayodhya as the birthplace of Ram, he recorded the existence of seven Gurudwaras in Ayodhya; however, only four of these now remain. These Gurudwaras are memories of the travel of three Sikh Gurus to Ayodhya. Three of these Gurudwaras are located at one place on the bank of the Sarayu river</p>

              </div>
              <div className="Kanak-Bhawan6">
                <center>  <h1 className='Name6'>Suraj Kund</h1></center>
                <p className="para6">Located at Chaudah Koshi Parikrama Marg in Darshan Nagar area, at a distance of 4 km from Ayodhya, Suraj Kund is a big tank surrounded by ghats that presents an exclusively beautiful sight to visitors. The Suryavanshi rulers of Ayodhya, it is believed, constructed the kund to pay obeisance to the Sun god.</p>


              </div>

            </div>
            <div className="imagecont6">
              <Link to="/Gurudwaras" onClick={scrollToTop}>
                <img className='img_First6' src="/assets/Gurudwaras.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />

              </Link>


              <img className='img_second6' src="/assets/Suraj-Kund.jpg" alt="Shri" loading="lazy" decoding="async" />

            </div>

          </div>
        </div>

        {/* component 7 */}

        <div className="div17">
          <div className='div27'>
            <div className="imagecont7">
              <img className='img17' src="/assets/Ghats-and-Kunds.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />
              <img className='img27' src="/assets/Gulab-Bari.jpg" alt="Shri" loading="lazy" decoding="async" />
            </div>
            <div className="content7">
              <div className="Hanuman7">

                <center>
                  <h1 className='Name7'>Ghats and Kunds</h1>
                </center>
                <p className="para7">Famous ghats and kunds are Raj Ghat, Ram Ghat, Lakshman Ghat, Tulsi Ghat, Naya Ghat, Swargdwar Ghat, Janaki Ghat, Vidya Kund, Vibhishan Kund, Dant Dhavan Kund, Sita Kund, etc.</p>
                <p className="para7">Amovan Temple, Dashrath Mahal, Janaki Mahal, Lakshman Qila, Luv-Kush Temple, Mattagayandaji Temple, Raj Gaddi, Shri Ram-Janaki Birla Temple and Valmiki Ramayan Bhawan.</p>


              </div>
              <div className="PAdi7">
                <center><h1 className='Name7'>Gulab Bari </h1></center>
                <p className="para7">As the name suggests Gulab Bari is a rose garden. The vast garden encompasses the entire area that houses the tomb of Shuja-ud-Daula and his family. The garden was established in 1775 and houses a large variety of beautiful rose beds. The splendid mausoleum has a huge dome and is surrounded by a wall. It has two big gateways to enter the complex.</p>

              </div>

            </div>

          </div>
        </div>

        {/* component 8 */}

        <div className="div18">
          <div className='div28'>

            <div className="content8">
              <div className="Shri-Nageshwarnath-Temple8">

                <center>
                  <h1 className='Name8'>Tomb of Bahu Begum</h1>
                </center>
                <p className="para8">It is the final resting place of Begum Unmatuzzohra Bano, the queen of Nawab Shuja-ud-Daula. The mausoleum is an outstanding example of Awadhi architectural style. The entire complex, full of greenery, is now a protected site under the Archaeological Survey of India (ASI) and is managed by the Shia Board Committee (Lucknow). It comes to life during Muharram.</p>
                <p className="para8">One can witness a bird's eye view of the city from the top of the complex which is said to be the tallest standing edifice in Ayodhya.</p>

              </div>
              <div className="Kanak-Bhawan8">
                <center><h1 className='Name8'>Company Garden</h1></center>
                <p className="para8">(5am-12noon & 4pm-9pm)Also known as Guptar Ghat Garden, the sprawling botanical garden is a wonderful place to take a walk, relax or just be with mother nature; leaving behind the worries of daily life and the hustle-bustle of urban areas.</p>
                <p className="para8">Located on the bank of Saryu, one can marvel at the numerous varieties of shrubs and trees which have been planted here.</p>

              </div>

            </div>
            <div className="imagecont8">
              <img className='img8' src="/assets/Tomb-of-Bahu-Begum.jpg" alt="Hanumangadi" loading="lazy" decoding="async" />
              <img className='img81' src="/assets/Company-Garden.jpg" alt="Shri" loading="lazy" decoding="async" />
            </div>

          </div>
        </div>





        <div className='div19'>
          <div className='div29'>
            <div className='main-img'>
              <Link to="/Ram_Mandir" onClick={scrollToTop}>

                <img className='main-img-temple' src="/assets/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg" alt="Ram Mandir" loading="lazy" decoding="async" />
              </Link>

            </div>
            <div className='main-content'>
              <Link to="/Ram_Mandir" onClick={scrollToTop}>
                <center><h1 className='Name9'>Ayodhya Ram Mandir </h1></center>

              </Link>
              <p className="para9">Shri Ram Mandir, popularly known as Ayodhya Ram Mandir, is a Hindu temple located in Ayodhya, Uttar Pradesh. As the name suggests, the temple is dedicated to Lord Shri Rama and is believed to have been built at Ram Janmabhoomi (the birthplace of Lord Shri Rama). This Ram Temple reflects the cultural and spiritual heritage associated with Lord Rama and holds immense cultural and religious significance for the Hindus.</p>
              <p className="para9">The temple construction has been accompanied by a $10 billion plan "encompassing a new airport, revamped railway station, and township development" to transform the ancient Ayodhya city into a global religious and spiritual tourist destination.[23][24] The temple has also attracted a number of controversies due to alleged misuse of donation, sidelining of its major activists, and politicisation of the temple by the Bharatiya Janata Party</p>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

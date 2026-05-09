import React from 'react';

function EventPage() {
  // Festival events data
  const events = [
    {
        id: 1,
        name: "Diwali Festival",
        date: "2025-11-14",
        description: "Diwali, the festival of lights, is one of the most celebrated festivals in Ayodhya. It symbolizes the victory of light over darkness and good over evil.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202210/lalal.jpeg?VersionId=FG9qM5IC211vVB81DRiU2PsbB_bgtNDn",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 2,
        name: "Ram Navami",
        date: "2025-04-02",
        description: "Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Lord Vishnu. It is observed with great fervor and devotion in Ayodhya.",
        location: "Ram Janmabhoomi, Ayodhya",
        imageUrl: "https://resize.indiatvnews.com/en/resize/gallery/835_-/2022/04/ram-navami-4-1649612115.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 3,
        name: "Hanuman Jayanti",
        date: "2025-04-08",
        description: "Hanuman Jayanti commemorates the birth of Lord Hanuman, the devoted disciple of Lord Rama. Devotees gather to offer prayers and seek blessings.",
        location: "Hanuman Garhi Temple, Ayodhya",
        imageUrl: "https://images.deccanherald.com/deccanherald/2024-01/e285a971-a5a7-496d-99d1-67cc7de763e8/file7tt3pqarao3183jbcl2a.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 4,
        name: "Ayodhya Art Festival",
        date: "2025-09-20",
        description: "The Ayodhya Art Festival showcases the rich cultural heritage and artistic talents of Ayodhya. It features exhibitions, workshops, and performances.",
        location: "Ayodhya Art Gallery",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYszG4EDlwoh_476P8AcHTmoA7tDdyQ-6x3KG5cz4wRA&s",
        ticketRequired: true,
        ticketPrice: 100, // Ticket price in INR
      },
      {
        id: 5,
        name: "Sita-Ram Kalyan Utsav",
        date: "2025-06-12",
        description: "The Sita-Ram Kalyan Utsav commemorates the divine wedding of Lord Rama and Sita. It is celebrated with grandeur and devotion in Ayodhya.",
        location: "Saryu Riverbank, Ayodhya",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqFc0pRGPrSV1Xfslswsy-TLTS3MfI4DDjA&s",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 6,
        name: "Makar Sankranti",
        date: "2025-01-14",
        description: "Makar Sankranti marks the transition of the sun into the zodiac sign of Capricorn. It is celebrated with kite flying and feasting.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://images.news9live.com/wp-content/uploads/2024/01/Untitled-design-2024-01-14T143335.094.jpg?w=802&enlarge=true",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 7,
        name: "Vasant Panchami",
        date: "2025-02-05",
        description: "Vasant Panchami heralds the arrival of spring and is dedicated to the goddess Saraswati, the deity of knowledge, wisdom, and arts.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2015/01/24/Incoming/Pictures/1310221_Wallpaper2.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 8,
        name: "Holi Festival",
        date: "2025-03-10",
        description: "Holi, the festival of colors, is celebrated with enthusiasm and joy in Ayodhya. It marks the arrival of spring and the victory of good over evil.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://images.deccanherald.com/deccanherald/2024-03/84a8ed6d-f1a3-4b8d-a92b-ea001c8bb03f/file7upiytwsd5ufnr7hc56.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 9,
        name: "Ratha Yatra",
        date: "2025-07-12",
        description: "Ratha Yatra, or the chariot festival, is dedicated to Lord Jagannath, Balabhadra, and Subhadra. It involves the procession of deities on chariots.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/16/Pictures/_e86e73be-12fc-11e8-ba0b-8cab410cbd95.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 10,
        name: "Navaratri Festival",
        date: "2025-09-29",
        description: "Navaratri is a nine-night festival dedicated to the worship of the goddess Durga and her various forms. It is celebrated with fasting, prayers, and dances.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://images.hindustantimes.com/img/2022/09/24/1600x900/ANI-20211015075-0_1634360181198_1664004553377_1664004553377.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 11,
        name: "Dussehra Festival",
        date: "2025-10-13",
        description: "Dussehra, also known as Vijayadashami, marks the victory of Lord Rama over the demon king Ravana. It concludes the nine-day Navaratri festival.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://i.pinimg.com/736x/7e/5a/78/7e5a78257437cc2e06c71ef78d712d9b.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 12,
        name: "Janmashtami",
        date: "2025-08-30",
        description: "Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. It is observed with fasting, devotional singing, and dancing.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://organiser.org/wp-content/uploads/2023/09/whatsapp-image-2023-09-07-at-2.21.57-pm.jpeg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 13,
        name: "Ganga Dussehra",
        date: "2025-06-01",
        description: "Ganga Dussehra celebrates the descent of the holy river Ganges to Earth. Devotees take dips in the river and offer prayers for purification.",
        location: "Saryu Riverbank, Ayodhya",
        imageUrl: "https://www.hlimg.com/images/events/738X538/gycgeyfg_1537873259e.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 14,
        name: "Kumbh Mela",
        date: "2028-04-15",
        description: "Kumbh Mela is a major pilgrimage and festival in Hinduism. It is held every three years in rotation at four different locations, including Ayodhya.",
        location: "Saryu Riverbank, Ayodhya",
        imageUrl: "https://images.indianexpress.com/2024/01/cover_44f173.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 15,
        name: "Vijayadashami",
        date: "2025-10-13",
        description: "Vijayadashami, also known as Dussehra, marks the triumph of good over evil. It is celebrated with the burning of effigies of Ravana, Meghanada, and Kumbhakarna.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/10/15/216371-dussehra.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 16,
        name: "Guru Purnima",
        date: "2025-07-16",
        description: "Guru Purnima honors spiritual and academic teachers. It is celebrated by expressing gratitude and seeking blessings from teachers.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXH1Ud--hlR47ntI8VmgJK-h0Hw3wJxDC7_QuUk0FQUQ&s",
        ticketRequired: false,
        ticketPrice: null,
      },
      {
        id: 17,
        name: "Maha Shivaratri",
        date: "2025-02-21",
        description: "Maha Shivaratri celebrates the marriage of Lord Shiva and Goddess Parvati. Devotees observe fasting and perform prayers and rituals.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://static.india.com/wp-content/uploads/2023/02/sahsguru-shivratri-fea.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
     
      {
        id: 19,
        name: "Ganesh Chaturthi",
        date: "2025-09-02",
        description: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the remover of obstacles and the god of beginnings and wisdom.",
        location: "Various locations across Ayodhya",
        imageUrl: "https://st1.latestly.com/wp-content/uploads/2023/08/Ganpati-BMC.jpg",
        ticketRequired: false,
        ticketPrice: null,
      },
      
    // Paste your festival events data here...
  ];

  return (
    <div className="bg-gray-800 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white mb-4 mt-4 text-center">Ayodhya Festival Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-md overflow-hidden shadow-lg">
            <img src={event.imageUrl} alt={event.name} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
              <p className="text-sm text-gray-700 mb-2">{event.date}</p>
              <p className="text-sm text-gray-700 mb-2">{event.description}</p>
              <p className="text-sm text-gray-700 mb-2">Location: {event.location}</p>
              {event.ticketRequired ? (
                <p className="text-sm text-gray-700 mb-2">Ticket Price: {event.ticketPrice} INR</p>
              ) : (
                <p className="text-sm text-gray-700 mb-2">Free Entry</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;

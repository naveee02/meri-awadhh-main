let Main = document.getElementById("main");
let SearchBtn = document.getElementById("SearchBtn");
let Inpt = document.getElementById("Inpt");


SearchBtn.addEventListener("click",()=>{
     let SearchData = Inpt.value;
     GetData(SearchData)
})


function Display(Data) {
    Main.innerHTML = "";
  Data.map((N) => {
    Main.innerHTML += `
    <div class="card">
    <div class="Thumbnail">
      <img
        src= ${N.urlToImage}
        alt=""/>
    </div>
    <div class="content">
      <h3 class="title">${N.title}</h3>
      <p class="Disc">${N.description}</p>
      <p class="extra">${N.author} | ${N.publishedAt}</p>
    </div>
  </div>
    `;
  });
}
async function GetData(Topic) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  let Data = await fetch(
    `https://newsapi.org/v2/everything?q=${Topic}&apiKey=${apiKey}`
  );
  Data = await Data.json();
  console.log(Data);
  Display(Data.articles);
}

GetData("Ayodhya");



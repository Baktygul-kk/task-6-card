window.addEventListener("load", function () {
  alert("Я оцениваю свою работу на 80 баллов" );


  //общий div
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.style.cssText = `
  position: relative;
  background-color:  hsl(217, 54%, 11%);
  margin: 0 auto;
  `;


  // card
  const card = document.createElement("div");
  card.setAttribute("id", "card");

  card.style.cssText = `
    background-color:  hsl(216, 50%, 16%);
    border-style: solid;
    margin: 100px 580px;
    padding: 20px 25px;
    position: absolute;
    `;



  //image
  const img = document.createElement("img");
  card.append(img);
  img.setAttribute(
    "src",
    "images/image-equilibrium.jpg"
  );
  img.style.width = "280px";
  img.style.textAlign = "center";
  img.style.margin = "5px 5px";




  //title
  const cardTitle = document.createElement("h3");
  card.append(cardTitle);
  cardTitle.textContent = "Equilibrium #3429";
  cardTitle.style.color = "hsl(0, 0%, 100%)";
  cardTitle.style.paddingLeft = "15px";
  cardTitle.style.fontSize = "18px";
  cardTitle.style.fontFamily = "https://fonts.google.com/specimen/Outfit";



  // card text
  const cardText = document.createElement("p");
  card.append(cardText);
  cardText.textContent = "Our Equilibtium collection promotes balance and calm";
  cardText.style.paddingLeft = "15px";
  cardText.style.fontSize = "18px";
  cardText.style.fontFamily = "https://fonts.google.com/specimen/Outfit";
  cardText.style.color = "hsl(215, 51%, 70%)";



  const cardPlace = document.createElement("p");
  card.append(cardPlace);
  cardPlace.textContent = "0.041 ETH";
  cardPlace.style.color = "hsl(178, 100%, 50%)";
  cardPlace.style.paddingLeft = "15px";



  const cardTime = document.createElement("p");
  card.append(cardTime);
  cardTime.textContent = "3 days left";
  cardTime.style.float = "right";
  cardTime.style.color = "hsl(215, 51%, 70%)";


  const imgAuthor = document.createElement("img");
  card.append(imgAuthor);
  imgAuthor.setAttribute(
    "src",
    "images/image-avatar.png"
  );
  imgAuthor.style.width = "50px";
  imgAuthor.style.border = "1px solid white";
  imgAuthor.style.borderRadius = "50px";




  const authorName = document.createElement("p");
  card.append(authorName);
  authorName.textContent = "Creation of Jules Wyvern";
  authorName.style.display = "inline";
  authorName.style.fontFamily = "https://fonts.google.com/specimen/Outfit";
  authorName.style.color = "hsl(215, 51%, 70%)";


  document.body.append(wrapper);
  wrapper.append(card);




  const wrapperStyle = document.querySelector("#wrapper");


});


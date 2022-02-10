window.addEventListener("load", function () {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");

    const card = document.createElement("div");
    card.setAttribute("id", "card");

    const img = document.createElement("img");

    const cardTitle = document.createElement("h3");
    cardTitle.style.color = "hsl(0, 0%, 100%)";

    const cardText = document.createElement("p");
    cardText.style.color = "hsl(215, 51%, 70%)";
    cardText.style.fontFamily = "https://fonts.google.com/specimen/Outfit";
    cardText.style.fontSize = "18px";
    cardText.style.letterSpacing = "1px";

    const cardPlace = document.createElement("p");
    const cardTime = document.createElement("p");
    const imgAuthor = document.createElement("img");
    const authorName = document.createElement("p");
   
  
    document.body.append(wrapper);
    wrapper.append(card);

    card.append(img);
    img.setAttribute(
      "src",
      "images/image-equilibrium.jpg"
    );
    img.style.width = "150px";
  
    card.append(cardTitle);
    cardTitle.textContent = "Equilibrium #3429";
  
    card.append(cardText);
    cardText.textContent = "Our Equilibtium collection promotes balance and calm";
  
    card.append(cardPlace);
    cardPlace.textContent = "0.041 ETH";

    card.append(cardTime);
    cardTime.textContent = "3 days left";
  
    card.append(imgAuthor);
    imgAuthor.setAttribute(
      "src",
      "images/image-avatar.png"
    );

    card.append(authorName);
    authorName.textContent = "Creation of Jules Wyvern";
  
   
    const wrapperStyle = document.querySelector("#wrapper");

    wrapperStyle.style.cssText = `
        position: absolute;
        left: 40%;
        top: 50%;
        max-width: 320px;
        margin: 0 auto;
        transform: translate(-50%, -50%);
        font-size: 18px;
        background-color:  hsl(216, 50%, 16%);
    `;

    card.style.cssText = `
    background-color:  hsl(216, 50%, 16%);
    display: flex;
    top: 30px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 30px;

    `;

 
  
  
   
  });
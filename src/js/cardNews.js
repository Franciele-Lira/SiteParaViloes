class Cardnews extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }
  
    build() {

      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");

      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__left");

      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");
  
      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("content");

      const newsatibut = document.createElement("h3");
      newsatibut.textContent = this.getAttribute("h3");

      const vantagens = document.createElement("p");
      vantagens.textContent = this.getAttribute("p")
  
     
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsContent);
      cardLeft.appendChild(newsatibut);
      cardLeft.appendChild(vantagens);
  
      const cardRight = document.createElement("div");
      cardRight.setAttribute("class", "card__right");

        

  
      const newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("photo") || "/Darth_Vader/Assets/foto-default.jpg";
      newsImage.alt = "Foto da Noticia";
      cardRight.appendChild(newsImage);
  
      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);

  
      return componentRoot;
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
          .card {
            width: 100%;
            box-shadow: 9px 5px 21px 20px rgba(255, 0, 0, 0.20);
            - webkit-box-shadow: 9px 9px 27px 0px rgba(236, 229, 229, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(255, 255, 255, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 15px;
      
          }
          
          .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          
          .card__left > a {
            font-family: Andale Mono, monospace;
            margin-top: 30px;
            font-size: 25px;
            color: red;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card__left > p {
            color: white;
          }

          .card__left > h3 {
            color: white;
          }

          .card__right > img {

            max-width: 100%;
            height: auto;
        }

        

      `;
  
      return style;
    }
  }
  
  customElements.define("card-news", Cardnews);
  


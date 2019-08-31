class UI {
    constructor() {
        this.hero = document.querySelector('.heroDiv');
    }

    //display pokemon profile
    renderHero(hero) {
        const { thumbnail, name, urls } = hero;
        const { path, extension } = thumbnail;
        this.hero.innerHTML = '';
        this.hero.innerHTML += `
        <div class="md-9 mx-auto avatar-card">
        <div class="row py-3">
            <div class="col-md-4">
                <img class="img-responsive rounded mb-lg-0 box box0 ComicPanel" src=${path + '.' + extension}  style="width:100%" alt="">
            </div>    
            <div class="col-md-8">
                <div class="card box box0 h-100 mt-2 mt-lg-0 ComicPanel">
                    <div class="card-title ml-3 mt-3">
                        <h1 class="ComicTitle">${name}</h1>
                    </div>
                    <div class="card-body">
                        <p>${hero.description}</p>
                    </div>
                    <div class="card-footer">
                        <a href=${urls[0].url} class="comicbutton comicbutton-accent" target="_blank">Learn More!</a>
                    </div>
                </div>
            </div>             
          </div>    
          <div class="row avatar">

          </div>
        </div>          
        `;
    }

    renderComic({ thumbnail, title, description }) {

        const avatar = document.querySelector('.avatar');

        const imagePath = thumbnail.path + '.' + thumbnail.extension;

        avatar.innerHTML += `
        <div class="col-md-4 mb-5 flip-card">    
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img class="img-fluid avatar-image" src=${imagePath} alt="Avatar">
          </div>
          <div class="flip-card-back">
            <h4>${title}</h4> 
            <p>${description.length > 600 ? (description.substring(0, 600) + '...') : description}</p>            
          </div>        
        </div>
      </div>      
       `



        // comicFlipper.innerHTML += `
        //     <div class="col-md-4 mb-0 flip-container">
        // <div class="flipper" style="min-height:450px;">
        //     <div class="front">                        
        //         <img class="img-fluid box" src=${imagePath} alt="">
        //     </div>
        //     <div class="card h-100 back box">
        //         <div class="card-body">
        //             <h5 class="card-title">${title}</h5>
        //             <p class="card-text">${(description.length > 360) ? (description.substring(0, 360) + '...') : (description)}</p>
        //         </div>
        //         <div class="card-footer float-right">
        //             <a href="#" class="comicbutton comicbutton-accent">More Info</a>
        //         </div>
        //     </div>
        // </div>
        //     </div>  
        // `
    }

    //render array of comics
    renderComics(heroes) {
        for (let i = 0; i < 3; i++) {
            this.renderComic(heroes[this.getRandomNumber(1, 100)]);
        }
    }

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }


    //show alert message
    showAlert(message, className) {
        //cleart any remaining alerts
        this.clearAlert();
        const info = document.getElementById('info');
        //create div
        const div = document.createElement('div');
        //add class
        div.setAttribute('class', className);
        //add text
        div.innerHTML = message;

        info.appendChild(div);

        //timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearHeroes() {
        this.hero.innerHTML = '';
    }
}



export default UI;
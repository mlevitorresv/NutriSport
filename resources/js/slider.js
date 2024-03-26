class Slider{
    constructor(sliderId){
        this.slider = document.getElementById(sliderId);
        this.slides = this.slider.getElementsByClassName("details__slider__image")
        this.index = 0;


        this.prevButton = this.slider.getElementsByClassName("fi__prev")[0];
        this.nextButton = this.slider.getElementsByClassName("fi__next")[0];

        this.prevButton.onclick = () => this.showSlide(this.index - 1);
        this.nextButton.onclick = () => this.showSlide(this.index + 1);

        this.showSlide(this.index);
        this.autoSlide();
    }

    showSlide (index){
        if(index < 0) index = this.slides.length -1;
        else if(index >= this.slides.length) index = 0;

        this.slides[index].style.display = "block";

        for (let i = 0; i < this.slides.length; i++) {
            if(i !== index){
                this.slides[i].style.display="none";
            }            
        }
        this.index = index;
    }

    autoSlide(){
        setInterval(() => {
            this.showSlide(this.index + 1);
        }, 5000);
    }
}

new Slider("slider");
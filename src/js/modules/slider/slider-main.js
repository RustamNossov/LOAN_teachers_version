import Slider from './slider';

export default class MainSlider extends Slider{
    constructor (btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n<1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none'
        });

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                setTimeout(()=>{
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('animated', 'fadeInUp');
                }, 3000);
                
            }else {
                this.hanson.style.opacity = '0';
                this.hanson.classList.remove('fadeInUp');
            }
        } catch(e) {}

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try{
            this.hanson = document.querySelector('.hanson');
        }catch (error) {}


        
        this.btns.forEach( item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e)=> {
                e.preventDefault();

                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            })
        });
        this.showSlides(this.slideIndex);
    }


} 
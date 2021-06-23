import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';


window.addEventListener('DOMContentLoaded', ()=> {
    const slider = new MainSlider({container:'.page', btns:'.next'});
    slider.render();

    const moduleapp = new MainSlider({container:'.moduleapp', btns:'.next'})
    moduleapp.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider-wrapper',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
        //animate: true
    });
    feedSlider.init();


    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Forms('form').init();

    new ShowInfo('.plus').init();

    new Download('.download').init();
})
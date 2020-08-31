import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/slides.css'
const CarouselPage = () => {
  
  return (
    <div className='layout'>
  <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://s1.1zoom.me/big0/213/Bodybuilding_Men_Human_back_Muscle_563627_1280x853.jpg'/> </div>
        <a href="#carousel__slide6"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
     
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://blog.hdwallsource.com/wp-content/uploads/2016/04/fitness-girl-hd-wallpaper-51318-53016-hd-wallpapers.jpg'/></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://i.pinimg.com/originals/35/46/73/354673720bdc5a44ae23fa219a3cb001.jpg'/></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://wallpapershome.com/images/wallpapers/girl-3840x2160-fitness-exercise-gym-dumbbells-workout-sportswear-11081.jpg'/></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide5"
         class="carousel__next">Go to first slide</a>
    </li>
    <li id="carousel__slide5"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://s1.1zoom.me/big0/84/Bodybuilding_Men_Mice_Belly_512663_1280x853.jpg'/></div>
      <a href="#carousel__slide4"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide6"
         class="carousel__next">Go to first slide</a>
    </li>
    <li id="carousel__slide6"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"><img style={{width:'100%' , height:'100%'}}  src='https://images.hdqwalls.com/wallpapers/girl-fitness-model-pic.jpg'/></div>
      <a href="#carousel__slide5"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
    
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">

      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide5"
           class="carousel__navigation-button">Go to slide 5</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide6"
           class="carousel__navigation-button">Go to slide 6</a>
      </li>
    </ol>
  </aside>
</section>
    </div>
  );
}

export default CarouselPage;
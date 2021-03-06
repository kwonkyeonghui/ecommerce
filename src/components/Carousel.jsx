import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src={require("../assets/images/slide.jpg")}
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="caption-title">The Biggest</h2>
            <h3 class="caption-subtitle">Sale</h3>
            <p class="caption-text">
              <a class="btn btn-dark" href="#">
                Shop Now
              </a>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={require("../assets/images/slide.jpg")}
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>title</h5>
            <p>subtitle</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={require("../assets/images/slide.jpg")}
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>title</h5>
            <p>subtitle</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;

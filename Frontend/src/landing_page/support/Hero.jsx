import React from "react";

function Hero() {
  return (
    <section className="supportHero">
      <div className="container supportWrapper">
        <h4>
          Support Portal <a className="TrackTicket" href="">Track Tickets</a>
        </h4>
        <div className="row">
        <div className="col-8 ">
          <h3 className="my-5">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            type="text"
            placeholder="Eg:how do i activate F&O, why is my order getting rejected.."
          />
          <br />
          <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>
          <br />
          <a href="">Kite User manual</a>
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Hero;

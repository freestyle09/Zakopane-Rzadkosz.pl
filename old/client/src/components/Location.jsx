import React, { Component } from 'react';

class LocationInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='location-header'>{this.props.amount}</div>
        <h4>{this.props.info}</h4>
      </div>
    );
  }
}

class Location extends Component {
  state = {};
  render() {
    return (
      <section id='location'>
        <div className='container'>
          <div>
            <h2>Lokalizacja</h2>
            <h3>Mapka i przydatne informacje</h3>
            <div className='location-info'>
              <div>
                <LocationInfo info='Centrum Zakopanego Krupówki' amount='5 km' />
                <LocationInfo info='Trasa narciarska Nosal' amount='4 km' />
              </div>
              <div>
                <LocationInfo info='Przystanek PKS oraz BUS' amount='50 m' />
                <LocationInfo info='Sklep spożywczy' amount='700 m' />
              </div>
            </div>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.9924160472588!2d19.99311775179953!3d49.31442727633948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f24561f1d44b%3A0xda6ba58329efdd2!2sStachonie+29a%2C+Zakopane!5e0!3m2!1spl!2spl!4v1494957214964'
              frameBorder='0'
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Location;

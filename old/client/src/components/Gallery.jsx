import React, { Component } from 'react';
import Lightbox from './Lightbox';

class Gallery extends Component {
  images = [
    {
      id: 1,
      url: 'images/wolne-pokoje-w-zakopanem.jpg',
      tb: 'images/tb/wolne-pokoje-w-zakopanem.jpg',
      alt: 'Wolne pokoje w Zakopanem'
    },
    {
      id: 2,
      url: 'images/wolne-pokoje-na-sylwestra.jpg',
      tb: 'images/tb/wolne-pokoje-na-sylwestra.jpg',
      alt: 'Wolne pokoje na sylwestra'
    },
    {
      id: 3,
      url: 'images/noclegi-zakopane-z-widokiem-na-tatry.jpg',
      tb: 'images/tb/noclegi-zakopane-z-widokiem-na-tatry.jpg',
      alt: 'Noclegi zakopane z widokiem na tatry'
    },
    {
      id: 4,
      url: 'images/noclegi-i-apartamenty-zakopane.jpg',
      tb: 'images/tb/noclegi-i-apartamenty-zakopane.jpg',
      alt: 'Noclegi i apartamenty Zakopane'
    },
    {
      id: 5,
      url: 'images/tanie-noclegi-w-zakopanem.jpg',
      tb: 'images/tb/tanie-noclegi-w-zakopanem.jpg',
      alt: 'Tanie noclegi w Zakopanem'
    },
    {
      id: 6,
      url: 'images/wolne-pokoje-na-skoki-narciarskie.jpg',
      tb: 'images/tb/wolne-pokoje-na-skoki-narciarskie.jpg',
      alt: 'Wolne pokoje na skoki narciarskie'
    },
    {
      id: 7,
      url: 'images/noclegi-na-olczy.jpg',
      tb: 'images/tb/noclegi-na-olczy.jpg',
      alt: 'Noclegi w górach'
    },
    {
      id: 8,
      url: 'images/pokoje-4-osobowe-w-zakopanem.jpg',
      tb: 'images/tb/pokoje-4-osobowe-w-zakopanem.jpg',
      alt: 'Pokoje 4 osobowe w Zakopanem'
    },
    {
      id: 9,
      url: 'images/pokoje-z-lazienkami-zakopane.jpg',
      tb: 'images/tb/pokoje-z-lazienkami-zakopane.jpg',
      alt: 'Pokoje z łazienkami Zakopane'
    },
    {
      id: 10,
      url: 'images/pokoje-3-osobowe-zakopane.jpg',
      tb: 'images/tb/pokoje-3-osobowe-zakopane.jpg',
      alt: 'Pokoje 3 osobowe Zakopane'
    },
    {
      id: 11,
      url: 'images/pokoje-w-goralskim-stylu-zakopane.jpg',
      tb: 'images/tb/pokoje-w-goralskim-stylu-zakopane.jpg',
      alt: 'Pokoje w góralskim stylu Zakopane'
    },
    {
      id: 12,
      url: 'images/(23).jpg',
      tb: 'images/tb/(23).jpg'
    },
    {
      id: 13,
      url: 'images/(24).jpg',
      tb: 'images/tb/(24).jpg'
    },
    {
      id: 14,
      url: 'images/pokoje-1-osobowe-w-gorach.jpg',
      tb: 'images/tb/pokoje-1-osobowe-w-gorach.jpg',
      alt: 'Pokoje 1 osobowe w górach'
    },
    {
      id: 15,
      url: 'images/wolne-pokoje-w-gorach.jpg',
      tb: 'images/tb/wolne-pokoje-w-gorach.jpg',
      alt: 'Wolne pokoje w górach'
    },
    {
      id: 16,
      url: 'images/(28).jpg',
      tb: 'images/tb/(28).jpg'
    },
    {
      id: 17,
      url: 'images/noclegi-z-wyzywieniem-zakopane.jpg',
      tb: 'images/tb/noclegi-z-wyzywieniem-zakopane.jpg',
      alt: 'Noclegi z wyżywieniem Zakopane'
    },
    {
      id: 18,
      url: 'images/krystyna-rzadkosz-zakopane-stachonie-olcza.jpg',
      tb: 'images/tb/krystyna-rzadkosz-zakopane-stachonie-olcza.jpg',
      alt: 'Krystyna Rzadkosz Zakopane Stachonie Olcza'
    }
  ];
  render() {
    return (
      <section id='gallery'>
        <Lightbox images={this.images} />
      </section>
    );
  }
}

export default Gallery;

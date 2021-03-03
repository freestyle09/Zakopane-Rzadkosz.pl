import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <section id='home'>
        <div className='container'>
          <h2>Witamy na naszej stronie!</h2>
          <hr />
          <div>
            Nasz dom położony jest w malowniczej dzielnicy <strong>Zakopanego</strong> - <strong>Olczy</strong>.
          </div>
          <div>
            Eleganckie wnętrza budynku, cisza, spokój i <strong>wspaniała rodzinna atmosfera</strong> na pewno dostarczą
            niezapomnianych wrażeń każdemu z gości. Przygotowaliśmy dla Państwa miejsca w{' '}
            <strong>2,3,4 osobowych pokojach z łazienkami</strong>, niektóre z nich <strong>w stylu góralskim</strong>{' '}
            posiadające łóżka małżeńskie. Przed naszym obiektem znajduję się <strong>bezpłatny parking</strong>, więc
            bez problemu mogą Państwo przyjechać do nas <strong>własnym samochodem</strong>. Obiekt posiada także{' '}
            <strong>sieć Wi-fi</strong> w całym budynku.
          </div>
          <div>
            Spacerując po okolicy mają Państwo okazję podziwiać piękną <strong>panoramę Tatr</strong> oraz{' '}
            <strong>miasto Zakopane</strong>. Niedaleko naszego domu, bo w odległości ok. 1km położony jest{' '}
            <strong>wyciąg na Harendzie</strong>. 50 metrów od budynku znajduję się{' '}
            <strong>przystanek autobusowy</strong> z którego można dojechać do <strong>Krupówek</strong>, do{' '}
            <strong>Kuźnic</strong>, czy też do Dworca PKS skąd mogą państwo dojechać do <strong>Morskiego Oka</strong>{' '}
            bądź też <strong>Doliny Kościeliskiej</strong>.
          </div>
          <div>
            W odległości ok. 1km znajduje się też stacja PKN Orlen oraz <strong>restauracja McDonald's</strong>. Możliwy
            jest także dowóz na telefon w różnych <strong>pizzeriach</strong> oraz tego typu obiektach.
          </div>
          <div>
            Jest tu także do dyspozycji kominek przy którym można odpocząć po trudach górskich wędrówek. Aby poznać
            walory podhalańskiej ziemi oraz naszą gościnność trzeba do Nas po prostu przyjechać !
          </div>
          <div>
            Nasi goście często wracają i przyjeżdżają na <strong>skoki narciarskie</strong>, <strong>na ferie</strong>,{' '}
            <strong>na wakacje</strong> czy <strong>na sylwestra</strong>. Jeśli są Państwo zainteresowani naszą ofertą
            zapraszamy do kontaktu!
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

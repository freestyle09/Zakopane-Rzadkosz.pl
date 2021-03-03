import React, { Component } from 'react';

class Header extends Component {
  goto = selector => {
    this.closeMenu();
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        clearInterval(checkExist);
      }
    }, 100);
  };

  goToAboutUs = () => {
    this.goto('home');
  };
  goToLocation = () => {
    this.goto('location');
  };
  goToGallery = () => {
    this.goto('gallery');
  };
  goToContact = () => {
    this.goto('contact');
  };

  showMenu = () => {
    this.clickable.current.classList.toggle('clickable');
    this.menu.current.classList.toggle('menu-active');
    this.button.current.classList.toggle('menu-button-active');
  };

  closeMenu = () => {
    if (this.menu.current.classList.contains('menu-active')) {
      this.clickable.current.classList.remove('clickable');
      this.menu.current.classList.remove('menu-active');
      this.button.current.classList.remove('menu-button-active');
    }
  };

  menu = React.createRef();
  button = React.createRef();
  clickable = React.createRef();

  render() {
    return (
      <header>
        <div className='background-image' />
        <div className='container'>
          <div className='menu'>
            <h1>Zakopane-Rzadkosz.pl</h1>
            <ul className='nav' ref={this.menu}>
              <li>
                <a onClick={this.goToAboutUs}>O nas</a>
              </li>
              <li>
                <a onClick={this.goToLocation}>Lokalizacja</a>
              </li>
              <li>
                <a onClick={this.goToGallery}>Galeria</a>
              </li>
              <li>
                <a onClick={this.goToContact}>Kontakt</a>
              </li>
            </ul>
            <button onClick={this.showMenu} ref={this.button} className='menu-button'>
              <i className='fas fa-bars' />
            </button>
            <div className='click-helper' ref={this.clickable} onClick={this.closeMenu} />
          </div>

          <div className='offer'>
            <h2>Szukasz dobrego miejsca na wypoczynek?</h2>
            <h3>Sprawdź naszą ofertę!</h3>
            <button onClick={this.goToAboutUs}>Sprawdź</button>
          </div>
          <div className='qoute'>"Dom nie jest tam gdzie mieszkamy, ale tam, gdzie kochamy i jesteśmy kochani."</div>
        </div>
      </header>
    );
  }
}

export default Header;

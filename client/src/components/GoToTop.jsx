import React from 'react';

export default class GoToTop extends React.Component {
  button;

  goToTop = () => {
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  };
  render() {
    return (
      <div onClick={this.goToTop} className='no-display shadow' id='goToTop'>
        <i className='fa fa-arrow-circle-up' />
      </div>
    );
  }

  detectScrollPosition = () => {
    if (window.scrollY > 200) {
      this.button.classList.add('go-to-top');
    } else {
      if (this.button.classList.contains('go-to-top')) {
        this.button.classList.remove('go-to-top');
      }
    }
  };

  componentDidMount() {
    this.button = document.getElementById('goToTop');
    window.addEventListener('scroll', this.detectScrollPosition);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.detectScrollPosition);
  }
}

import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

function registerClickOutside (selector, callback) {
  document.body.addEventListener('click', function (event) {
    if (!selector.contains(event.target)) {
      callback();
    }
  });
}

class DropDown {
  constructor (element, selector, icon, showClass) {
    this.element = element;
    this.children = this.element.querySelectorAll(selector);
    this.hamburger = this.element.querySelector(icon);
    this.showClass = showClass;
    registerClickOutside(this.element, this.close.bind(this));
    this.childClicked();
    this.showDropDown();
  }
  showDropDown () {
    this.hamburger.addEventListener('click', () => {
      this.element.classList.toggle(this.showClass);
    });
  }

  childClicked () {
    this.children.forEach(child => {
      child.addEventListener('click', event => {
        this.element.dataset.picked = event.target.textContent;
        this.close();
      });
    });
  }

  close () {
    if (this.element.classList.contains(this.showClass)) {
      this.element.classList.remove(this.showClass);
    }
  }
}
(() =>
  new DropDown(
    document.querySelector('.products--dropdown-content'),
    'li',
    '.products-hamburger',
    'show-dropdown'
  ))();

tns({
  container: '.product-slider-container',
  controls: false,
  loop: true,
  items: 1,
  slideBy: 'page',
  nav: true,
  edgePadding: 0,
  gutter: 0,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  responsive: {
    577: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
tns({
  container: '.chair-slider-container',
  controls: false,
  loop: true,
  items: 1,
  slideBy: 'page',
  nav: true,
  edgePadding: 0,
  gutter: 0,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  responsive: {
    577: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
tns({
  container: '.sofa-slider-container',
  controls: false,
  loop: true,
  center: true,
  items: 1,
  slideBy: 'page',
  nav: true,
  edgePadding: 0,
  gutter: 0,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  responsive: {
    577: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
tns({
  container: '.table-slider-container',
  controls: false,
  loop: true,
  center: true,
  items: 1,
  slideBy: 'page',
  nav: true,
  edgePadding: 0,
  gutter: 0,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  responsive: {
    577: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
tns({
  container: '.dining-slider-container',
  controls: false,
  loop: true,
  center: true,
  items: 1,
  slideBy: 'page',
  nav: true,
  edgePadding: 0,
  gutter: 0,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  responsive: {
    577: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

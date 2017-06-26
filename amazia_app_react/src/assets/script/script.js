document.addEventListener('DOMContentLoaded', () => {
  console.log('Script.js linked');
  // Declare variables for all DOM elements
  const contentWrapper = document.querySelector('#content-wrapper');
  const menuWrapper = document.querySelector('#menu-wrapper');
  const burgerButton = document.querySelector('#hamburger-button');
  const allAnchors = document.querySelectorAll('a');
  const allListItems = document.querySelectorAll('li');
  // const menuWrapper = document.querySelector('#menu-wrapper');

  const slideMenu = () => {
    contentWrapper.classList.toggle('open');
  };

  const slideMenuMenu = () => {
    menuWrapper.classList.toggle('open');
  };

  // Toggle the `open` class on the hamburger when clicked
  const animateHamburger = () => {
    burgerButton.classList.toggle('open');
  };

  // Add `selected` class to clicked menu <li> element
  // Remove `selected` class to all other <li> elements
  const selectMenuItem = (event) => {
    // Define variable for clicked <li>
    // Since we're listening to clicks on <a> elements
    // we use event.target.parentNode to target the parent <li>
    let activeLi = event.target.parentNode;

    // Toggle off `selected` class for all <li> elements
    allListItems.forEach((li) => {
      li.classList.remove('selected');
    });

    // Toggle on `selected` class for clicked <li>
    activeLi.classList.add('selected');
  };

  // Add click event listeners for the hamburger button and the menu <a> elements
  // The hamburger button calls `animateHamburger` and `slideMenu`
  burgerButton.addEventListener('click', (event) => {
    // slideMenu();
    slideMenuMenu();
    animateHamburger();
  });

  // Iterate through all <a> elements and attach a click event that calls `selectMenuItem` for each one
  allAnchors.forEach((anchor) => {
    anchor.addEventListener('click', selectMenuItem);
  });

  document.querySelectorAll('.like-btn').on('click', () => {
    document.querySelectorAll('.fork-big').style.display = 'none';
    document.querySelectorAll('.fork-clicked').style.display = 'block';
  });

});

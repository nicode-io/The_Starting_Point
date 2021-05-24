function menu(module) {
  $(`#${module}`).toggle();
}

function initMenu() {
  $(`#dejeuner`).hide();

  // $(`#carte`).hide();
  $(`#entree`).hide();
  $(`#poisson`).hide();
  $(`#viande`).hide();
  $(`#fromage`).hide();
  $(`#dessert`).hide();

  $(`#balade`).hide();

}

initMenu();
const deleteProduct = ( btn ) => {
  // With the button (using 'this' on it in EJS view) in params, access other fields value
  const prodId = btn.parentNode.querySelector('[name=productId]').value;
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

  // Target nearest ancestor article (to delete it later)
  const productElement = btn.closest('article');

  // Send http request
  fetch('/admin/product/' + prodId, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrf
    }
  })
    .then(result => {
      // If ok Product is deleted in database
      return result.json();
    })
    .then(data => {
      console.log(data)
      // Delete product of the DOM
      productElement.remove();
    })
    .catch(err => {
      console.log(err)
    });
};

const listCategories = document.querySelectorAll('#categories');
listCategories.forEach(item => {
  //   console.log(item.firstElementChild.textContent);
  //   const linkRef = item.querySelector('h2');
  //   console.log(linkRef.textContent);
  const categories = item.querySelectorAll('h2');
  console.log('Number of categories:', categories.length);

  const itemRef = document.querySelectorAll('.item');
  itemRef.forEach(title => {
    console.log('Category:', title.firstElementChild.textContent);
    const itemCategory = title.querySelector('ul');
    console.log('Elements:', itemCategory.children.length);
  });
});

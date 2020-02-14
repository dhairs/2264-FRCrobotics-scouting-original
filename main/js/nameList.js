function nameList(){
  nameArray.forEach(function (name) {
      let li = document.createElement('li');
      ul.classList.add('listStuff');
      li.classList.toggle('inline-centering');
      ul.appendChild(li);

      li.innerHTML += name;
      console.log(nameArray);
  });
}

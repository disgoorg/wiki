let logo_title = document.getElementsByClassName('md-header__topic')[0]
logo_title.className = 'md-header__button md-header__topic'

logo_title.onclick = function() {
    location.href = document.location.origin;
  };
logo_title.onmouseover = function(){
  document.documentElement.style.cursor = 'pointer';
}
logo_title.onmouseout = function(){
  document.documentElement.style.cursor = 'initial';
}


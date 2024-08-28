flagsElement = document.getElementById("flags");

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    localStorage.getItem('lang')
      ? changeLang(localStorage.getItem('lang'))
      : changeLang('es')
  }
}

flagsElement.addEventListener("click", (e) => {
  const language = e.target.parentElement.dataset.lang;
  if (language && language != localStorage.getItem('lang')) {
    localStorage.setItem('lang', language)
    changeLang(language);
  }

  document.querySelectorAll(".flag__img").forEach(i => {
    if (i === e.target) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
      i.style.filter = ""
    }
  })

});
const textsToChange = document.querySelectorAll("[data-section]");

const changeLang = async language => {

  textsToChange.forEach(ttc => {
    ttc.style.animation = ""
    ttc.style.animationDuration = ""
  })

  const requestJSON = await fetch(`./langs/${language}.json`),
    data = await requestJSON.json();

  textsToChange.forEach(textToChange => {
    const section = textToChange.dataset.section,
      value = textToChange.dataset.value;
    textToChange.innerHTML = data[section][value];
    textToChange.style.animation = "fadeIn"
    textToChange.style.animationDuration = "2s"
  })
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

tippy('[data-tippy-content]', {
  theme: 'light'
});
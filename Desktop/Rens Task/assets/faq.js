<script>
 window.tasksToRun = window.tasksToRun || [];
          window.tasksToRun.push(() => {
            // $(".section-product-faq").find('#Product-content-1-3925800321122').removeClass('collapsible-content collapsible-content--all')
//   $(".section-product-faq").find(".collapsibles-wrapper").removeClass('collapsibles-wrapper--border-bottom')
//   $(".section-product-faq").find('button').removeClass('collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders')
//   $(".section-product-faq").find('button').addClass('hide')


const accordion__toggle = document.getElementsByClassName('accordion__toggle')
const accordion__content = document.getElementsByClassName('accordion__content')

for (let i = 0; i < accordion__toggle.length; i++) {
  accordion__toggle[i].onclick = function () {
    window._loq = window._loq || []; // ensure queue available
    window._loq.push(["tag", `${accordion__toggle[i].parentElement.dataset.faq}`, false]); // this will tag and star and append the tag
    const setClasses = !this.classList.contains('active')
    var content = this.nextElementSibling;
    setClass(accordion__toggle, 'active', 'remove')
    setClass(accordion__content, 'show', 'remove')

    if (setClasses) {
      this.classList.toggle('active')
      content.classList.toggle('show')
      content.style.maxHeight = content.scrollHeight + "px";

    }
  }
}

function setClass(els, className, fnName) {
  for (let i = 0; i < els.length; i++) {
    els[i].classList[fnName](className)
    els[i].style.maxHeight = null;
  }
}
          }) 
</script>
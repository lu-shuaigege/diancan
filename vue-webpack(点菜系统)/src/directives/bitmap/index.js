export default {
  inserted(el, binding) {
    let img = new Image();
    img.src = binding.value;
    img.onload = function () {
      el.src = binding.value;
    }
  }
}



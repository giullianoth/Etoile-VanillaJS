const copyrightYear = document.querySelector(".j_copy_year")

const Copyright = () => copyrightYear.innerText = (new Date()).getFullYear()

export default Copyright
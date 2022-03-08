function calculate() {
    document.getElementById("span").textContent = ""
    document.querySelector(".media-result").classList.remove("aprooved")
    document.querySelector(".media-result").classList.remove("reprooved")
    document.querySelector(".media-result").classList.remove("animate__bounce")
    document.querySelector(".media-result").classList.remove("animate__fadeInLeft")

    document.querySelector(".media-result").classList.add("animate__animated")


    const note1 = Number(document.getElementById("note1").value)
    const note2 = Number(document.getElementById("note2").value)
    const note3 = Number(document.getElementById("note3").value)
    const note4 = Number(document.getElementById("note4").value)

    verifyValue(note1)
    verifyValue(note2)
    verifyValue(note3)
    verifyValue(note4)

    const media = (note1 + note2 + note3 + note4) / 4


    if (media.toFixed(1) >= 6) {
        document.getElementById("span").textContent = `aprovado, nota: ${media.toFixed(1)}`
        document.querySelector(".media-result").classList.add("aprooved")
        document.querySelector(".media-result").classList.add("animate__bounce")

    } else {
        document.getElementById("span").textContent = `reprovado, nota: ${media.toFixed(1)}`
        document.querySelector(".media-result").classList.add("reprooved")
        document.querySelector(".media-result").classList.add("animate__fadeInLeft")
    }

    clearValue()
}

function clearValue() {
    document.getElementById("note1").value = ""
    document.getElementById("note2").value = ""
    document.getElementById("note3").value = ""
    document.getElementById("note4").value = ""
}

function verifyValue(value) {
    if (!value) {
        return
    }
}

function animation() {
    document.querySelector(".woman").classList.add("animate__animated")
    document.querySelector(".media-container").classList.add("animate__animated")
    document.querySelector(".woman").classList.add("animate__fadeInLeft")
    document.querySelector(".media-container").classList.add("animate__fadeInDown")

}
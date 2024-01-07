const showModalBtn = document.querySelector(".show-modal");
const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

showModalBtn.addEventListener("click" , () => {
    backDrop.classList.remove("hidden");
    modal.classList.remove("hidden");
});

function closeModal () {
    backDrop.classList.add("hidden");
    modal.classList.add("hidden");
}
closeModalBtn.addEventListener("click" , closeModal);
backDrop.addEventListener("click" , closeModal);
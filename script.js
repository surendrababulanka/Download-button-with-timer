const download = document.querySelector(".download");
const fileLink = "https://drive.google.com/uc?export=download&id=16rTAYacGftyvTG1q2Edxnr7fXlurJwGy";

const initTimer = () => {
    if (download.classList.contains("disable-timer")) {
        return (location.href = fileLink);
    }
    let timer = download.dataset.timer;
    // console.log(timer);  
    download.classList.add("timer");
    const initcounter = setInterval(() => {

        if (timer > 0) {
            timer--;
            return (download.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
        };
        clearInterval(initcounter);
        location.href = fileLink;
        download.textContent = "Your file is downloading...";
        setTimeout(() => {
            download.classList.replace("timer","disable-timer");
            download.innerHTML = `<span class="material-symbols-outlined icon">
            download
            </span>
            <span>Download Again</span>`
        }, 2000);
    }, 1000);
};


download.addEventListener("click", initTimer);




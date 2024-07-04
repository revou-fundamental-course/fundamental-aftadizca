window.onload = function () {

    const form = document.getElementById("msg-form");

    const radios = document.querySelectorAll("input[name='gender']");

    let radioVal;

    radios.forEach(radio => {
        radio.addEventListener('click', function () {
            radioVal = radio.value;
            console.log(radioVal);
        });
    });


    form.addEventListener("submit", onFormSubmit);

    const dataValidationLabel = {
        "fullname": "FullName",
        "ttl": "Birthday",
        "msg": "Message"
    }

    function dataValidtion(data) {

        let errorList = []
        for (const v of data.entries()) {
            if (v[0] !== "gender") {
                if (!v[1]) {
                    document.getElementById(v[0]).classList.add("error")
                    errorList.push(dataValidationLabel[v[0]])
                } else {
                    document.getElementById(v[0]).classList.remove("error")
                }
            }

        }

        if (errorList.length > 0) {
            document.getElementById("msg-error").querySelector("span").textContent = errorList.join(", ")
            document.getElementById("msg-error").classList.add("active")
            return false
        } else {
            document.getElementById("msg-error").classList.remove("active")
            return true
        }
    }


    function onFormSubmit(event) {
        event.preventDefault();

        // Your form handling code here
        const data = new FormData(event.target);

        //cek jika tidak ada error tampilkan result box.. dan isi data..
        if (dataValidtion(data)) {
            for (const v of data.entries()) {
                document.getElementById("msg-" + v[0]).textContent = v[1]
            }
            document.getElementById("result-wrapper").classList.add("flex")

            // jika ada error jangan tampilkan result box
        } else {
            document.getElementById("result-wrapper").classList.remove("flex")

        }


    }


    // Show and Hide Navigation Menu responsive

    const btnMenu = document.getElementById("btn-nav")
    const nav = document.getElementById("nav")

    btnMenu.addEventListener("click", onClickMenu);

    function onClickMenu(event) {
        event.preventDefault()
        nav.classList.toggle("active")
        if (nav.className == "active") {
            btnMenu.textContent = "x"
        } else {
            btnMenu.textContent = "menu"
        }
    }



    //Image slider


    let bgIndex = 0
    let bgElem = document.getElementsByClassName("home-bg")[0]
    let bgCount = bgElem.children.length

    // create slide indicator 
    let bgIndicator = document.getElementsByClassName("slide-indicator-wrapper")[0]

    for (let i = 0; i < bgCount; i++) {
        let indEl = document.createElement('div')
        indEl.classList.add("indicator-item")
        bgIndicator.append(indEl)
    }
    //set first indicator active 
    bgIndicator.children[0].classList.toggle("active")


    console.log(bgCount)

    document.getElementsByClassName("left-slide")[0].addEventListener("click", () => slideBgImg(-1))
    document.getElementsByClassName("right-slide")[0].addEventListener("click", () => slideBgImg(1))


    function slideBgImg(n) {
        let bgNext = bgIndex + n

        // to left
        if (n < 0) {
            if (bgNext < 0) {
                bgNext = bgCount - 1
            }
            bgElem.children[bgIndex].classList.toggle("show")
            bgElem.scrollTo((bgNext * window.innerWidth), 0)
            bgElem.children[bgNext].classList.toggle("show")
        }
        // to right
        if (n > 0) {
            if (bgNext > bgCount - 1) {
                bgNext = 0
            }
            bgElem.children[bgIndex].classList.toggle("show")
            bgElem.scrollTo((bgNext * window.innerWidth), 0)
            bgElem.children[bgNext].classList.toggle("show")
        }

        bgIndicator.children[bgIndex].classList.toggle("active")
        bgIndicator.children[bgNext].classList.toggle("active")


        bgIndex = bgNext

    }



    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}




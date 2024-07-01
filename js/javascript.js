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

    function dataValidtion(data) {

        let ok = true
        data.entries().forEach(
            v => {
                if (v[0] !== "gender") {
                    if (!v[1]) {
                        document.getElementById(v[0]).classList.add("error")
                        ok = false
                    } else {
                        document.getElementById(v[0]).classList.remove("error")
                    }
                }

            }

        )

        if (!ok) {
            document.getElementById("msg-error").textContent = "Field can't be empty!"
            document.getElementById("msg-error").classList.add("active")
        } else {
            document.getElementById("msg-error").classList.remove("active")
        }

        return ok;
    }


    function onFormSubmit(event) {
        event.preventDefault();

        // Your form handling code here
        const data = new FormData(event.target);

        if (dataValidtion(data)) {
            data.entries().forEach(
                v => {
                    document.getElementById("msg-" + v[0]).textContent = v[1]
                }
            )

            document.getElementById("result-wrapper").classList.add("flex")

        } else {
            document.getElementById("result-wrapper").classList.remove("flex")

        }


    }

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



}




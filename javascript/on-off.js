let active = true

        function toggle() {
            let toggle = document.querySelector('.toggle')
            let text = document.querySelector('.text')
            active = !active
            if (active) {
                toggle.classList.add('active')
                text.innerHTML = 'ON'
            } else {
                toggle.classList.remove('active')
                text.innerHTML = 'OFF'
            }
        }

        let active1 = true

        function toggle1() {
            let toggle1 = document.querySelector('.toggle1')
            let text1 = document.querySelector('.text1')
            let text11 = document.querySelector('.text11')
            active1 = !active1
            if (active1) {
                toggle1.classList.add('active1')
                text1.innerHTML = 'ON'
                text11.innerHTML = 'ON'
            } else {
                toggle1.classList.remove('active1')
                text1.innerHTML = 'OFF'
                text11.innerHTML = 'OFF'
            }
        }
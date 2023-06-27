// Factory function
function Calculadora() {
    let result = 0
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    this.btnParaDisplay = (v) => {
        this.display.value += v
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.clearDisplay = () => {
        this.display.value = ''
    }

    this.apagaUM = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (conta === 0) {
                conta = eval(conta)
                this.display.value = String(conta)
                return
            }
            if (!conta) {
                alert('conta invalida')
                return
            }
            this.display.value = String(conta)
        } catch (e) {
            alert('conta invalida')
            return
        }
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                if (result === 1) {
                    if (el.classList.contains('num')) {
                        this.clearDisplay()
                    }
                }
                this.btnParaDisplay(el.innerText)
                result = 0

            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUM()
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta()
                result = 1
            }

            this.display.focus()
        })
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
// Factory function
function Calculadora() {
    let result = 0
    this.display = document.querySelector('.display')
    this.eq = document.querySelector('.btn-eq')

    this.inicia = () => {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    this.btnParaDisplay = (v) => this.display.value += v

    this.pressionaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.realizaConta()
            }
        })
    }

    this.clearDisplay = () => this.display.value = ''

    this.apagaUM = () => this.display.value = this.display.value.slice(0, -1)

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
            this.display.focus()
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

            if (el.classList.contains('btn-clear')) this.clearDisplay() 

            if (el.classList.contains('btn-del')) this.apagaUM()

            if (el.classList.contains('btn-eq')) {
                this.realizaConta()
                result = 1
            }
            this.eq.focus()
        })
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
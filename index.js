function verificarCadastro(){
    let login = document.getElementById("login")
    let senha = document.getElementById("senha")

    if(login.value == 'ale@cesupa.br' && senha.value == '123123'){
        window.location.href = "https://www.cesupa.br"
    }
    if(login.value == 'pedrogirotto@.com' && senha.value == '223344'){
        window.location.href = 'https://www.detran.pa.gov.br/index_.php'
    }
    if(login.value == 'isaac@java.com' && senha.value == 'asdasd'){
        window.location.href = 'https://www.idopterlabs.com.br/'
    }

    if(login.value !== 'ale@cesupa.br' && senha.value !== '123123'){
        document.getElementById("erro1").innerText = 'Login incorreto!'
        document.getElementById("erro2").innerText = 'Senha incorreta!'
    }else if(login.value == 'ale@cesupa.br'){
        if(senha.value !== '123123'){
            document.getElementById("erro2").innerText = 'Senha incorreta!'
        }
    } 
    else{
        if(login.value !== 'pedro@girotto.com' && senha.value !== '223344'){
            document.getElementById("erro1").innerText = 'Login incorreto!'
            document.getElementById("erro2").innerText = 'Senha incorreta!'
        }else if(login.value == 'pedro@girotto.com'){
            if(senha.value !== '223344'){
                document.getElementById("erro2").innerText = 'Senha incorreta!'
            }
        }else{
            if(login.value !== 'isaac@java.com' && senha.value !== 'asdasd'){
                document.getElementById("erro1").innerText = 'Login incorreto!'
                document.getElementById("erro2").innerText = 'Senha incorreta!'
            }else if(login.value == 'isaac@java.com'){
                if(senha.value !== 'asdasd'){
                    document.getElementById("erro2").innerText = 'Senha incorreta!'
                }
            }
        }
    }
}

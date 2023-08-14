$(document).ready
(
    function ()
    {
        $('#telefone').mask('(00) 00000-0000')
        $('#cpf').mask('00000000000')
        $('#cep').mask('00000000')
    },
        $('form').validate
        (
        {
            rules:
            {
                nome:
                {
                    required: true
                },
                email:
                {
                    required: true,
                    email: true
                },
                telefone:
                {
                    required: true
                },
                cpf:
                {
                    required: true
                },
                cep:
                {
                    required: true,
                },
                endereco:
                {
                    required: true
                },
            },

            messages:
                {
                    nome: 'Por favor, insira seu nome',
                    telefone: 'Digite o número corretamente',
                    email: 'Escreva o e-mail correto',
                    cpf: 'Digite 11 números',
                    cep: 'Digite 8 números',
                    endereco: 'Escreva o endereço completo'
                },

            submitHandler: function (form)
                {
                    console.log (form)
                },

            invalidHandler: function (incompletos, validador)
                {
                    let camposIncorretos = validador.numberOfInvalids ();
                    console.log (camposIncorretos);
                    if (camposIncorretos)
                    {
                        alert (`Existem ${camposIncorretos} campos incompletos`)
                    }
                }

        }
        )
)
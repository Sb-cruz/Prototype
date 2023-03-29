const prompt = require('prompt-sync')();

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    clone(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)),this);
    }
}

class PessoaManager{
    constructor(){
        this.pessoas = {}
    }
    addPessoa(nome, idade, id){
        const pessoa = new Pessoa(nome, idade);
        this.pessoas[id] = pessoa;
    }
    getPessoa(id){
        return this.pessoas[id].clone(); 
    }

    getLista(){
        return this.pessoas;
    }

    validaOpcao(opcao){
        if(opcao == 1){
            let nome = prompt("Digite o seu nome: ");
            let idade = prompt("Digite a sua idade: ");
            var id = prompt("Digite o seu id: ");
            this.addPessoa(nome, idade, id);
            console.log("Usuário cadastrado: ")
            return this.getPessoa(id);

        }else if(opcao == 2){

            var id = prompt("Digite o seu id: ");
            return this.getPessoa(id);

        }else if(opcao == 3){

            var id = prompt("Digite o seu id: ");
            const pessoa = this.getPessoa(id);
            do{
                console.log("O que deseja editar? ");
                console.log("Digite 1 - Para editar o id");
                console.log("Digite 2 - Para editar o nome");
                console.log("Digite 3 - Para editar o idade");
                let editar = prompt("Digite a opção escolhida: ");

                if(editar == 1){

                    let novoId = prompt("Digite o novo id: ");
                    pessoa.id = novoId;

                }else if(editar == 2){

                    let novoNome = prompt("Digite o novo nome: ");
                    pessoa.nome = novoNome;

                }else if(editar == 3){
                    let novaIdade = prompt("Digite o novo idade: ");
                    pessoa.idade = novaIdade;

                }
                console.log("");
                var q = prompt("Digite 1 se deseja editar novamente:");
            }while(q==1)
            console.log(pessoa)
        }else if(opcao == 5){
            return this.getLista();
        }else{
            console.log("Saindo do programa . . .")
        }
    }
}

//Instanciar a classe PessoaManager
const manager = new PessoaManager();
/*
//Add pessoas
manager.addPessoa('Joao', 30, 1);
manager.addPessoa('Maria', 25, 2);
manager.addPessoa('Carlos', 20, 3);

const pessoa1 = manager.getPessoa(1);
const pessoa2 = manager.getPessoa(1);

// Modificar idade
pessoa1.idade = 18;
pessoa2.nome = 'Felipe';

//Imprimir as pessoas
console.log(manager.getPessoa(1));
console.log(manager.getPessoa(2));
console.log(manager.getPessoa(3));
console.log(pessoa1);
console.log(pessoa2); */
do{ 

    console.log("######################################################################");
    console.log("######################    Bem vindo !!    ############################");
    console.log("#####                                                            #####");
    console.log("#####         Digite 1 - Para Cadastrar uma nova pessoa          #####");
    console.log("#####         Digite 2 - Para Consultar os dados cadastrados     #####");
    console.log("#####         Digite 3 - Para editar um cadastro existente       #####");
    console.log("#####         Digite 4 - Para sair do programa                   #####");
    console.log("#####         Digite 5 - Para lista de cadastrados               #####");
    console.log("#####                                                            #####");
    console.log("######################################################################\n");

    var op = prompt("Opção escolhida: ");
    console.log(manager.validaOpcao(op));

}while(op != 4)
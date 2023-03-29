import copy;

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}'
    def clone(self):
        return copy.copy(self)
    

class PessoaManager:
    def __init__(self):
        self.pessoas = {}

    def add_pessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa

    def get_pessoa(self, id):
        return self.pessoas[id].clone()
    
#########################################################

manager = PessoaManager()

# Adicionar Pessoas
manager.add_pessoa("João", 30, 1)
manager.add_pessoa("Maria", 15, 2)
manager.add_pessoa("Felipe", 20, 3)
manager.add_pessoa("Lucas", 30, 4)

#Clonar Pessoas
pessoa1 = manager.get_pessoa(1)
pessoa2 = manager.get_pessoa(1)

#Modificando Informações
pessoa1.idade = 18
pessoa2.nome ="Lucas Chaves"
pessoa2.idade = 25

#Imprimir resultados

print(manager.get_pessoa(1))
print(manager.get_pessoa(2))
print(manager.get_pessoa(3))
print(manager.get_pessoa(4))
print (pessoa1)
print (pessoa2)
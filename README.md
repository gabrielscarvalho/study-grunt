#Grunt separando as tasks.

Baseado em: https://app.pluralsight.com/library/courses/grunt-introduction/table-of-contents


##Instalação
1. Baixe as dependências: 
    npm install



##Uso
Todos os comandos modificam suas respectivas pastas.
Ex: O comando project/Gruntfile/task.clean.js executa seu comando em project/tasks/clean


Para rodar, execute:

    grunt "taskName"


Limpa a pasta /tasks/clean:    

    grunt clean


Converte o código typescript para js da pasta: tasks/typescript

    grunt typescript

Torna o JS minificado da pasta tasks/uglify:    

    grunt uglify

Valida o js:

    grunt jshint

Inicia uma branch utilizando o shelljs (mesmo utilizado pelo grunt)    

    grunt init-git
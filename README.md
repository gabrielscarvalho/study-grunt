#Grunt separando as tasks.

##Instalação
1. Baixe as dependências: npm install



##Uso
Todos os comandos modificam suas respectivas pastas.
Ex: O comando project/Gruntfile/task.clean.js executa seu comando em project/tasks/clean


Para rodar, execute:

    grunt "taskName"

    grunt clean
    grunt typescript
    grunt uglify
    grunt jshint
    grunt init-git
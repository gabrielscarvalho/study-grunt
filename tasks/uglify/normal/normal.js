var pessoa = function(nome, sobrenome, idade) {
	var nomeCompleto = nome + " " + sobrenome;
	nomeCompleto+= ".";
	console.log(nomeCompleto + " idade: " + idade);
	return nomeCompleto;
}
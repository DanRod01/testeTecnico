<?php
$host = "localhost";
$user = "root";          
$password = "";          
$dbname = "cadastro";  

$conn = new mysqli($host, $user, $password, $dbname);


if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'] ?? '';
$sobrenome = $_POST['sobrenome'] ?? '';
$idade = $_POST['idade'] ?? '';
$celular = $_POST['celular'] ?? '';
$principal = $_POST['principal'] ?? '';
$whatssap = $_POST['whatssap'] ?? '';
$email = $_POST['email'] ?? '';
$corporativo = $_POST['corporativo'] ?? '';


$stmt = $conn->prepare("INSERT INTO funcionarios (nome, sobrenome, idade, celular, principal, whatssap, email, corporativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssisssss", $nome, $sobrenome, $idade, $celular, $principal, $whatssap, $email, $corporativo);

if ($stmt->execute()) {
    echo "Funcionário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
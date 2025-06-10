//ADICIONANDO FUNÇÃO
let tarefas = [];

//FUNÇÃO VALIDAR CAMPO

const validarCampo=()=>{
    let valida = false;
    if(document.getElementById("task").value=="") valida =true;
    return valida;
}

//FUNÇÃO ADICIONAR TAREFA

function adicionarTarefa(){
    let linhas = document.getElementById("task")

    if(validarCampo()){
        //alert("Por favor, preencha o campo de tarefa.")
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo de tarefa",
            confirmButtonColor:"#0E477CFF",
            confirmButtontext:"OK"
        })
    }
    else{
        tarefas.push(linhas.value)
        linhas.value="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa adiconada com sucesso",
            showConfirmButton:false,
            timer:1500,
            
    })
}
}
//LISTAR TAREFAS

function listarTarefas(){
    let valor ='';
    for(let i=0; i <tarefas.length;i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}

//REMOVER TAREFA
function removerTarefa(){
    tarefas.pop(); //remove o ultimo item adicionado
    listarTarefas();
}
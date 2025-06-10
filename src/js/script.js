//DECLARANDO VARIAVEL

let tarefas = [];

//FUNÇÃO VALIDAR CAMPO

const validarCampo=()=>{
    let valida =false;
    if(document.getElementById("task").value =="") valida =true;
    return valida;
}

//FUNÇÃO ADICIONAR TAREFA

function adicionarTarefa(){
    let linhas = document.getElementById("task")

    if(validarCampo()){
        // alert("Preencha o campo de tarefa")
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
        });
    }
}
//LISTAR TAREFAS

function listarTarefas(){
    let valor ="";
    for(let i=0; i <tarefas.length;i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}
function removerTarefa() {
    if (tarefas.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Nenhuma tarefa para remover!',
            text: 'Sua lista de tarefas está vazia.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        });
        return;
    }

    Swal.fire({
        title: 'Tem certeza?',
        text: "A última tarefa será removida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, remover!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            tarefas.pop();
            listarTarefas();
            Swal.fire(
                'Removido!',
                'A tarefa foi removida.',
                'success'
            );
        }
    });
}



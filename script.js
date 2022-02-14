$(function() {
$("<table class='table table-stripped'><thead> <th>Nome</th><th>Idade</th> <th>Grupo</th> </thead></table> ").appendTo("#bd");
//Checkbox Code
        $("#agree").click(function(){
           $("#submitBtn").attr("disabled", !this.checked);
        });
//Submit Button
        $("#submitBtn").click(function(){
            var nm = $("#name").val();
            var rollNo = $("#rollNo").val();
            var sub = $("#subject").val();
            if(nm == ""){
                swal("Atenção","Por favor, escreva o seu nome.","warning");
            }
            if(rollNo  == ""){
                swal({
                    title: "Preencha todos os dados.",
                    text: "Você tem certeza que quer continuar?",
                    icon : "warning",
                    dangerMode: true,
                    buttons:[
                        "Sim, Continuar",
                        "Não"
                    ]
                }).then(function(isConfirm){
                    if(!isConfirm){
                        $(" <tr><td>"+nm+"</td><td>"+rollNo+"</td><td>"+sub+"</td></tr>").appendTo("thead");
                swal("Sucesso","Cadastro concluido!","success");
                    }
                });
            }
            if(nm != "" && rollNo != ""){
                $(" <tr><td>"+nm+"</td><td>"+rollNo+"</td><td>"+sub+"</td></tr>").appendTo("thead");
                swal("Sucesso.","Cadastro concluido!","success");
        }
        
            });
});

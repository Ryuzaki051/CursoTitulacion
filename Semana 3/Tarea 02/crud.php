    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Basic CRUD Application - BD Noticias</title>
        <link rel="shortcut icon" href="../../icon/bleach.ico" type="image/x-icon" />

    <link rel="stylesheet" type="text/css" href="css/easyui.css">
    <link rel="stylesheet" type="text/css" href="css/icon.css">
    <link rel="stylesheet" type="text/css" href="css/color.css">
    <link rel="stylesheet" type="text/css" href="css/demo.css">
    <script type="text/javascript" src="noticrud/js/jquery-1.6.min.js"></script>
    <script type="text/javascript" src="noticrud/js/jquery.easyui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="noticrud/css/main.css">
    </head>
    <body>
        <h2 id="htitle">Base de control de Noticias</h2>
        <br/>
        <hr/>
        <div id="tabps">
        <table id="dg" title="Mis Noticias" class="easyui-datagrid" style="width:700px;height:250px"
                url="noticrud/get_news.php"
                toolbar="#toolbar" pagination="true"
                rownumbers="true" fitColumns="true" singleSelect="true">
            <thead>
                <tr>
                    <th field="id" width="50">id</th>
                    <th field="titulo" width="50">Titulo</th>
                    <th field="contenido" width="50">Contenido</th>
                </tr>
            </thead>
        </table>
        </div>
        <div id="backpage">
           <h3> Regresar a: <a class="aregistro" href="tablas.php">Tablas</a> - <a class="aregistro" href="accordeon.php">Accordeon</a></h3>
        </div>
        <hr/>

        <div id="toolbar">
            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="newUser()">Nueva Noticia</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="editUser()">Editar Noticia</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="destroyUser()">Eliminar Noticia</a>
        </div>
        
        <div id="dlg" class="easyui-dialog" style="width:400px;height:280px;padding:10px 20px"
                closed="true" buttons="#dlg-buttons">
            <div class="ftitle">Informacion de Noticias</div>
            <form id="fm" method="post" novalidate>
                <div class="fitem">
                    <label>Id:</label>
                    <input name="id" class="easyui-textbox" required="true">
                </div>
                <div class="fitem">
                    <label>Titulo:</label>
                    <input name="titulo" class="easyui-textbox" required="true">
                </div>
                <div class="fitem">
                    <label>Contenido:</label>
                    <input name="contenido" class="easyui-textbox">
                </div>
            </form>
        </div>
        <div id="dlg-buttons">
            <a href="javascript:void(0)" class="easyui-linkbutton c6" iconCls="icon-ok" onclick="saveUser()" style="width:90px">Guardar</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-cancel" onclick="javascript:$('#dlg').dialog('close')" style="width:90px">Cancelar</a>
        </div>
        <script type="text/javascript">
            var url;
            function newUser(){
                $('#dlg').dialog('open').dialog('center').dialog('setTitle','Nueva Noticia');
                $('#fm').form('clear');
                url = 'noticrud/save_news.php';
            }
            function editUser(){
                var row = $('#dg').datagrid('getSelected');
                if (row){
                    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Editar Noticia');
                    $('#fm').form('load',row);
                    url = 'noticrud/update_news.php?id='+row.id;
                }
            }
            function saveUser(){
                $('#fm').form('submit',{
                    url: url,
                    onSubmit: function(){
                        return $(this).form('validate');
                    },
                    success: function(result){
                        var result = eval('('+result+')');
                        if (result.errorMsg){
                            $.messager.show({
                                title: 'Error',
                                msg: result.errorMsg
                            });
                        } else {
                            $('#dlg').dialog('close');        // close the dialog
                            $('#dg').datagrid('reload');    // reload the user data
                        }
                    }
                });
            }
            function destroyUser(){
                var row = $('#dg').datagrid('getSelected');
                if (row){
                    $.messager.confirm('Confirm','Estas seguro de querer eleminar esta noticia?',function(r){
                        if (r){
                            $.post('noticrud/destroy_news.php',{id:row.id},function(result){
                                if (result.success){
                                    $('#dg').datagrid('reload');    // reload the user data
                                } else {
                                    $.messager.show({    // show error message
                                        title: 'Error',
                                        msg: result.errorMsg
                                    });
                                }
                            },'json');
                        }
                    });
                }
            }
        </script>
    </body>
    </html>
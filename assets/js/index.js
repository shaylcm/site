/*mostra o menu na forma mobile*/
function menu_mobile()
{

  if(document.getElementById("menus").style.display == 'block'){
	   document.getElementById("menus").style.display = 'none';
  }else{
	document.getElementById("menus").style.display = 'block';
  };

  // document.getElementById("mobile").style.backgroundColor = " #141F49"
 
}

/*fecha o menu mobile após escolher a opção*/
function menu_mobile_fechar()
{
	    document.getElementById("menus").style.display = "none";
}
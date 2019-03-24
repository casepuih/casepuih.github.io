function addItem(){
	
	// recup le contenu du input dans un TextNode
	var textnode = document.createTextNode(document.getElementById("in").value);  
	// recup la valeur du checkbox
	var checkbox1 = document.getElementById("cb1").checked;
	var checkbox2 = document.getElementById("cb2").checked;
	

	// cree un nouvel element d'une liste auquel on ajoute le TextNode	
	var node = document.createElement("LI");
	node.appendChild(textnode);

	if (checkbox1){
		node.style.color = "red" ;
		
	} 
	if (checkbox2){
		node.style.textDecoration = "underline" ;
		
	} 
	

	document.getElementById("myList").appendChild(node);
	
	
	
}
function deleteItem(){
	
	
	var index = document.getElementById("cb3").value ;
	var elements = document.getElementById("myList") ;

	elements.removeChild(elements.childNodes[index]) ; 

	

}

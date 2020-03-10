this._rendered=typeof(this._rendered)=='undefined'?false:this._rendered;
if(this.contextObj!=null&&!this._rendered){
                this._rendered=true;
	mx.ui.openForm("Anonymous/pop_comment.page.xml", {
		location: "node",
		domNode:this.domNode,
		context:this.mxcontext,
		callback: function(form) {
			console.log(form.id);
		}
	});	
}else{
}
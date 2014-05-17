$(document).ready(function(){
	
	var Auth = {
	
		check: function(login, password){
			$('.error').text('');
			if(login.val().length == 0){
				$('.error').text('Login is incorrect');
				return false;
			}
			if(password.val().length <= 6){
				$('.error').text('Password is incorrect');
				return false;
			}
			return true;
		}
	}
	$('input.auth').click(function(){
		var response = Auth.check($('.login'), $('.password'));
		if(!response) 
			return false;
	})
	var Cars = {
		models: {'1':['C180','ML320','G500'], 
				 '2': ['530','750','X5'], 
				 '3': ['Skyline','Teana','Altima']},
		getModels: function(id){
			var content = '';
			for(key in this.models[id]) {
				content = content + '<option>' + this.models[id][key] + '</option>';
			}
			$('select.model').html(content);
		}
	}
	$('select.make').change(function(){
		var id = $(this).val();
		Cars.getModels(id);
	})
	
	
});
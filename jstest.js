function  check_input(){
//各変数に入力フォームの値を代入
	var js_name = document.forms.input_form.id_name.value;
	var js_age = document.forms.input_form.id_age.value;
	var js_gender = document.forms.input_form.id_gender.value;
	var js_question1 = document.forms.input_form.id_question1.value;
	var js_question2 = document.forms.input_form.id_question2.value;
	var js_question3 = document.forms.input_form.id_question3.value;
	var js_question4 = document.forms.input_form.id_question4.value;

//名前チェック
	if(js_name.match(/[^0-9]/)){
		if(51 > js_name.length){
			alert("nameOK");
		} else {
			alert("名前は５０文字以内で入力してください");
		}
	}
	else{
		alert("名前の項目に誤りがあります");
	}

//年齢チェック
	if(js_age.match(/[0-9]/)){
		var int_age = parseInt(js_age);
		if(0 < int_age && 120 >= int_age){
			alert("ageOK");
		} else {
			alert("不正な数字です");
		}
	}
	else{
		alert("年齢の項目に誤りがあります");
	}

//質問４チェック
	if(js_name != null){	//値が入っているなら
		if(400 > js_name.length){
			alert("question4OK");
		} else {
			alert("質問は400文字以内で入力してください");
		}
	}
}
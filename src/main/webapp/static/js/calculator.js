(function($, Calc){
	"use strict";

	Calc.DataManager = function() {
		this.init();
	};

	Calc.DataManager.prototype = {
		cmd_string: "",
		result_string: "",
		previous_res: 0,
		api_jcalculator_url: window.location.origin + "/api-jcalculator/math",

		// ******* CONSTRUCTOR ********
		init : function(){
			this.load_default();
		},

		// ******* MTD ********
		load_default : function(){
			this.update_display("");
			this.result_string = "";
			this.previous_res = 0;
		},
		add_char : function(c){
			this.cmd_string += c;
			this.update_display();
		},
		rm_char : function(){
			if(this.cmd_string !== "")
			{
				var s = this.cmd_string;
				var del_char = s[s.length-1];
				this.cmd_string = s.substr(0, s.length-1);
			}

			this.update_display();
		},
		compute_expression : function(){
			var ret = ""; 
			// TODO : call submit data

			// tmp solution
			if(this.cmd_string !== ""){
				//try {
					if(this.cmd_string[0] == "-" || this.cmd_string[0] == "+" || this.cmd_string[0] == "*" || this.cmd_string[0] == "/")
					{
						this.cmd_string = this.previous_res + this.cmd_string;
					}
					
					this.submit_data(this.api_jcalculator_url, this.cmd_string);
					//var tmp = eval(this.cmd_string);
					//ret = tmp + "";
					//this.previous_res = tmp;
				//} catch (e) {
				//	ret = "syntax error";
				//}
			}

			/*this.result_string = ret;
			this.cmd_string = "";
			this.update_display();*/
		},
		submit_data_callback : function(data, error_code){
			
			// Succes
			if(error_code == undefined){
				this.result_string = data.result + "";
				this.previous_res = data.result;
			}
			// Syntax error
			else if (error_code == 400){
				this.result_string = "syntax error";				
			}
			// API error
			else if (error_code == 404){
				this.result_string = "data computation error";				
			}
			
			this.cmd_string = "";
			this.update_display();
		},
		// ******* AJAX ********
		submit_data : function(action_url, cmd_string){
			$.ajax({
				type: "GET",
				data: { "expression": cmd_string },
				url: action_url,
				success: function (ret) { Calc.data_manager.submit_data_callback(ret); },
				error:function (xhr) {  Calc.data_manager.submit_data_callback(null, xhr.status); }
			});
		},

		// ******* HTML ********
		update_display : function(){
			var disp_string = this.cmd_string + "";
			if(this.result_string !== "")
			{
				disp_string = this.result_string + "";
				this.result_string = "";
			}

			$(".display_interface p").html(disp_string);
		}
	};

	Calc.data_manager = new Calc.DataManager();

	// ******* BUTTONS ********
	// ------ numbers
	$(".calc_btn_num").click(function(){
		Calc.data_manager.add_char($(this).find("p").html());
		console.log($(this).find("p").html());
	});
	$("#calc_btn_dot").click(function(){
		Calc.data_manager.add_char('.');
		console.log("dot");
	});

	// ------ memory
	$("#calc_btn_mc").click(function(){
		console.log("memory: clear");
	});
	$("#calc_btn_mr").click(function(){
		console.log("memory: recall");
	});

	$("#calc_btn_ms").click(function(){
		console.log("memory: store");
	});

	// ------ operations
	$(".calc_btn_op").click(function(){
		Calc.data_manager.add_char($(this).attr("value"));
		console.log("operation: " + $(this).attr("value"));
	});

	// ------ other
	$("#calc_btn_c").click(function(){
		Calc.data_manager.rm_char();
		console.log("clear");
	});
	$("#calc_btn_enter").click(function(){
		Calc.data_manager.compute_expression();
		console.log("enter");
	});

	$("html").focus();
	$("html").bind('keydown',function( event ) {
		switch(event.which){
			case 8:
				event.preventDefault();	
				Calc.data_manager.rm_char();
				break;
			case 13:
				event.preventDefault();	
				Calc.data_manager.compute_expression();
				break;
			case 96: case 48://0
				Calc.data_manager.add_char('0');
				break;
			case 97: case 49://1
				Calc.data_manager.add_char('1');
				break;
			case 98: case 50://2
				Calc.data_manager.add_char('2');
				break;
			case 99: case 51://3
				Calc.data_manager.add_char('3');
				break;
			case 100: case 52://4
				Calc.data_manager.add_char('4');
				break;
			case 101: case 53://5
				Calc.data_manager.add_char('5');
				break;
			case 102: case 54://6
				Calc.data_manager.add_char('6');
				break;
			case 103: case 55://7
				Calc.data_manager.add_char('7');
				break;
			case 104: case 56://8
				Calc.data_manager.add_char('8');
				break;
			case 105: case 57://9
				Calc.data_manager.add_char('9');
				break;
			case 107:
				Calc.data_manager.add_char('+');
				break;
			case 109:
				Calc.data_manager.add_char('-');
				break;
			case 106:
				Calc.data_manager.add_char('*');
				break;
			case 111:
				Calc.data_manager.add_char('/');
				break;
			case 194: case 110:
				Calc.data_manager.add_char('.');
				break;
		}
		console.log(event.which);
	});
}(window.jQuery, window.Calc = window.Calc || {}));
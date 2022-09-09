document.querySelector(".login-form").addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:r,password:t}}=e.currentTarget;if(""===r.value||""===t.value)return void alert("Заполните все поля для отправки формы!");const a={email:r.value,password:t.value};console.log(a),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.e41df399.js.map

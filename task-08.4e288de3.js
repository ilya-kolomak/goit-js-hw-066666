document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,a=r.email,t=r.password;if(""!==a.value&&""!==t.value){var l={email:a.value,password:t.value};console.log(l),e.currentTarget.reset()}else alert("Заполните все поля для отправки формы!")}));
//# sourceMappingURL=task-08.4e288de3.js.map

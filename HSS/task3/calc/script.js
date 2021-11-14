// Переменная для ввода баллов
let num1;  

// Переменная для %
let percent;

// Вывод скидки
function discount() {
	num1 = document.getElementById('n1').value; 
	 if (num1 < 100)
	 {
		 percent='1%', Swal.fire(percent)
	 }
    else if((num1 >99)&&(num1 <200))
   {
		 percent='3%', Swal.fire(percent)
	 }
   else if((num1 >199)&&(num1 <500))
   {
		 percent='5%', Swal.fire(percent)
	 }
   else if((num1 > 499)) 
   {
		 percent='10%', Swal.fire(percent)
	 }
}









const puppeteer = require('puppeteer'); 

async function testReg(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 20,
    });

   console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

     console.log('Переход на страницу resumesimple.dev.hsworld.ru');
    await page.goto('http://resumesimple.dev.hsworld.ru/', { waitUntil: 'networkidle0' });
	
	
	 console.log('Клик по "Вход"');
	await page.click('#app > div:nth-child(1) > header > div > div > div > button.btn.btn-br.btn-br--blue');
	
			
	console.log('Ввод login');
	await page.type('#app > div:nth-child(1) > div > div > div.modal__block.modal-login > div > div:nth-child(1) > form > label:nth-child(1) > input[type=text]', 'vm.11sep@gmail.com'); 
	
	console.log('Ввод password');
  await page.type('#app > div:nth-child(1) > div > div > div.modal__block.modal-login > div > div:nth-child(1) > form > label:nth-child(2) > input[type=password]', 'Derparol1988');
  
  console.log('Клик по "Войти"');
	await page.click('#app > div:nth-child(1) > div > div > div.modal__block.modal-login > div > div:nth-child(1) > form > button');
	                  					  
 
 console.log('Клик по "Конструктор резюме"');
 await page.waitForSelector('#app > div > header > div > div > div > div > ul');
 await page.click('#app > div > header > div > div > div > div > ul > li:nth-child(1) > a');
              
 
 console.log('Ввод названия резюме');
  await page.type('#input-17', 'Тестовое');
	  
  console.log('Ввод имени');	
  await page.type('#input-49', 'Иван');
  
  console.log('Ввод фамилии');
  await page.type('#input-146', 'Иванов');
  
  console.log('Ввод отчества');
  await page.type('#input-149', 'Иванович');
  
  console.log('Ввод города');
  await page.type('#input-156', 'Москва');
  
  console.log('Ввод тлф');
  await page.type('#input-159', '9561234567');
  
  	
	console.log('Клик по "Далее"');
	await page.click('#app > div > main > div > div > div > div > div > div:nth-child(3) > div > button');
		
	console.log('Клик по "Далее"');
	await page.click('#app > div > main > div > div > div > div > div > div:nth-child(3) > div > button:nth-child(2) > span');
	
	console.log('Клик по "Сохранить"');
	await page.click('##app > div > main > div > div > div > div > div > div:nth-child(3) > div > button:nth-child(2) > span');
	
  
   console.log('Закрытие браузера');
    await browser.close();
	
	console.log('Test passed');
}

testReg(); 


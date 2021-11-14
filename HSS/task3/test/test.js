const puppeteer = require('puppeteer'); 

async function testReg(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 40,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу калькулятора');
    await page.goto('file:///C:/task3/calc/index.html', { waitUntil: 'networkidle0' }); 
	
	console.log('         ');
	
	console.log('Ввод баллов:0');
	await page.type('#n1', '0');
		
	await page.click('button');
	
  let result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	
	
	    result;
		console.log (result);

//очитска строки; хотя можно было и функцией.. 		
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');

		
console.log('         ');
	
	console.log('Ввод баллов:7');
	await page.type('#n1', '7');
	await page.click('button');
		result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
		console.log (result);
		
		await page.click('#n1');
		
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');	

console.log('         ');

console.log('Ввод баллов:99');
	await page.type('#n1', '99');
	await page.click('button');
		result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
		console.log (result)
		
		await page.click('#n1');
		
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');	

console.log('         ');

console.log('Ввод баллов:100');
	await page.type('#n1', '100');	
	await page.click('button');
		result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
		console.log (result)
		
		await page.click('#n1');
		
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');	

console.log('         ');

console.log('Ввод баллов:199');
	await page.type('#n1', '199');	
	await page.click('button');
		result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
		console.log (result)
	    
		await page.click('#n1');
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');

console.log('         ');

console.log('Ввод баллов:200');
	await page.type('#n1', '200');	
	await page.click('button');
	
  result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	console.log (result);
	
	await page.click('#n1');
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');

console.log('         ');

console.log('Ввод баллов:300');
	await page.type('#n1', '300');	
	await page.click('button');
	
  result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	console.log (result);
	
	await page.click('#n1');
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');

console.log('         ');

console.log('Ввод баллов:499');
	await page.type('#n1', '499');	
	await page.click('button');
	
  result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	console.log (result);
	
	await page.click('#n1');
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');
	
	console.log('         ');
	
	console.log('Ввод баллов:500');
	await page.type('#n1', '500');	
	await page.click('button');
	
  result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	console.log (result);
	
	await page.click('#n1');
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');
	
	console.log('         ');
	
	console.log('Ввод баллов:700');
	await page.type('#n1', '700');	
	await page.click('button');
	
  result = await page.evaluate(() => {
  let discount = document.querySelector('h2').innerText;
  return {
  discount
}
});
	console.log (result);
	
await page.focus('#n1');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');

   
   
   
   
   console.log('         ');
	
   console.log('Закрытие браузера');
   
   console.log('         ');
   
    await browser.close();
	
	console.log('Test passed');
	
	}

testReg(); 

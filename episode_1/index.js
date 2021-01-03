var a = 0;
while (a < 10) {
	console.log('while', a);
	a += 1;
}

// 초기화문; 비교문; 증감문;
for (var a = 0; a < 10; a += 1) {
	console.log('for', a);
	if (a < 5) {
		console.log('다시해');
		continue;
	}
	console.log('그다음');
}

        const currencySale = +prompt('Укажите курс продажи валюты'); 
        const currencyBuy = +prompt('Укажите курс покупки валюты');
        const quantityMoney = +prompt('Сколько денег вы хотите обменять ?'); 
        const exchangeMoney = +prompt('Сколько раз вы хотите обменять деньги ?');
        
        const exchangeResult = (currencyBuy / currencySale) ** exchangeMoney;
        const userResult = Math.round(exchangeResult * quantityMoney);
        const exchangeProfit = quantityMoney - userResult;

        alert('У вас осталось ' + userResult + ' Коммисия за обмен ' + exchangeProfit); 
    
        if (currencySale <= currencyBuy || quantityMoney <= currencyBuy) {
            alert('Проверьте правильность ввода курса или недостачно средств для обмена!');
        }
if (!document.querySelector('.messages')) {
    const container = document.createElement('div');
    container.classList.add('messages');
    container.style.cssText = 'position: fixed; top: 15px; right: 15px; width: 250px;';
    document.body.appendChild(container);
}

// получаем контейнер
const messages = document.querySelector('.messages');

// при нажатию на кнопку добавляем в контейнер alert
document.querySelector('[data-create="message"]').addEventListener('click', () => {
    var number=prompt('Укажите ваш номер телефона')
    const messageText = 'Заказ забронирован.\nДля уточнения заказа на номер ' + number +' перезвонят наши специалисты в ближайшее время!';
    const message = document.createElement('div');
    message.className = 'alert alert-succes alert-dismissible fade show';
    message.innerHTML = `${messageText}<button type="button" class="close" data-dismiss="alert">×</button>`;
    messages.appendChild(message);

    //alert('Заказ забронирован.\nДля уточнения заказа на номер ' + number +' перезвонят наши специалисты в ближайшее время!')

});
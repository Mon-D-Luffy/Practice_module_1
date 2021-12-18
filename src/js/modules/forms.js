import checkNumInputs from './checkNumInputs';

/* eslint-disable no-return-await */
const forms = (state) => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  const messages = {
    success: 'Данные отправлены успешно!',
    loading: 'Загрузка...',
    fail: 'Произошла ошибка при отправке формы!',
  };

  checkNumInputs('inpit[name="user_phone"]');

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = messages.loading;

    const result = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        const stateKeys = Object.keys(state);
        const stateValues = Object.values(state);

        stateKeys.forEach((stateKey, index) => {
          formData.append(stateKey, stateValues[index]);
        });

        if (stateValues.length > 0) {
          stateKeys.forEach((key) => {
            delete state[key];
          });
        }

        setTimeout(() => {
          document.querySelector('[data-auto_close]').style.display = 'none';
          document.body.style.overflow = '';
        }, 3000);
      }

      postData('../php/server.php', formData)
        .then((data) => {
          console.log(data);
          statusMessage.textContent = messages.success;
        })
        .catch(() => {
          statusMessage.textContent = messages.fail;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;

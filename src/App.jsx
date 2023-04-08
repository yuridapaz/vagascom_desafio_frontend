import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const [stickerCount, setStickerCount] = useState(1);
  const [minStickerValue, setMinStickerValue] = useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    if (data.observações.trim() === '') data.observações = 'Nada foi adicionado como observações';
    console.log(data);
    setStickerCount(1);
    reset();
  };

  // Fazer em TS depois
  const handleStickerAmount = (type) => {
    switch (type) {
      case 'decrease':
        setStickerCount((prev) => prev - 1);
        setValue('quantidade', stickerCount - 1);
        break;

      case 'increase':
        setStickerCount((prev) => prev + 1);
        setValue('quantidade', stickerCount + 1);
    }
  };

  const handleMinStickerValue = () => {
    const dataValue = getValues();
    setMinStickerValue(dataValue.stickers.length);
  };

  return (
    <div className='body_container'>
      <form className='form_container' onSubmit={handleSubmit(onSubmit)}>
        <div className='form_header_box'>
          <h1 className='header_title'>
            Formulário
            <br />
            para compra de
            <br />
            <span className='header_title_span'>Pacote de Stickers</span>
          </h1>
        </div>
        <div className='form_fieldset_box'>
          {/* Parte dos checkboxes */}
          <fieldset className='form_fieldset_checkboxOptions'>
            <legend className='fieldset_title'>Quais stickers?</legend>
            <label htmlFor='vue' className={`checkbox_label ${errors.stickers && 'error'}`}>
              Vue
              <input
                type='checkbox'
                id='vue'
                value='vue'
                {...register('stickers', {
                  required: true,
                  onChange: () => {
                    handleMinStickerValue();
                  },
                })}
              />
              <span className={`checkbox_span ${errors.stickers && 'error'}`}></span>
            </label>
            <label htmlFor='react' className={`checkbox_label ${errors.stickers && 'error'}`}>
              React
              <input
                type='checkbox'
                id='react'
                value='react'
                {...register('stickers', {
                  required: true,
                  onChange: () => {
                    handleMinStickerValue();
                  },
                })}
              />
              <span className={`checkbox_span ${errors.stickers && 'error'}`}></span>
            </label>
            <label htmlFor='angular' className={`checkbox_label ${errors.stickers && 'error'}`}>
              Angular
              <input
                type='checkbox'
                id='angular'
                value='angular'
                {...register('stickers', {
                  required: true,
                  onChange: () => {
                    handleMinStickerValue();
                  },
                })}
              />
              <span className={`checkbox_span ${errors.stickers && 'error'}`}></span>
            </label>
            <label htmlFor='disabled' className='checkbox_label'>
              disabled just example
              <input
                type='checkbox'
                id='disabled'
                value='disabled'
                disabled='disabled'
                {...register('stickers')}
              />
              <span className='checkbox_span error'></span>
            </label>
            {errors.stickers && (
              <p className='error_message'>Escolher ao menos um tipo de sticker</p>
            )}
          </fieldset>
          {/* Parte da quantidade de stickers */}
          <fieldset className='form_fieldset_counter'>
            <legend className='fieldset_title'>Quantos stickers de cada?</legend>
            <div className='fieldset_counter_div'>
              <label htmlFor='counter_input'>
                <button
                  type='button'
                  className='fieldset_counter_button'
                  onClick={() => handleStickerAmount('decrease')}
                  disabled={stickerCount <= 1 ? true : false}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                    <path d='M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z' />
                  </svg>
                </button>
              </label>
              <input
                type='number'
                name='counter_input'
                id='counter_input'
                className={`fieldset_counter_input ${errors.quantidade && 'error'} `}
                value={stickerCount}
                {...register('quantidade', {
                  onChange: (e) => setStickerCount(Number(e.target.value)),
                  valueAsNumber: true,
                  required: true,
                  min: minStickerValue,
                  max: 33,
                })}
              />
              <label htmlFor='counter_input'>
                <button
                  type='button'
                  className='fieldset_counter_button'
                  onClick={() => handleStickerAmount('increase')}
                  disabled={stickerCount >= 33 ? true : false}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                    <path d='M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z' />
                  </svg>
                </button>
              </label>
            </div>
            {errors.quantidade && (
              <p className='error_message'>Quantidade mínima é de: {minStickerValue} </p>
            )}
          </fieldset>
          {/* Parte de observações  */}
          <fieldset className='form_fieldset_textDescription'>
            <legend className='fieldset_title'>Observações:</legend>
            <label htmlFor='description'>
              <textarea
                name='description'
                id='description'
                placeholder='Alguma dúvida ou recado?'
                className='fieldset_textarea'
                {...register('observações')}
              ></textarea>
            </label>
          </fieldset>
          <div className='form_bottom_box'>
            {isSubmitSuccessful && (
              <p className='bottom_box_message'>Formulário enviado com sucesso!</p>
            )}
            {isSubmitSuccessful ? (
              <button type='submit' className='bottom_box_submit_button' disabled='disabled'>
                Enviar
              </button>
            ) : (
              <button type='submit' className='bottom_box_submit_button'>
                Enviar
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

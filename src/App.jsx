import './App.css';

function App() {
  return (
    <div className='body_container'>
      <div className='form_container'>
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
          {/* Parte dos checkboxs */}
          <fieldset className='form_fieldset_checkboxOptions'>
            <legend className='fieldset_title'>Quais stickers?</legend>
            <label htmlFor='vue' className='checkbox_label'>
              Vue
              <input type='checkbox' id='vue' />
              <span className='checkbox_span'></span>
            </label>
            <label htmlFor='react' className='checkbox_label'>
              React
              <input type='checkbox' id='react' />
              <span className='checkbox_span'></span>
            </label>
            <label htmlFor='angular' className='checkbox_label error'>
              Angular
              <input type='checkbox' id='angular' />
              <span className='checkbox_span error'></span>
            </label>
            <label htmlFor='disabled' className='checkbox_label'>
              disabled
              <input type='checkbox' id='disabled' disabled='disabled' />
              <span className='checkbox_span error'></span>
            </label>
          </fieldset>
          {/* Parte da quantidade de stickers */}
          <fieldset className='form_fieldset_counter'>
            <legend className='fieldset_title'>Quantos stickers de cada?</legend>
            <div className='fieldset_counter_div'>
              <label htmlFor='counter_input'>
                <button className='fieldset_counter_button'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                    <path d='M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666legend3.334v4.666z' />
                  </svg>
                </button>
              </label>
              <input
                type='number'
                name='counter_input'
                id='counter_input'
                className='fieldset_counter_input'
                value={30}
              />
              <label htmlFor='counter_input'>
                <button className='fieldset_counter_button'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                    <path d='M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z' />
                  </svg>
                </button>
              </label>
            </div>
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
              ></textarea>
            </label>
          </fieldset>
          <div className='form_bottom_box'>
            <p className='bottom_box_message'>Formulário enviado com sucesso!</p>
            <button type='submit' className='bottom_box_submit_button'>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

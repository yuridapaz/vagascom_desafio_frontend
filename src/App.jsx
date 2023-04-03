import './App.css';

function App() {
  return (
    <div className='body_container'>
      <div className='form_container'>
        <div className='form_header'>
          <h1 className='header_title'></h1>
        </div>
        <div className='form_box'>
          <fieldset className='form_fieldset_checkboxOptions'>
            <h2 className='fieldset_title'>Quais stickers:</h2>
            <div className='fieldset_checkboxOptions_div'>
              <input type='checkbox' name='vue' id='vue' className='checkboxOptions_checkbox' />
              <label htmlFor='vue'>Vue</label>
            </div>
            <div className='fieldset_checkboxOptions_div'>
              <input type='checkbox' name='react' id='react' className='checkboxOptions_checkbox' />
              <label htmlFor='react'>React </label>
            </div>
            <div className='fieldset_checkboxOptions_div'>
              <input
                type='checkbox'
                name='angular'
                id='angular'
                className='checkboxOptions_checkbox'
              />
              <label htmlFor='angular'>Angular</label>
            </div>
          </fieldset>

          <fieldset className='form_fieldset_counter'>
            <h2 className='fieldset_title'>Quantos stickers de cada?</h2>
            <div className='fieldset_counter_div'>
              <label htmlFor='counter_input'>
                <button>+</button>
              </label>
              <input type='number' name='counter_input' id='counter_input' />
              <label htmlFor='counter_input'>
                <button>-</button>
              </label>
            </div>
          </fieldset>

          <fieldset className='form_fieldset_textDescription'>
            <label htmlFor='description'>
              <h2 className='fieldset_title'>Observações:</h2>
            </label>
            <textarea
              name='description'
              id='description'
              placeholder='Alguma dúvida ou recado?'
            ></textarea>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;

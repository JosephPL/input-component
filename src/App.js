import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">

      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input />' placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='&:hover'  variant='hover' placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='&:focus' variant='focus-within' placeholder='Placeholder'/>
        </div>
      </div>

      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input error />' error={true} placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='<Input disabled />' disabled='disabled' placeholder='Placeholder'/>
        </div>
      </div>

      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input helperText=”Some interesting text” />' helperText='Some interesting text' placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='<Input helperText=”Some interesting text” error />' helperText='Some interesting text' error={true} placeholder='Placeholder'/>
        </div>
      </div>

      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input startIcon />' startIcon='fa-solid fa-phone' placeholder='Placeholder'/>
        </div>
        <div className='col3'>
          <Input label='Label' text='<Input endIcon />'  endIcon='fa-solid fa-lock' placeholder='Placeholder'/>
        </div>
      </div>
    
      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input value=”text” />' value='text' placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='<Input size=”sm” />' size='sm' placeholder='Placeholder'/>
        </div>

        <div className='col3'>
          <Input label='Label' text='<Input size=”md” />' placeholder='Placeholder'/>
        </div>
      </div>

      <div className='row'>
        <div>
          <Input label='Label' text='<Input fullWidth />' size='fullwidth' placeholder='Placeholder'/>
        </div>
      </div>

      <div className='row'>
        <div className='col3'>
          <Input label='Label' text='<Input multiline row=”4” />' rows='4' placeholder='Placeholder'/>
        </div>
      </div>

      <footer>
        <p className='textCenter'>created by <span>JosephPL</span> - devChallenges.io</p>
      </footer>
    </div>

    
  );
}

export default App;

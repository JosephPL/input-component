const Input = ({text, placeholder, label, variant, error, disabled, helperText, startIcon, endIcon, size, rows, value}) => { 

    let classInput = '';
    let labelError = '';

    (variant !== undefined) ? classInput = 'input ' + variant : classInput = 'input';
    switch(size){
        case 'sm' :
            classInput+= ' ' + size;
            break;
        case 'md' :
            classInput+= ' ' + size;
            break;
        case 'fullwidth' :
            classInput+= ' ' + size;
            break;
        default :
            classInput += ' md';
            break;
    }

    const start = <i className={startIcon}></i>
    const end = <i className={endIcon}></i>
   
    if(error === true){
        labelError = 'labelError'
        classInput += ' error';
    }

    if(disabled !== undefined){
        classInput = 'disabled';
    }

    return (
        <div> 
            {(helperText === undefined) ? (<>
                <p>{text}</p>
                <div>
                    <label className={labelError}>{label}</label>
                </div>
                <div className={classInput}>
                    {start}
                    { ( rows <= 1 || rows === undefined) ? (<>
                            <input type="text" className={size} placeholder={placeholder} defaultValue={value} disabled={disabled} />
                        </>) : (<>
                            <textarea type="text" placeholder={placeholder} disabled={disabled} rows={rows} cols='27'/>
                        </>)
                    }
                    {end}
                </div>
            </>) : (<>
                <p>{text}</p>
                <div>
                    <label className={labelError}>{label}</label>
                </div>
                <div className={classInput}>
                {start}
                    { ( rows <= 1 || rows === undefined) ? (<>
                            <input type="text" placeholder={placeholder} defaultValue={value} disabled={disabled} />
                        </>) : (<>
                            <textarea type="text" placeholder={placeholder} disabled={disabled} rows={rows} cols='27'/>
                        </>)
                    }
                    {end}
                </div>
                <p className={labelError}>{helperText}</p>
            </>)} 
            
        </div>
    )
 }

 export default Input;

//  { ( rows <= 1 || rows === undefined) ? (<>
//     <input type="text" placeholder={placeholder} disabled={disabled} rows={rows} />
//  </>) : (<>
//     <textarea type="text" placeholder={placeholder} disabled={disabled} rows={rows} />
//  </>)
//  }
// import { useField } from 'formik';

// import React, { useEffect, useState } from 'react'

// import './CustomInput.scss'

// export default function CustomInput(props) {

//     const [value, setValue] = useState('')

//     const [field, meta] = useField(props);

//     const [inputFocus, setInputFocus] = useState(false);

//     const [allowed, setAllowed] = useState(false)

//     const onChange = e => {
//         setValue(e.target.value);
//         // props.onChangeInput(e)
//     }

//     const handleFocus = () => {
//         setInputFocus(true)
//     }

//     const handleBLur = (formikBlur, e) => {
//         setInputFocus(false)
//         if (!(field.value.length > 0)) {
//             setAllowed(false);
//         } else setAllowed(true)
//         formikBlur(e);
//     }

//     useEffect(() => {
//         setValue(props.value)
//         if (props.value) {
//             setAllowed(true)
//         } else setAllowed(false)
//     }, [props.value])

//     return (
//         <div className='formcontrol-input'>
//             <label
//                 className={inputFocus ? 'label active' : (allowed ? 'label allowed' : 'label')}
//             >
//                 {props.label}
//             </label>
//             <div className='input-item'>
//                 <input
//                     className={inputFocus ? 'active' :
//                         (allowed ? 'allowed' : '')}
//                     onChange={onChange}
//                     {...field}
//                     {...props}
//                     onFocus={handleFocus}
//                     onBlur={e => handleBLur(field.onBlur, e)}
//                 />
//                 {meta.error && meta.touched && (
//                     <p className='error'>{meta.error}</p>
//                 )}
//                 <fieldset className={
//                     inputFocus ? 'active' :
//                         (allowed ? 'allowed' : '')
//                 }>
//                     <legend>
//                         <span>{props.label}</span>
//                     </legend>
//                 </fieldset>
//             </div>
//         </div >
//     )
// }


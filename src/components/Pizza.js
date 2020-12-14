import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import  * as Yup from 'yup';
import axios from 'axios';

function Pizza ({setPost}){
    let history=useHistory();
    const [formState, setFormState]=useState({
        name:"",
        size:"",
        onion:false,
        xtracheese:false,
        mushroom:false,
        pepperoni:false,
        sausage:false,
        ham:false,
        bellpepper:false,
        pineapple:false,
        bacon:false,
        olive:false,
        chicken:false, 
        special:"",
    })
    const [serverError, setServerError]=useState("");
    const [buttonIsDisabled, setButtonIsDisabled]= useState(true);
    const [errors,setErrors]=useState({
        name:"",
        size:"",
        onion:"",
        xtracheese:"",
        mushroom:"",
        pepperoni:"",
        sausage:"",
        ham:"",
        bellpepper:"",
        pineapple:"",
        bacon:"",
        olive:"",
        chicken:"", 
        special:"",
    });

    const validateChange =(e)=>{
        yup.reach(formSchema, e.target.name)
        .validate(
            e.target.type ==="checkbox" ? e.target.checked : e.target.value
        )
        .then((valid)=>{
            setErrors({ ...errors, [e.target.name]: ""});
        })
        .catch((err)=>{
            console.log("ERR", err);
            setErrors({ ...errors, [e.target.name]: err.errors[0]});

        });
    }
    useEffect(()=>{
formSchema.isValid(formState).then((valid)=>{
    setButtonIsDisabled(!valid);
});
    },[formState]);

    const formSchema = yup.object().shape({
        name:yup.string()
        .min(2,"Name must be at least 2 characters")
        .required("Any old name will do"),

        size:yup.string()
        .oneOf(["Now","Now and Later", "Sharin'", "They found out I'm getting pizza, now I have to share"])
        .required("choose a size"),

        onion: yup.boolean(),
        xtracheese: yup.boolean(),
        mushroom: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        ham: yup.boolean(),
        bellpepper: yup.boolean(),
        pineapple: yup.boolean(),
        bacon: yup.boolean() ,
        olive: yup.boolean(),
        chicken:yup.boolean(), 
        special: yup.string()
    });

    const handleChange=(e)=>{
        e.persist();
        const newFormState ={
            ...formState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormState);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        callPost();
    }

    function callPost(){
        axios.post("https://regres.in/api/users", formState)
        .then((res)=>{
            console.log('Response from data', res.data)
            setPost(res.data)
            setServerError(null);

        })
        .catch((err)=>{
            setServerError("Servers are having technical difficulties. Please try again when they are feeling better.");
        })
    }

    const confirmOrder=(e)=>{
        history.push('/pizza/confirmed');
        setFormState({
            name:"",
            size:"",
            onion:false,
            xtracheese:false,
            mushroom:false,
            pepperoni:false,
            sausage:false,
            ham:false,
            bellpepper:false,
            pineapple:false,
            bacon:false,
            olive:false,
            chicken:false, 
            special:"",   
        });
    }

    return(
        <div className="pizza">
            <h2>Perfect to eat while coding!</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
                <input 
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                data-cy="name"
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label>

            <label htmlFor="size"><h5>Sizes</h5>
            <select
            id="size"
            name="size"
            value={formState.size}
            onChange={handleChange}
            data-cy="size">
            <option value=""> PICK A SIZE </option>
            <option value="Now">Now</option>
            <option value="Now and Later">Now and Later</option>
            <option value="Sharin'">Sharin'</option>
            <option value="They found out I'm getting pizza, now I have to share">They found out I'm getting pizza, now I have to share</option>
            </select>
            {errors.size.lenght > 0 ? <p className="error">{errors.size}</p> : null}
            </label>
            <div className="toppings">
                <h4>Pick your toppings</h4>

            </div>
            <label htmlFor="onion" className="toppers">
                Onion 
                <input
                type="checkbox"
          
            id="onion"
            name="onion"
            checked={formState.onion}
            onChange={handleChange}/>
            </label>
            <label htmlFor="xtracheese" className="toppers">
                <input
                type="checkbox"
                id="xtracheese"
                name="xtracheese"
                checked={formState.xtracheese}
                onChange={handleChange}/>
            </label>

            <label htmlFor="mushroom" className="toppers">
                <input
                type="checkbox"
                id="mushroom"
                name="mushroom"
                checked={formState.mushroom}
                onChange={handleChange}/>
            </label>

            <label htmlFor="pepperoni" className="toppers">
                <input
                type="checkbox"
                id="pepperoni"
                name="pepperoni"
                checked={formState.pepperoni}
                onChange={handleChange}/>
            </label>

            <label htmlFor="sausage" className="toppers">
                <input
                type="checkbox"
                id="sausage"
                name="sausage"
                checked={formState.sausage}
                onChange={handleChange}/>
            </label>
            
            <label htmlFor="ham" className="toppers">
                <input
                type="checkbox"
                id="ham"
                name="ham"
                checked={formState.ham}
                onChange={handleChange}/>
            </label>
            
            <label htmlFor="bellpepper" className="toppers">
                <input
                type="checkbox"
                id="bellpepper"
                name="bellpepper"
                checked={formState.bellpepper}
                onChange={handleChange}/>
            </label>

            <label htmlFor="pineapple" className="toppers">
                <input
                type="checkbox"
                id="pineapple"
                name="pineapple"
                checked={formState.pineapple}
                onChange={handleChange}/>
            </label>

            <label htmlFor="bacon" className="toppers">
                <input
                type="checkbox"
                id="bacon"
                name="bacon"
                checked={formState.bacon}
                onChange={handleChange}/>
            </label>

            <label htmlFor="olive" className="toppers">
                <input
                type="checkbox"
                id="olive"
                name="olive"
                checked={formState.olive}
                onChange={handleChange}/>
            </label>
            
            <label htmlFor="chicken" className="toppers">
                <input
                type="checkbox"
                id="chicken"
                name="chicken"
                checked={formState.chicken}
                onChange={handleChange}/>
            </label>
            
            <div className="special">
                <h4>Special Instructions</h4>
            </div>
            <label htmlFor="special">
                <textarea
                id="special"
                name="special"
                value={formState.special}
                onChange={handleChange}
                placeholder="Anything else we should know about your order?"/>
            </label>
            <div className="submit">
                <button type="submit" disabled={buttonIsDisabled}
                data-cy="add">
                    Add to order
                </button>
            </div>    
        </form>
            <button disabled ={buttonIsDisabled}
            className="confirm"
            data-cy="confirm"
            onClick={confirmOrder}>Confirm Order</button>

        </div>
    )
}


export default Pizza;
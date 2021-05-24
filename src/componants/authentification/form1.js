import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
import DropDownListCheckBoxLanguages from './DropDownListCheckBoxLanguages';

const url='/login'
class Form1 extends Component {

    state = {
        showErr : false,
        lang :[]
      }

    add_supp = (e)=>{
        e.target.checked===true?this.setState({
            lang:[...this.state.lang,e.target.value]
        }):this.setState({
            lang:this.state.lang.map(ele=>{
                if(ele!==e.target.value){
                    return ele
                }
            })
        })
        //alert(this.state.lang)
    }
    setLangue=(cat)=>{
        //this.setState({ category: cat });
        this.props.setLangue(cat);
        
    }   

    continue = e => {
        e.preventDefault();
        const firstName=document.getElementById("firstName").value.length;
        const lastName=document.getElementById("lastName").value.length;
        const showName=document.getElementById("showName").value.length;
        const birthDate=document.getElementById("birthDate").value.length;
        const city=document.getElementById("city").value.length;
        const adresse=document.getElementById("adresse").value.length;
        const langueSelected =document.getElementById("langueSelected").value.length;

        if(firstName!==0 && lastName!==0 && showName!==0 && birthDate!==0 && city!==0 && langueSelected!==0 && adresse!==0){
            this.props.nextStep();
        }
        else{
            this.setState({ showErr: true })
        }
    };

    back = e => {
        e.preventDefault();
        document.location.href=url;
    }
    
    render() {
        const { values, inputChange } = this.props;
        
        return (

            <div className="Brico">

                <div className="form-container mt-5 mb-5" style={{width:"50%"}}>

                    <SweetAlert
                    show={this.state.showErr}
                    title="Error"
                    text="Merci de vérifier tous les champs nécessairs"
                    onConfirm={() => this.setState({ showErr: false })}
                    />


                    <p className="title">Devenir notre MinuteBricoleur<br/> en quelques étapes</p>
                    <div style={{marginLeft:"50px", marginRight:"50px"}}>
                        <form>
                            <div className="form-outline mb-4 md-5">
                                <label className="form-label" htmlFor="form5Example1">Votre Nom<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="firstName" name="firstName1" onChange={inputChange('firstName')} value={values.firstName} required />
                            </div>

                            <div className="form-outline mb-4 md-5">
                                <label className="form-label" htmlFor="form5Example1">Votre Prénom<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="lastName" name="lastName1" onChange={inputChange('lastName')} value={values.lastName}  required />
                            </div>

                            <div className="form-outline mb-4 md-5">
                                <label className="form-label" htmlFor="form5Example1">Nom d'affichage <span style={{color:'red'}}>*</span> </label>
                                <input type="text" className="form-control" id="showName" name="showName1" onChange={inputChange('displayName')} value={values.displayName} required />
                            </div>

                            <div className="birthDate mb-4">
                                <label className="form-label" htmlFor="form5Example1">Date de Naissance<span style={{color:'red'}}>*</span></label>
                                <input type="date" className="form-control" id="birthDate" name="birthDate1" onChange={inputChange('birthDate')} value={values.birthDate} required  />
                            </div>
                            
                            <div className=" mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                                <label className="form-label" htmlFor="form5Example2">Ville<span style={{color:'red'}}>*</span></label> 
                                <select  className="form-select" id="city" name="city1" onChange={inputChange('city')}  value={values.city} required>
                                    <option selected></option>
                                    <option value="Rabat">Rabat</option>
                                    <option value="Agadir">Agadir</option>
                                    <option value="Tanger">Tanger</option>
                                    <option value="Casablanca">Casablanca</option>
                                    <option value="Fes">Fes</option>
                                    <option value="Meknès">Meknès</option>
                                    <option value="Tetouan">Tetouan</option>
                                    <option value="Ouajda">Ouajda</option>
                                    <option value="Nador">Nador</option>
                                    <option value="El hoceima">El hoceima</option>
                                    <option value="Marrakech">Marrakech </option>
                                </select>        
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"inline-block"}} >
                                <label className="form-label" htmlFor="form5Example1">Adresse<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="adresse" name="adresse1" onChange={inputChange('adresse')} value={values.adresse}  required />
                            </div>
                            

                            <DropDownListCheckBoxLanguages inputChange={inputChange('langues')} setLangue={this.setLangue}  />
                            

                            <div className="form-outline mb-4 mt-5">
                                <label class="form-label" for="customFile">Photo de profil</label>
                                <input type="file" class="form-control" id="customFile"  onChange={inputChange('photo')} value={values.photo} />
                                <p style={{fontSize:"12px"}} >Veuillez importer une photo de vous, préférablement en portrait<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                            </div>

                            <button onClick={this.back} style={{float:'left'}}  className="btn btn-primary btn-block mb-4">Retour</button>
                            <button onClick={this.continue} style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Suivant</button>
                        </form>             
                    </div>
               </div>
            </div>
        )
    }
}
export default Form1;

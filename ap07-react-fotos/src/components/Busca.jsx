import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputText } from 'primereact/inputtext'
import { InputIcon } from 'primereact/inputicon'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    render() {
        return (
            <div className='flex flex-column'> 
                <IconField className = 'w-full' iconPosition='left'>
                    <InputIcon className='pi pi-search'/>
                    <InputText className = 'w-full' placeholder='Buscar'/>
                </IconField>

                <Button className = 'mt-5' label='Pesquisar'/>
            </div>   
        )
    }
}

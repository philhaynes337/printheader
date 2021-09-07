import React, { Component } from "react";
import CreateHeader from './CreateHeader'
const { ipcRenderer } = window.require('electron');



class CreateHeaderLoading extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            loadingComplete: false,
            status: 'Loading Complete',
            test: []
        }
    }




    render() {



        const isPageLoaded = this.state.status;

        let loaded;

        if (isPageLoaded === 'Loading') {
            loaded = <div>Loading</div>
        } else if(isPageLoaded === 'Loading Complete'){
            loaded = <CreateHeader />
        }else {
            loaded = <div>Error Loading</div>
        }


        return(
            <div>
            {loaded}       
            </div>
        )
    }
}

export default CreateHeaderLoading;
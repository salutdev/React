import React from 'react'
import { render } from 'react-dom'
import { Member } from './components/ui/Member'
import { MemberList } from './components/ui/MemberList'

window.React = React

render(

    <div>
        <Member admin={true} 
                name="Edna Welch"
                email="edna.welch88@example.com"
                thumbnail="https://randomuser.me/api/portraits/women/3.jpg"
                makeAdmin={(email) => console.log(email)} />
        
        <MemberList />
    </div>
            ,
            document.getElementById('react-container')

)
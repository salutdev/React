import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Member } from './Member'

export class MemberList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [
                // {
                //     name: "Joe Wilson",
                //     email: "joe.wilson@example.com",
                //     thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
                // },
                // {
                //     name: "Stacy Gardner",
                //     email: "stacy.gardner@example.com",
                //     thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
                // },
                // {
                //     name: "Billy Young",
                //     email: "billy.young@example.com",
                //     thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
                // }
              ],
              loading: false,
              administrators: []
        }

        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://api.randomuser.me/?nat=US&results=12")
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members,
                loading: false
            }))
    }

    makeAdmin(email) {
        const administrators = [
            ...this.state.administrators,
            email
        ]
        this.setState({administrators})
    }

    removeAdmin(email) {
        const administrators = this.state.administrators.filter(adminEmail => adminEmail !== email)
        this.setState({administrators})
    }

    render() {
        return (
            <div className="member-list">
                <h1>Society members</h1>
                {this.state.loading ?
                    <span>loading...</span> :
                    <span>{this.state.members.length} members</span>
                }

                { this.state.members.length ?
                    this.state.members.map((member, i) =>
                     <Member key={i}
                                admin={this.state.administrators.some(
                                    adminEmail => adminEmail === member.email)}
                                onClick={email => console.log(email)}
                                name={member.name.first + ' ' + member.name.last}
                                email={member.email}
                                thumbnail={member.picture.thumbnail}
                                makeAdmin={this.makeAdmin}
                                removeAdmin={this.removeAdmin}
                                />
                ) :
                <span>Currently 0 members</span>
            }
            </div>
        )
    }
}

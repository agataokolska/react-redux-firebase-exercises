import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUserSyncAction } from './state/users'

class Users extends Component {

    componentDidMount() {
        this.props.initUserSyncAction()
    }

    render() {
        return (
            this.props.users === null ?
                'Ładowanie userów...'
                :
                Object.entries(this.props.users)  //zmienia obiekt na tablice (struktura w bazie users->key ->name)
                    .map(([key, value]) => ({
                        ...value,
                        key
                    }))
                    .map(user => (
                        <div
                        key={user.key}
                        >{user.name}</div>
                    )))
    }
}

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    initUserSyncAction: () => dispatch(initUserSyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUserSyncAction, stopUserSyncAction } from './state/users'

class Users extends Component {

    componentDidMount() {
        this.props.initUserSyncAction()
    }


    componentWillUnmount() {
        this.props.stopUserSyncAction()
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
    initUserSyncAction: () => dispatch(initUserSyncAction()),
    stopUserSyncAction: () => dispatch(stopUserSyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
import React from 'react';
import HamburgerMenu from "react-hamburger-menu";

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
        this.props.dispatch(
            {
                type: 'OPEN_LIST',
            },
        )
        this.props.dispatch(
            {
                type: 'CENTER_DATA',
                payload: {
                    centerData: this.props.data
                }
            },
        )




        if (!this.state.isOpenList) {

            this.props.dispatch(
                {
                    type: 'NOW_PLAY',
                    payload: {
                        playNum: -1
                    }
                },
            )

            this.props.dispatch(
                {
                    type: 'END_PLAY',
                },
            )

            this.props.dispatch(
                {
                    type: 'STOP_PLAY',
                },
            )

        }





    }
    render() {
        return (
            <div >
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={30}
                    height={20}
                    strokeWidth={3}
                    rotate={0}
                    color='#ffffff'
                    borderRadius={5}
                    animationDuration={0.5}
                />
            </div>
        )
    }
}

export default Burger
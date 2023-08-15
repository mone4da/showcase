import ReactMovableResizable from 'react-movable-resizable'

const Windowish = props => {
    return <ReactMovableResizable borderColor='white'>
        {props.children}
    </ReactMovableResizable>
}

export {Windowish}